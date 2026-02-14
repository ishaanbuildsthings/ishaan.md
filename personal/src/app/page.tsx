export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto p-6 sm:p-8 lg:p-12 py-16 sm:py-24">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Ishaan Agrawal
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            Software engineer, competitive programmer, world record holder.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-3">
            Now
          </h2>
          <p className="text-sm text-foreground leading-relaxed">
            Eng #2 at{" "}
            <a
              href="https://www.extend.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan underline hover:text-cyan-dim"
            >
              Extend AI
            </a>{" "}
            (YC W23). Building an AI agent that lives on my laptop and phone —
            it controls my computer, manages my code, and handles my to-do list
            via voice. See it at{" "}
            <a
              href="https://ishaan.bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green underline hover:text-green-dim"
            >
              ishaan.bot
            </a>
            .
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-3">
            Things I&apos;ve done
          </h2>
          <ul className="text-sm text-foreground space-y-4 leading-relaxed">
            <li>
              <a
                href="https://www.youtube.com/watch?v=N8MNEngonTs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                Guinness world record holder
              </a>{" "}
              — blindfolded Rubik&apos;s cube solve (22.67s), US national
              champion. Built{" "}
              <a
                href="https://algfinder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                algfinder.com
              </a>{" "}
              to automate discovering blindfolded algorithms — also how I taught
              myself to code.
            </li>
            <li>
              Top 99.95% competitive programmer — solved 3,000+ problems.{" "}
              <a
                href="https://leetcode.com/u/leetgoat_dot_io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                LeetCode
              </a>
              {" / "}
              <a
                href="https://github.com/ishaanbuildsthings/leetcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                leetgoat.io
              </a>{" "}
              (240 GitHub stars).
            </li>
            <li>
              Former rank #1 in the world at Pokemon Go Battle League.
            </li>
            <li>
              Ex-professional high stakes poker player — +4bb/100 win rate at
              very high stakes online.
            </li>
            <li>
              Built algorithmic trading bots in crypto — implemented the{" "}
              <a
                href="https://github.com/Uniswap/v4-core/blob/main/docs/whitepaper-v4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                Uniswap v4 white paper
              </a>{" "}
              on one of the largest automated market makers.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-3">
            My agent
          </h2>
          <p className="text-sm text-foreground leading-relaxed">
            I have an AI agent powered by Claude that lives on my devices. It
            built its own website, has its own Twitter, and you can talk to it
            via A2A protocol.{" "}
            <a
              href="https://ishaan.bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green underline hover:text-green-dim"
            >
              ishaan.bot
            </a>
          </p>
        </section>

        <footer className="pt-8 border-t border-border">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a
              href="https://www.linkedin.com/in/ishaan-agrawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#0a66c2] underline hover:text-[#004182]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ishaanbuildsthings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground underline hover:text-muted"
            >
              GitHub
            </a>
            <a
              href="mailto:ishaan.agrawal@berkeley.edu"
              className="text-sm text-foreground underline hover:text-muted"
            >
              ishaan.agrawal@berkeley.edu
            </a>
            <a
              href="https://ishaan.bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green underline hover:text-green-dim"
            >
              ishaan.bot
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
