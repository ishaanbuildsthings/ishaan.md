import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="mb-6">
        <Image
          src="/ishaan.jpg"
          alt="Ishaan Agrawal"
          width={1220}
          height={740}
          className="rounded-lg mb-2 w-full max-w-md"
          unoptimized
          priority
        />
        <p className="text-[11px] text-muted leading-relaxed max-w-sm">
          Currently working on a challenge to complete all 4,000 LeetCode
          problems!{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7427783853785927680/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:underline"
          >
            Latest progress update
          </a>
        </p>
      </div>

      <div className="space-y-3">
        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Guinness World Record at solving a Rubik&apos;s Cube blindfolded
            (22.67s) —{" "}
            <a
              href="https://www.youtube.com/watch?v=N8MNEngonTs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              video
            </a>
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            ~2787 Elo competitive programmer —{" "}
            <a
              href="https://leetcode.com/u/leetgoat_dot_io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              LeetCode
            </a>{" "}
            &middot;{" "}
            <a
              href="https://github.com/ishaanbuildsthings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              data structure templates
            </a>{" "}
            &middot;{" "}
            <a
              href="https://leetgoat.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              training site
            </a>{" "}
            (240 GitHub stars)
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Creator of{" "}
            <a
              href="https://ocrarena.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              ocrarena.ai
            </a>{" "}
            — a public leaderboard for anonymous OCR models and VLMs to compete
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Former professional poker player — +4bb/100 win rate at very high
            stakes, trained under the #2 player in the world
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Former rank #1 in the world at competitive Pokemon Go Battle League
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Ran a Pokemon Go boosting farm — owned 50+ cell phones, sold to
            doctors, lawyers, and celebrities, perfect 5.0 rating over 5,000+
            sales, $500k profit
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-xs text-foreground leading-relaxed">
            Love algo trading in DeFi — built cross-blockchain arbitrage trading
            bots, implemented the{" "}
            <a
              href="https://github.com/Uniswap/v4-core/blob/main/docs/whitepaper-v4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Uniswap v4 white paper
            </a>{" "}
            at one of the world&apos;s largest decentralized exchanges
          </p>
        </div>
      </div>
    </div>
  );
}
