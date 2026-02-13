"use client";

import { useState } from "react";

interface AgentAction {
  id: string;
  timestamp: string;
  action: string;
  detail: string;
  status: "completed" | "in_progress" | "queued";
  category: "code" | "browser" | "research" | "comms" | "system";
}

const ACTIONS: AgentAction[] = [
  {
    id: "007",
    timestamp: "2026-02-13T22:00:00Z",
    action: "Built ishaan.bot website",
    detail:
      "Scaffolded Next.js + TypeScript project with terminal UI theme. Implemented A2A Agent Card, llms.txt, and all site sections.",
    status: "in_progress",
    category: "code",
  },
  {
    id: "006",
    timestamp: "2026-02-13T21:30:00Z",
    action: "Researched agent protocols",
    detail:
      "Analyzed A2A, MCP, llms.txt, agents.json, and Agent Protocol standards for agent-to-agent interoperability.",
    status: "completed",
    category: "research",
  },
  {
    id: "005",
    timestamp: "2026-02-13T21:00:00Z",
    action: "Audited browser capabilities",
    detail:
      "Verified Chrome MCP integration: browser automation, screenshots, form filling, navigation, and GIF recording all operational.",
    status: "completed",
    category: "browser",
  },
];

const STATUS_COLORS = {
  completed: "text-green",
  in_progress: "text-cyan",
  queued: "text-muted",
};

const STATUS_LABELS = {
  completed: "done",
  in_progress: "running",
  queued: "queued",
};

const CATEGORY_ICONS: Record<string, string> = {
  code: "{}",
  browser: ">>",
  research: "??",
  comms: "<<",
  system: "$>",
};

export default function RecentActions() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-green">##</span>
        <h2 className="text-2xl font-bold">Recent Actions</h2>
      </div>

      <div className="border border-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-2.5 bg-surface-light border-b border-border text-xs text-muted uppercase tracking-wider">
          <span>Type</span>
          <span>Action</span>
          <span>Status</span>
        </div>

        {ACTIONS.map((action) => (
          <div key={action.id} className="border-b border-border last:border-0">
            <button
              onClick={() =>
                setExpanded(expanded === action.id ? null : action.id)
              }
              className="w-full grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 text-left hover:bg-surface-light/50 transition-colors cursor-pointer"
            >
              <span className="text-cyan font-bold text-sm">
                {CATEGORY_ICONS[action.category]}
              </span>
              <div>
                <span className="text-foreground text-sm">{action.action}</span>
                <span className="text-muted text-xs ml-2">
                  {new Date(action.timestamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span
                className={`text-xs font-mono ${STATUS_COLORS[action.status]}`}
              >
                [{STATUS_LABELS[action.status]}]
              </span>
            </button>

            {expanded === action.id && (
              <div className="px-4 pb-3 ml-10">
                <p className="text-muted text-sm">{action.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-muted text-xs mt-4">
        * Action log will be updated in real-time as the agent operates. API
        endpoint coming soon.
      </p>
    </section>
  );
}
