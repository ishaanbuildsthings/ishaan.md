import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
        Ishaan Agrawal
      </h1>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
        <a
          href="https://www.linkedin.com/in/ishaan-agrawal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground underline hover:text-muted"
        >
          LinkedIn (20k+)
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
          href="https://ishaan.bot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green underline hover:text-green-dim"
        >
          <span className="dancing-robot">🤖</span> ishaan.bot
        </a>
      </div>

      <Image
        src="/ishaan.jpg"
        alt="Ishaan Agrawal"
        width={1220}
        height={740}
        className="rounded-lg mb-2 w-full"
        unoptimized
        priority
      />
      <p className="text-[11px] text-muted leading-relaxed">
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
  );
}
