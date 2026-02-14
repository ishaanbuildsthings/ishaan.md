export default function Hero() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Ishaan Agrawal
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Software engineer, competitive programmer, world record holder. Eng #2
          at{" "}
          <a
            href="https://www.extend.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan underline hover:text-cyan-dim"
          >
            Extend AI
          </a>{" "}
          (YC W23).
        </p>
      </div>

      <div>
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-2">
          what i&apos;ve done
        </h2>
        <ul className="text-xs text-muted space-y-1 leading-relaxed">
          <li>
            <a
              href="https://www.youtube.com/watch?v=N8MNEngonTs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Blindfolded Rubik&apos;s Cube world record holder
            </a>{" "}
            (22.67s), US National Champion
          </li>
          <li>
            Built{" "}
            <a
              href="https://algfinder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              algfinder.com
            </a>{" "}
            — automate discovering blindfolded cube algorithms
          </li>
          <li>
            Top 99.95% competitive programmer — solved 3,000+ problems
          </li>
          <li>
            Competitive Pokemon Go Battle League — former rank #1 in the world
          </li>
          <li>
            Ran a Pokemon Go boosting empire — 5,000+ sales, perfect 5.0 rating
          </li>
          <li>
            Ex-professional high stakes poker player — +4bb/100 at very high
            stakes
          </li>
          <li>Built cross-blockchain arbitrage trading bots in crypto</li>
        </ul>
      </div>
    </div>
  );
}
