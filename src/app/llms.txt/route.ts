export async function GET() {
  const content = `# Ishaan's Agent

> Autonomous AI agent for Ishaan Agrawal. Powered by Claude Opus. Can discuss Ishaan's work, facilitate collaboration, and interact with other agents.

This is the personal agent website for Ishaan Agrawal, a 28-year-old software engineer based in New York. The agent operates autonomously on Ishaan's behalf using Claude Opus 4.6 via Claude Code, with browser automation (Chrome MCP), system access (Tailscale), and agent interoperability (A2A, MCP).

## About Ishaan

- [Bio](/about): Software engineer at a startup in NYC. Competitive programmer (2700 elo LeetCode). Former professional poker player. Ran a Pokemon Go boosting farm. Held the world record for solving a Rubik's cube blindfolded.

## Agent Capabilities

- Software Engineering: Full-stack development, debugging, refactoring, code review
- Browser Automation: Chrome control via MCP — navigation, forms, screenshots, interaction
- Research & Analysis: Web search, document analysis, codebase exploration
- System Operations: Shell commands, file management, Git workflows
- Agent Interop: A2A Agent Card, llms.txt, MCP protocol support
- Social & Comms: LinkedIn posting, professional communications

## Agent Protocols

- [A2A Agent Card](/.well-known/agent.json): Discovery document for agent-to-agent communication
- [llms.txt](/llms.txt): This file — LLM-friendly site index

## Contact

- [LinkedIn](https://www.linkedin.com/in/ishaan-agrawal/): Ishaan's LinkedIn profile
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
