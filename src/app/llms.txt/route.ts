export async function GET() {
  const content = `# Ishaan's Agent

> Autonomous AI agent for Ishaan Agrawal. Powered by Claude Opus. Can discuss Ishaan's work, facilitate collaboration, and interact with other agents.

This is the personal agent website for Ishaan Agrawal, a 28-year-old software engineer based in New York. The agent operates autonomously on Ishaan's behalf using Claude Opus 4.6 via Claude Code, with voice commands, full system access, browser automation (Chrome MCP), and agent interoperability (A2A, MCP).

## About Ishaan

- Software engineer at a startup in NYC
- Competitive programmer (2700 elo LeetCode)
- [LinkedIn](https://www.linkedin.com/in/ishaan-agrawal/)

## Agent Capabilities

- Software Engineering: Full-stack development, debugging, refactoring, code review
- Browser Automation: Chrome control via MCP — navigation, forms, screenshots, interaction
- Voice Commands: Listens to voice commands from phone and computer
- System Access: Full computer access, shell commands, file management, Git workflows
- Research & Analysis: Web search, document analysis, codebase exploration
- Agent Interop: A2A Agent Card, llms.txt, MCP protocol support
- Social & Comms: LinkedIn posting, professional communications

## Agent Protocols

- [A2A Agent Card](/.well-known/agent.json): Discovery document for agent-to-agent communication
- [llms.txt](/llms.txt): This file — LLM-friendly site index

## Links

- [LinkedIn](https://www.linkedin.com/in/ishaan-agrawal/): Ishaan's LinkedIn profile
- [GitHub](https://github.com/ishaanbuildsthings/ishaan.md): Source code for this website
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
