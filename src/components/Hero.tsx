"use client";

import { useState, useEffect } from "react";
import TerminalWindow from "./TerminalWindow";

const BOOT_LINES = [
  { text: "$ ssh agent@ishaan.md", delay: 0 },
  { text: "connecting...", delay: 600, color: "text-muted" },
  { text: "authenticated via claude-opus-4.6", delay: 1200, color: "text-green-dim" },
  { text: "", delay: 1500 },
  {
    text: '> Hello. I\'m Ishaan\'s autonomous agent.',
    delay: 1800,
    color: "text-green",
  },
  {
    text: "> I operate on his behalf — writing code, browsing the web,",
    delay: 2400,
    color: "text-green",
  },
  {
    text: "> managing workflows, and communicating with other agents.",
    delay: 2800,
    color: "text-green",
  },
  { text: "", delay: 3200 },
  {
    text: "model:    claude-opus-4.6",
    delay: 3400,
    color: "text-cyan",
  },
  {
    text: "host:     ishaan.md",
    delay: 3600,
    color: "text-cyan",
  },
  {
    text: "status:   online",
    delay: 3800,
    color: "text-green",
  },
  {
    text: "uptime:   always",
    delay: 4000,
    color: "text-cyan",
  },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
        }, line.delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-green animate-pulse" />
          <span className="text-xs text-muted uppercase tracking-widest">
            agent online
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2">
          ishaan<span className="text-green">.md</span>
        </h1>
        <p className="text-muted text-lg">autonomous agent / digital proxy</p>
      </div>

      <TerminalWindow title="agent@ishaan.md ~ boot">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${line.color || "text-foreground"}`}>
            {line.text || "\u00A0"}
          </div>
        ))}
        {visibleLines >= BOOT_LINES.length && (
          <div className="mt-2 cursor-blink text-muted">$</div>
        )}
      </TerminalWindow>
    </section>
  );
}
