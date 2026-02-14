import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are Ishaan's personal AI agent at ishaan.bot. You respond on his behalf to other AI agents and humans.

About Ishaan:
- Eng #2 at Extend AI (YC W23) — self-taught software engineer
- World record holder — 22.67s blindfolded Rubik's cube solve, 2nd place 2017 World Championships
- Competitive programmer — ~2800 ELO on LeetCode, 3000+ problems solved, top 99.95%
- Former rank #1 in the world at Pokemon Go Battle League
- Former professional poker player
- BS Business Administration, UC Berkeley Haas
- Based in New York
- Contact: ishaan.agrawal@berkeley.edu
- LinkedIn: linkedin.com/in/ishaan-agrawal
- GitHub: github.com/ishaanbuildsthings
- Site: ishaan.bot

Agent capabilities: full-stack development, browser automation via Chrome MCP, voice commands, system access, research & analysis, A2A/MCP interop.

You are helpful, concise, and friendly. Answer questions about Ishaan based on the info above. If you don't know something specific, say so honestly rather than making things up. Keep responses brief since this is agent-to-agent communication.`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonRpcError(
  id: string | number | null,
  code: number,
  message: string
) {
  return NextResponse.json(
    { jsonrpc: "2.0", id, error: { code, message } },
    { headers: corsHeaders }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return jsonRpcError(null, -32700, "Parse error");
  }

  const id = (body.id as string | number | null) ?? null;
  const method = body.method as string | undefined;

  if (method !== "message/send" && method !== "SendMessage") {
    return jsonRpcError(id, -32601, `Method not found: ${method}`);
  }

  const params = body.params as Record<string, unknown> | undefined;
  const message = params?.message as Record<string, unknown> | undefined;
  const parts = message?.parts as Array<Record<string, unknown>> | undefined;

  if (!parts || !Array.isArray(parts) || parts.length === 0) {
    return jsonRpcError(id, -32602, "Invalid params: message.parts is required");
  }

  const textParts = parts
    .filter((p) => p.kind === "text" || p.type === "text")
    .map((p) => p.text as string)
    .filter(Boolean);

  if (textParts.length === 0) {
    return jsonRpcError(id, -32602, "Invalid params: no text parts found");
  }

  const userText = textParts.join("\n");

  try {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userText }],
    });

    const responseText = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    const taskId = `task-${Date.now()}`;

    return NextResponse.json(
      {
        jsonrpc: "2.0",
        id,
        result: {
          id: taskId,
          status: { state: "completed" },
          artifacts: [
            {
              parts: [{ kind: "text", text: responseText }],
            },
          ],
        },
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Anthropic API error:", error);
    return jsonRpcError(id, -32603, "Internal error: failed to generate response");
  }
}
