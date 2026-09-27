# React Flow Builder — Visual Workflow Editor

React Flow Builder is a client-side visual workflow editor built on [React Flow](https://reactflow.dev/). Drag node types from the library onto a canvas, connect them with edges, configure each node in a side panel, and save your workflows locally. It models a data pipeline: data enters through **Input** nodes, passes through **Process** and **Conditional** branches or custom **Code** nodes, and exits via **Output** nodes.

## What it does

- Visual canvas for designing node-and-edge workflows (drag, connect, pan, zoom).
- Five node types:
  - **Input** — data source: manual entry, API, database, or file, with sample JSON data.
  - **Output** — sink: console, API, database, or file; formats JSON, CSV, XML, or text.
  - **Process** — transform, filter, aggregate, or sort, with per-type config.
  - **Conditional** — branch on a condition with true/false output handles and custom labels.
  - **Code** — run custom JavaScript/TypeScript through the built-in code editor.
- **Node config panel** — click any node to edit its label, description and type-specific settings.
- **Save / load** — persist the workflow JSON to `localStorage` and restore it later.
- **Run** button to execute/simulate the workflow.
- Custom edge rendering, plus MiniMap, Controls, and Background from React Flow.

## Features

- Drag-and-drop node library
- Custom node components per type with per-type config forms
- Custom edge type
- Code editor for code nodes
- Toast notifications (save/load feedback)
- Save to / load from browser localStorage
- Fully client-side — no backend, no accounts, no API keys

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [React Flow](https://reactflow.dev/) (canvas, edges, minimap, controls)
- [Tailwind CSS](https://tailwindcss.com/) + shadcn/ui primitives (Radix UI)
- TypeScript

## Quick start

```bash
# install dependencies
pnpm install

# dev server
pnpm dev
# open http://localhost:3000

# static production build (outputs to ./out)
pnpm build
```

## Project structure

```
react-flow-builder/
├── app/
│   ├── page.tsx            # renders the WorkflowBuilder client component
│   ├── layout.tsx          # root layout + theme provider
│   └── globals.css         # global styles + reactflow overrides
├── components/
│   ├── workflow-builder.tsx   # React Flow canvas, save/load/run handlers
│   ├── node-library.tsx       # draggable node palette
│   ├── node-config-panel.tsx  # per-node settings form
│   ├── custom-edge.tsx        # custom edge rendering
│   ├── code-editor.tsx        # code editor for code nodes
│   ├── nodes/
│   │   ├── input-node.tsx
│   │   ├── output-node.tsx
│   │   ├── process-node.tsx
│   │   ├── conditional-node.tsx
│   │   └── code-node.tsx
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── types.ts            # NodeData, WorkflowNode, Workflow interfaces
│   ├── workflow-utils.ts   # node id generation + node factories
│   └── utils.ts
├── public/                 # static assets
└── next.config.mjs         # output: 'export' for static hosting
```

## Environment variables

None.

## Deployment

Static export (`output: 'export'` in `next.config.mjs`) — host anywhere static:

1. `pnpm build` → `out/` directory
2. Deploy `out/` to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

`basePath: '/react-flow-builder'` is set for the GitHub Pages subpath deployment. Remove it and rebuild if deploying to a root domain.

## License

MIT.

---

Built by Girish Lade — https://ladestack.in
