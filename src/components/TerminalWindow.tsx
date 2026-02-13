interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title = "terminal",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-[#222] bg-[#0a0a0a] overflow-hidden shadow-lg ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#111] border-b border-[#222]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-[#666] ml-2 font-mono">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
