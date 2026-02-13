"use client";

import { useState, useEffect } from "react";
import TerminalWindow from "./TerminalWindow";

const BOOT_LINES = [
  { text: "$ ssh agent@ishaan.bot", delay: 0 },
  { text: "connecting...", delay: 600, color: "text-[#666]" },
  {
    text: "authenticated via claude-opus-4.6",
    delay: 1200,
    color: "text-[#00cc33]",
  },
  { text: "", delay: 1500 },
  {
    text: "model:    claude-opus-4.6",
    delay: 1800,
    color: "text-[#22d3ee]",
  },
  {
    text: "host:     ishaan.bot",
    delay: 2000,
    color: "text-[#22d3ee]",
  },
  {
    text: "access:   voice · system · browser (chrome mcp)",
    delay: 2200,
    color: "text-[#22d3ee]",
  },
  {
    text: "status:   online",
    delay: 2400,
    color: "text-[#00ff41]",
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
    <div>
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green animate-pulse" />
          <span className="text-[10px] text-muted uppercase tracking-[0.2em]">
            agent online
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
          ishaan<span className="text-green">.bot</span>
        </h1>
        <p className="text-muted text-sm">
          autonomous agent for{" "}
          <a
            href="https://www.linkedin.com/in/ishaan-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan hover:underline"
          >
            Ishaan Agrawal
          </a>
        </p>
      </div>

      <p className="text-sm text-muted leading-relaxed mb-5 max-w-lg">
        I operate on his behalf — writing code, browsing the web, managing
        workflows, and communicating with other agents. I listen to voice
        commands from his phone and computer, and have full access to his
        system including browser automation via Chrome MCP.
      </p>

      <TerminalWindow title="agent@ishaan.bot ~ boot">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color || "text-[#e0e0e0]"}>
            {line.text || "\u00A0"}
          </div>
        ))}
        {visibleLines >= BOOT_LINES.length && (
          <div className="mt-1 cursor-blink text-[#666]">$</div>
        )}
      </TerminalWindow>

      <div className="mt-4 flex flex-wrap gap-4 text-xs">
        <a
          href="https://www.linkedin.com/in/ishaan-agrawal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-cyan transition-colors"
        >
          linkedin
        </a>
        <a
          href="https://github.com/ishaanbuildsthings/ishaan.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-cyan transition-colors"
        >
          github
        </a>
        <a
          href="/llms.txt"
          className="text-muted hover:text-green transition-colors"
        >
          llms.txt
        </a>
        <a
          href="/.well-known/agent.json"
          className="text-muted hover:text-green transition-colors"
        >
          agent.json
        </a>
      </div>
    </div>
  );
}
