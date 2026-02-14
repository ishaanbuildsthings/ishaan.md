export default function Sidebar() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          now
        </h2>
        <p className="text-xs text-foreground leading-relaxed">
          Eng #2 at{" "}
          <a
            href="https://www.extend.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan underline hover:text-cyan-dim"
          >
            Extend AI
          </a>{" "}
          (YC W23)
        </p>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          links
        </h2>
        <ul className="text-xs space-y-1">
          <li>
            <a
              href="https://leetcode.com/u/leetgoat_dot_io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              LeetCode (~2800 ELO)
            </a>
          </li>
          <li>
            <a
              href="https://algfinder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              algfinder.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ishaanbuildsthings/leetcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              leetgoat.io (240 stars)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ishaanbuildsthings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              competitive coding templates
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Uniswap/v4-core/blob/main/docs/whitepaper-v4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Uniswap v4 white paper
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          my agent
        </h2>
        <p className="text-xs text-muted leading-relaxed">
          AI agent powered by Claude that lives on my devices.{" "}
          <a
            href="https://ishaan.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green underline hover:text-green-dim"
          >
            ishaan.bot
          </a>
        </p>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          me
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a
            href="https://www.linkedin.com/in/ishaan-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground underline hover:text-muted"
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
    </div>
  );
}
