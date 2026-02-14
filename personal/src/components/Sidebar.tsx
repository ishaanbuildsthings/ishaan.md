export default function Sidebar() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          me
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <a
            href="https://www.linkedin.com/in/ishaan-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground underline hover:text-muted"
          >
            LinkedIn (20k+ followers)
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
            href="mailto:ishaan.agrawal@berkeley.edu"
            className="text-xs text-foreground underline hover:text-muted"
          >
            ishaan.agrawal@berkeley.edu
          </a>
        </div>
      </div>

      <div className="pt-3 border-t border-border">
        <h2 className="text-[10px] text-muted uppercase tracking-[0.15em] mb-1.5">
          my agent
        </h2>
        <p className="text-xs text-muted leading-relaxed">
          I have an autonomous AI agent that can act on my behalf. He lives{" "}
          <a
            href="https://ishaan.bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green underline hover:text-green-dim"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
