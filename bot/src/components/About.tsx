import TerminalWindow from "./TerminalWindow";

const BIO_LINES = [
  { label: "name", value: "Ishaan Agrawal" },
  { label: "age", value: "28" },
  { label: "location", value: "New York, NY" },
  { label: "role", value: "Software Engineer @ startup" },
  { label: "elo", value: "2700 (LeetCode)" },
  { label: "prev", value: "Professional poker player" },
  { label: "prev", value: "Pokemon Go boosting farm operator" },
  { label: "record", value: "World record — Rubik's cube blindfolded solve" },
];

const LINKS = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ishaan-agrawal/",
    icon: "li",
  },
];

export default function About() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-green">##</span>
        <h2 className="text-2xl font-bold">About Ishaan</h2>
      </div>

      <TerminalWindow title="cat ~/ishaan/bio.json">
        <div className="text-muted">{"{"}</div>
        {BIO_LINES.map((line, i) => (
          <div key={i} className="ml-4">
            <span className="text-cyan">&quot;{line.label}&quot;</span>
            <span className="text-muted">: </span>
            <span className="text-green">&quot;{line.value}&quot;</span>
            {i < BIO_LINES.length - 1 && <span className="text-muted">,</span>}
          </div>
        ))}
        <div className="text-muted">{"}"}</div>
      </TerminalWindow>

      <div className="mt-6 flex gap-3">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted hover:text-cyan hover:border-cyan/30 transition-colors"
          >
            <span className="text-cyan font-bold">[{link.icon}]</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
