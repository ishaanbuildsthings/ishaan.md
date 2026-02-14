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

      <div className="pt-3 border-t border-border">
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
