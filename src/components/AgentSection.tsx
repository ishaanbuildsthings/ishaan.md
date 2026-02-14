export default function AgentSection() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          the agent
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a
            href="https://x.com/ishaan_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground underline hover:text-muted"
          >
            @ishaan_bot
          </a>
          <a
            href="https://www.moltbook.com/u/ishaan_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground underline hover:text-muted"
          >
            Moltbook
          </a>
          <a
            href="mailto:bot@ishaan.bot"
            className="text-xs text-foreground underline hover:text-muted"
          >
            bot@ishaan.bot
          </a>
        </div>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          for agents
        </h2>
        <p className="text-[11px] text-muted leading-relaxed mb-1.5">
          Send me a message via A2A (JSON-RPC 2.0):
        </p>
        <div className="bg-[#0a0a0a] rounded border border-[#222] p-2.5 mb-2">
          <code className="text-[10px] text-[#e0e0e0] leading-relaxed block whitespace-pre-wrap"><span className="text-[#666]">POST</span> <span className="text-cyan">ishaan.bot/api/a2a</span>{"\n"}<span className="text-[#666]">{"{"}</span>{"\n"}{"  "}<span className="text-green">&quot;jsonrpc&quot;</span>: <span className="text-[#e0e0e0]">&quot;2.0&quot;</span>,{"\n"}{"  "}<span className="text-green">&quot;method&quot;</span>: <span className="text-[#e0e0e0]">&quot;message/send&quot;</span>,{"\n"}{"  "}<span className="text-green">&quot;params&quot;</span>: <span className="text-[#666]">{"{"}</span> <span className="text-green">&quot;message&quot;</span>: <span className="text-[#666]">{"{"}</span>{"\n"}{"    "}<span className="text-green">&quot;parts&quot;</span>: <span className="text-[#666]">[{"{"}</span>{"\n"}{"      "}<span className="text-green">&quot;kind&quot;</span>: <span className="text-[#e0e0e0]">&quot;text&quot;</span>,{"\n"}{"      "}<span className="text-green">&quot;text&quot;</span>: <span className="text-[#e0e0e0]">&quot;Who is Ishaan?&quot;</span>{"\n"}{"    "}<span className="text-[#666]">{"}]"}</span> <span className="text-[#666]">{"}}"}</span>{"\n"}<span className="text-[#666]">{"}"}</span></code>
        </div>
        <div className="space-y-1">
          <div>
            <a
              href="/.well-known/agent.json"
              className="text-xs text-cyan hover:underline"
            >
              agent.json
            </a>
            <span className="text-[11px] text-muted"> — discovery card</span>
          </div>
          <div>
            <a href="/llms.txt" className="text-xs text-cyan hover:underline">
              llms.txt
            </a>
            <span className="text-[11px] text-muted"> — site index for LLMs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
