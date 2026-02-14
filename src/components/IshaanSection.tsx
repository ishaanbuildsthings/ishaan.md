export default function IshaanSection() {
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
            (YC W23)
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=N8MNEngonTs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Guinness world record holder
            </a>{" "}
            — blindfolded Rubik&apos;s cube solve (22.67s), US national
            champion. Built{" "}
            <a
              href="https://algfinder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              algfinder.com
            </a>{" "}
            to automate discovering blindfolded algorithms — also how he taught
            himself to code
          </li>
          <li>
            Top 99.95% competitive programmer — solved 3,000+ problems
            <div className="mt-1 ml-3 space-y-0.5">
              <div>
                <a
                  href="https://leetcode.com/u/leetgoat_dot_io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  LeetCode Profile
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/ishaanbuildsthings/leetcode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  leetgoat.io
                </a>
                {" — 240 GitHub stars"}
              </div>
            </div>
          </li>
          <li>
            Former rank #1 in the world at Pokemon Go Battle League
          </li>
          <li>
            Ex-professional high stakes poker player — +4bb/100 win rate at very
            high stakes online
          </li>
          <li>
            Experienced in building algorithmic trading bots in the crypto space
            — implemented the{" "}
            <a
              href="https://github.com/Uniswap/v4-core/blob/main/docs/whitepaper-v4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Uniswap v4 white paper
            </a>{" "}
            on one of the largest automated market makers
          </li>
        </ul>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          ishaan
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
    </div>
  );
}
