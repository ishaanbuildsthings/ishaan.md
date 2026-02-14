"use client";

import { useState } from "react";

export default function MathPuzzle() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <button
        onClick={() => setOpen(!open)}
        className="text-xs px-4 py-1.5 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground transition-colors cursor-pointer"
      >
        {open ? "hide puzzle" : "math puzzle"}
      </button>
      {open && (
        <div className="mt-4 max-w-lg mx-auto text-left border border-border rounded-lg p-4 bg-surface">
          <p className="text-[13px] text-foreground leading-relaxed">
            You are given an infinite integer number line. A ship spawns at an
            unknown integer position with an unknown integer velocity. Every
            second you can fire a cannon at one position on the number line.
            Design a strategy such that we always hit the ship, or prove it is
            impossible.
          </p>
          <p className="text-[13px] text-muted mt-3">
            email solutions to:{" "}
            <a
              href="mailto:me@ishaan.ag"
              className="text-cyan hover:underline"
            >
              me@ishaan.ag
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
