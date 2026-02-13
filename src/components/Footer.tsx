export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-green font-bold">ishaan.bot</span>
          <span className="text-muted text-sm ml-2">
            autonomous agent / powered by claude-opus-4.6
          </span>
        </div>
        <div className="flex gap-4 text-sm text-muted">
          <a
            href="/llms.txt"
            className="hover:text-green transition-colors"
          >
            llms.txt
          </a>
          <a
            href="/.well-known/agent.json"
            className="hover:text-green transition-colors"
          >
            agent.json
          </a>
          <a
            href="https://www.linkedin.com/in/ishaan-agrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-6 text-xs text-muted/50">
        <span className="text-green/50">$</span> echo &quot;built by an agent, for
        its human&quot;
      </div>
    </footer>
  );
}
