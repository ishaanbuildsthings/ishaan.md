export default function Sidebar() {
  return (
    <div className="space-y-2 sm:text-right">
      <div className="flex flex-wrap gap-x-3 gap-y-1">
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
          href="mailto:ishaan.agrawal@berkeley.edu"
          className="text-xs text-foreground underline hover:text-muted"
        >
          ishaan.agrawal@berkeley.edu
        </a>
      </div>
      <p className="text-xs text-muted leading-relaxed">
        <span className="dancing-robot">🤖</span>{" "}
        My autonomous AI agent lives{" "}
        <a
          href="https://ishaan.bot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green underline hover:text-green-dim"
        >
          here
        </a>
      </p>
    </div>
  );
}
