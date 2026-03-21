import Image from "next/image";

export default function Sidebar() {

  return (
    <div className="flex flex-col">
      <div className="hidden lg:block mb-8">
        <p className="text-[13px] text-foreground leading-relaxed">
          <strong>IMPORTANT MESSAGE!</strong> In 2025 I was diagnosed with an autoimmune disease (Crohn&apos;s) which almost killed me. Completely changed my perspective on life. Things I value more now: health, spending time with family, and living slowly.
        </p>
        <p className="text-[13px] text-foreground leading-relaxed">
          <span className="font-bold text-muted">In progress:</span> Running ~30 miles / week (to reduce inflammation), sleeping better, and appreciating small things:)
        </p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Achievements */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">
          Achievements
        </h2>

        <div className="border-l-2 border-border pl-3">
          <p className="text-[13px] text-foreground leading-relaxed">
            <strong>Guinness World Record</strong> for solving a Rubik&apos;s
            Cube blindfolded (22.67s) —{" "}
            <a
              href="https://www.youtube.com/watch?v=N8MNEngonTs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              video
            </a>{" "}
          </p>
          <div className="mt-2">
            <Image
              src="/cert.jpg"
              alt="Guinness World Record Certificate"
              width={300}
              height={200}
              className="rounded-md max-w-[200px]"
              unoptimized
            />
          </div>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-[13px] text-foreground leading-relaxed">
            <strong>Top 99.95%</strong> ranked competitive coder, &gt;4000 problems solved
          </p>
          <div className="text-[12px] text-muted mt-1 space-y-0.5">
            <div>
              <a
                href="https://leetcode.com/u/leetgoat_dot_io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                LeetCode
              </a>{" "}
              — 2778 elo
            </div>
            <div>
              <a
                href="https://codeforces.com/profile/leetgoat_dot_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                Codeforces
              </a>{" "}
              — 1649 elo
            </div>
            <div>
              <a
                href="https://github.com/ishaanbuildsthings/leetcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan hover:underline"
              >
                4000+ solutions
              </a>{" "}
              (250+ stars)
            </div>
          </div>
        </div>

        <div className="border-l-2 border-border pl-3">
          <p className="text-[13px] text-foreground leading-relaxed">
            <strong>Former rank #1</strong> in the world at competitive Pokemon
            Go Battle League
          </p>
        </div>

        <p className="text-[11px] italic text-muted">yes i am very competitive</p>
      </div>

      {/* Work */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">
          Work
        </h2>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <p className="text-[13px] font-bold text-foreground">Software Engineer</p>
            <p className="text-[11px] text-muted">2024 — present</p>
          </div>
          <p className="text-[13px] text-foreground leading-relaxed">
            Eng #2 at{" "}
            <a
              href="https://www.extend.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:underline"
            >
              Extend AI
            </a>{" "}
            (YC W23). Self-taught engineer;)
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <p className="text-[13px] font-bold text-foreground">Blockchain Engineer</p>
            <p className="text-[11px] text-muted">2023 — 2024</p>
          </div>
          <p className="text-[13px] text-foreground leading-relaxed">
            Cross-blockchain arbitrage, trading bots, and automated market
            making — my code has processed <strong>~$9B of volume</strong>
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline">
            <p className="text-[13px] text-foreground leading-relaxed">
              taught myself how to code from youtube
            </p>
            <p className="text-[11px] text-muted shrink-0">2022 — 2023</p>
          </div>
        </div>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <p className="text-[13px] font-bold text-foreground">Pokemon Go Boosting Empire</p>
            <p className="text-[11px] text-muted">2021 — 2022</p>
          </div>
          <p className="text-[13px] text-foreground leading-relaxed">
            Owned 50+ cell phones, sold to doctors, lawyers, and even a{" "}
            <strong>top-10 worldwide music artist</strong>. Perfect 5.0 rating,
            5,000+ sales
          </p>
          <div className="mt-2">
            <Image
              src="/50phones.jpeg"
              alt="50+ cell phones for Pokemon Go boosting"
              width={600}
              height={400}
              className="rounded-md max-w-[250px]"
              unoptimized
            />
          </div>
        </div>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <p className="text-[13px] font-bold text-foreground">Professional Poker</p>
            <p className="text-[11px] text-muted">2019 — 2021</p>
          </div>
          <p className="text-[13px] text-foreground leading-relaxed">
            Trained under the <strong>#2 player in the world</strong>. Made a lot of money and met some interesting people.
          </p>
        </div>

        <div className="border-l-2 border-border pl-3">
          <div className="flex justify-between items-baseline mb-0.5">
            <p className="text-[13px] font-bold text-foreground">UC Berkeley, Haas</p>
            <p className="text-[11px] text-muted">2015 — 2019</p>
          </div>
          <p className="text-[11px] italic text-muted">
            i did not like business school
          </p>
        </div>
      </div>

    </div>
      <div className="lg:hidden mt-8">
        <p className="text-[13px] text-foreground leading-relaxed">
          <strong>IMPORTANT MESSAGE!</strong> In 2025 I was diagnosed with an autoimmune disease (Crohn&apos;s) which almost killed me. Completely changed my perspective on life. Things I value more now: health, spending time with family, and living slowly.
        </p>
        <p className="text-[13px] text-foreground leading-relaxed">
          <span className="font-bold text-muted">In progress:</span> Running ~30 miles / week (to reduce inflammation), sleeping better, and appreciating small things:)
        </p>
      </div>
    </div>
  );
}
