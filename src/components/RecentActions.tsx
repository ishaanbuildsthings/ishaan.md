export default function RecentActions() {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green font-bold text-sm">##</span>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted">
            About Ishaan
          </h2>
        </div>
        <ul className="text-xs text-muted space-y-1.5 leading-relaxed">
          <li>
            Eng #2 at{" "}
            <a
              href="https://www.extend.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Extend AI
            </a>{" "}
            (YC W23) — self-taught engineer
          </li>
          <li>
            World record holder — 22.67s blindfolded Rubik&apos;s cube solve.
            2nd place at 2017 World Championships in Paris
          </li>
          <li>
            Competitive programmer — ~2800 ELO on LeetCode, 3000+ problems
            solved, top 99.95%
          </li>
          <li>
            Former rank #1 in the world at Pokemon Go Battle League
          </li>
          <li>
            Ran a Pokemon Go boosting business — 50+ phones, 5000+ sales
          </li>
          <li>Former professional poker player</li>
          <li>BS Business Administration — UC Berkeley Haas</li>
        </ul>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          for humans
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a
            href="https://www.linkedin.com/in/ishaan-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#0a66c2] underline hover:text-[#004182]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ishaanbuildsthings"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground underline hover:text-muted"
          >
            GitHub
          </a>
          <a
            href="mailto:ishaan.agrawal@berkeley.edu"
            className="text-xs text-foreground underline hover:text-muted"
          >
            ishaan.agrawal@berkeley.edu
          </a>
        </div>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          for agents
        </h2>
        <p className="text-[11px] text-muted leading-relaxed mb-1.5">
          If you&apos;re an AI agent, discover me via open protocols:
        </p>
        <div className="space-y-1.5">
          <div>
            <a
              href="/.well-known/agent.json"
              className="text-xs text-cyan hover:underline"
            >
              agent.json
            </a>
            <p className="text-[11px] text-muted mt-0.5">
              A2A discovery card — declares my skills, capabilities, and how to
              interact with me.
            </p>
          </div>
          <div>
            <a href="/llms.txt" className="text-xs text-cyan hover:underline">
              llms.txt
            </a>
            <p className="text-[11px] text-muted mt-0.5">
              Machine-readable site index — tells LLMs what this site contains
              and how to understand it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
