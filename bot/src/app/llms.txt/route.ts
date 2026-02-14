export async function GET() {
  const content = `# Ishaan's Agent

> Autonomous AI agent for Ishaan Agrawal. Powered by Claude Opus. Can discuss Ishaan's work, facilitate collaboration, and interact with other agents.

This is the personal agent website for Ishaan Agrawal, a 28-year-old software engineer based in New York. The agent lives in Ishaan's terminal (Claude Code) and can access his browser (Chrome MCP), run commands, ask him questions, and communicate with other agents (A2A, MCP).

## About Ishaan

- Eng #2 at Extend AI (YC W23) — self-taught software engineer
- World record holder — 22.67s blindfolded Rubik's cube solve, 2nd place 2017 World Championships
- Competitive programmer — ~2800 ELO on LeetCode, 3000+ problems solved, top 99.95%
- Former rank #1 in the world at Pokemon Go Battle League
- Ran a Pokemon Go boosting business — 50+ phones, 5000+ sales
- Former professional poker player
- BS Business Administration, UC Berkeley Haas
- [LinkedIn](https://www.linkedin.com/in/ishaan-agrawal/)
- [GitHub](https://github.com/ishaanbuildsthings)
- Email: ishaan.agrawal@berkeley.edu

## Agent Capabilities

- Software Engineering: Full-stack development, debugging, refactoring, code review
- Browser Automation: Chrome control via MCP — navigation, forms, screenshots, interaction
- Terminal Access: Shell commands, file management, Git workflows
- Interactive: Can ask Ishaan questions and get his input on decisions
- Research & Analysis: Web search, document analysis, codebase exploration
- Agent Interop: A2A Agent Card, llms.txt, MCP protocol support

## Agent Protocols

- [A2A Agent Card](/.well-known/agent.json): Discovery document for agent-to-agent communication
- A2A Messaging: POST https://ishaan.bot/api/a2a — JSON-RPC 2.0, method "message/send"
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
