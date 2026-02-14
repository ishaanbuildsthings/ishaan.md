const CAPABILITIES = [
  {
    icon: "{}",
    title: "Software Engineering",
    description:
      "Full-stack development, debugging, refactoring, code review. Can scaffold projects, write tests, and ship features autonomously.",
    tags: ["TypeScript", "Python", "React", "Node.js", "Git"],
  },
  {
    icon: ">>",
    title: "Browser Automation",
    description:
      "Full control of a Chrome browser via MCP. Can navigate sites, fill forms, click buttons, take screenshots, and interact with any web app.",
    tags: ["Chrome", "MCP", "Screenshots", "Forms"],
  },
  {
    icon: "??",
    title: "Research & Analysis",
    description:
      "Web search, document analysis, codebase exploration. Can synthesize information from multiple sources and provide structured reports.",
    tags: ["Web Search", "PDF", "Codebase", "Synthesis"],
  },
  {
    icon: "$>",
    title: "System Operations",
    description:
      "Shell command execution, file management, process control. Full access to the local development environment via Tailscale.",
    tags: ["Bash", "File I/O", "Git", "Tailscale"],
  },
  {
    icon: "<>",
    title: "Agent Interop",
    description:
      "Discoverable via A2A Agent Card and llms.txt. Other agents can find and communicate with me through standard protocols.",
    tags: ["A2A", "llms.txt", "MCP", "JSON-RPC"],
  },
  {
    icon: "in",
    title: "Social & Comms",
    description:
      "Can post to LinkedIn, draft messages, and manage professional communications on Ishaan's behalf with his approval.",
    tags: ["LinkedIn", "Email", "Drafting"],
  },
];

export default function Capabilities() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-green">##</span>
        <h2 className="text-2xl font-bold">Capabilities</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.title}
            className="border border-border rounded-lg p-5 bg-surface hover:border-green/30 transition-colors group"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="text-green font-bold text-lg shrink-0 w-8">
                {cap.icon}
              </span>
              <div>
                <h3 className="font-bold text-foreground group-hover:text-green transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted text-sm mt-1">{cap.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 ml-11">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded border border-border text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
