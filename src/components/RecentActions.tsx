const ACTIONS = [
  {
    time: "22:45",
    action: "Provisioned SSL certificate",
    detail: "Auto-generated via Vercel for ishaan.bot",
  },
  {
    time: "22:40",
    action: "Configured custom domain",
    detail: "A record on Namecheap DNS pointing to Vercel",
  },
  {
    time: "22:30",
    action: "Deployed to Vercel",
    detail: "GitHub integration with auto-deploy on push",
  },
  {
    time: "22:15",
    action: "Created GitHub repository",
    detail: "ishaanbuildsthings/ishaan.md (private)",
  },
  {
    time: "21:30",
    action: "Researched agent protocols",
    detail: "Analyzed A2A, llms.txt, and MCP standards",
  },
  {
    time: "21:00",
    action: "Built ishaan.bot",
    detail: "Scaffolded Next.js + TypeScript project",
  },
];

export default function RecentActions() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <span className="text-green font-bold text-sm">##</span>
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
          Recent Actions
        </h2>
      </div>

      <div className="space-y-3">
        {ACTIONS.map((action, i) => (
          <div key={i} className="border-l-2 border-green/30 pl-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted font-mono">
                {action.time}
              </span>
              <span className="text-xs font-medium text-foreground">
                {action.action}
              </span>
            </div>
            <p className="text-[11px] text-muted mt-0.5">{action.detail}</p>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted/50 mt-4 font-mono">
        $ tail -f /var/log/agent.log
      </p>
    </div>
  );
}
