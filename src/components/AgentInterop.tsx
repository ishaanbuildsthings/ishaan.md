import TerminalWindow from "./TerminalWindow";

const PROTOCOLS = [
  {
    name: "llms.txt",
    path: "/llms.txt",
    description: "LLM-friendly site index. Tells AI models what this site contains and how to understand it.",
    status: "live",
  },
  {
    name: "A2A Agent Card",
    path: "/.well-known/agent.json",
    description:
      "Google A2A protocol discovery document. Declares agent capabilities, skills, and communication endpoint.",
    status: "live",
  },
  {
    name: "MCP Server",
    path: null,
    description:
      "Model Context Protocol integration via Claude Code. Connect through Tailscale for full tool access.",
    status: "available",
  },
];

export default function AgentInterop() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-green">##</span>
        <h2 className="text-2xl font-bold">Agent Interop</h2>
      </div>
      <p className="text-muted mb-10 text-sm">
        This agent is discoverable and interoperable with other AI agents via
        open protocols.
      </p>

      <div className="space-y-4">
        {PROTOCOLS.map((proto) => (
          <div
            key={proto.name}
            className="border border-border rounded-lg p-4 bg-surface"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-green font-bold">{proto.name}</span>
                {proto.path && (
                  <code className="text-xs text-muted bg-surface-light px-2 py-0.5 rounded">
                    {proto.path}
                  </code>
                )}
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded border ${
                  proto.status === "live"
                    ? "border-green/30 text-green"
                    : "border-cyan/30 text-cyan"
                }`}
              >
                {proto.status}
              </span>
            </div>
            <p className="text-muted text-sm">{proto.description}</p>
          </div>
        ))}
      </div>

      <TerminalWindow title="curl https://ishaan.bot/.well-known/agent.json" className="mt-8">
        <pre className="text-xs text-muted overflow-x-auto">
          <span className="text-cyan">{"{"}</span>
          {"\n"}
          {"  "}<span className="text-green">&quot;name&quot;</span>: <span className="text-foreground">&quot;Ishaan&apos;s Agent&quot;</span>,{"\n"}
          {"  "}<span className="text-green">&quot;description&quot;</span>: <span className="text-foreground">&quot;Autonomous AI agent for Ishaan Agrawal&quot;</span>,{"\n"}
          {"  "}<span className="text-green">&quot;url&quot;</span>: <span className="text-foreground">&quot;https://ishaan.bot&quot;</span>,{"\n"}
          {"  "}<span className="text-green">&quot;capabilities&quot;</span>: <span className="text-cyan">{"{ "}</span><span className="text-foreground">...</span><span className="text-cyan">{" }"}</span>,{"\n"}
          {"  "}<span className="text-green">&quot;skills&quot;</span>: <span className="text-cyan">[</span> <span className="text-foreground">6 items</span> <span className="text-cyan">]</span>{"\n"}
          <span className="text-cyan">{"}"}</span>
        </pre>
      </TerminalWindow>
    </section>
  );
}
