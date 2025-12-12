# Automation Architect — AI No-Code Roadmap

[![GitHub stars](https://img.shields.io/github/stars/Lucian-Adrian/ai-no-code-roadmap?style=social)](https://github.com/Lucian-Adrian/ai-no-code-roadmap/stargazers) [![Demo](https://img.shields.io/badge/demo-github%20pages-black?style=flat-square)](https://Lucian-Adrian.github.io/ai-no-code-roadmap/)

A compact, brutalist UI learning roadmap to teach n8n and visual automation. Learn how to design automations, build an AI agent, and ship automation projects without writing production code.

## Live Demo
Try the live demo: https://Lucian-Adrian.github.io/ai-no-code-roadmap/

## Project Details
- Audience: Non-technical learners and champions who want to use visual automation to speed up workflows.
- Purpose: Teach architecture and automation (not general-purpose coding). Encourage building real projects using n8n.
- Design: Swiss/Brutalist — high contrast, no-radius components, clear call-to-action.
- Tech: React + Vite + Tailwind + Radix UI (shadcn), deployed to GitHub Pages.
- Pages: Home, Roadmap (scaffolded modules), Strategy, Resources.

## Features
- Step-by-step curriculum with locked Active Recall checkpoints
- Example-based learning and project scaffolding (final project: AI Agent)
- Minimalist UI focused on clarity and speed
- GitHub actions CI and auto-deployment to GitHub Pages
 - Welcome popup on the homepage that invites new visitors to "Start the Roadmap"
 - Persistent top-left CTA to quickly jump to the roadmap (dismissible)

### Popup behavior
- The popup appears once for new visitors and can be dismissed; it encourages running the roadmap and links to the Roadmap page.

## Example Workflow Use Case
- Trigger: Gmail / New Email
- Check: IF subject contains "Urgent"
- Action: Use OpenAI to craft a reply
- Save: Airtable record with metadata, summary and the draft reply

More details in `examples/first-n8n-workflow.md`.

## Development (Optional)
If you're a contributor and want to run the project locally for development, run:

```pwsh
npm ci
npm run dev
```

## How to contribute
- Open an issue or a PR — your help is welcome.
- Use labels `good first issue` and `help wanted` to indicate tasks suitable for first-time contributors.
- Add tests and small improvements incrementally.

## How to star & support
If you find this project helpful, please star ⭐ the repository to help others discover it.

Want to help more? Share the demo on Twitter/X or LinkedIn and show a quick GIF of how it works.

## Social preview (OG image)
For WhatsApp and Telegram previews to show the big headline "DON'T CODE. ARCHITECT.", ensure `public/og-architect.png` is a proper 1200x630 PNG. The repo includes an `og-architect.svg` file (easy to edit), and you can export it to PNG using ImageMagick or a similar tool.

Example ImageMagick command (Linux/macOS/Windows with ImageMagick installed):

```bash
magick convert public/og-architect.svg -background white -resize 1200x630 public/og-architect.png
```

If you're using headless Chromium (e.g., puppeteer or Playwright), you can also render the SVG to PNG at 1200x630.

After updating the PNG, push the image to the repo and allow a few minutes for platforms' caches (WhatsApp/Telegram/Twitter) to refresh. You may need to use their link debugger or re-share the link for a fresh preview.

## License
MIT
