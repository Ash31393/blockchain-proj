# Blockchain Project Overview

**Repository:** Ash31393/blockchain-proj  
**Branch:** feat/homepage-layout  
**Last Updated:** December 7, 2025

---

## Project Vision

A comprehensive Web3 decentralized application (DApp) built with modern web technologies. Features wallet integration, NFT minting, peer-to-peer marketplace, blockchain faucet, and airdrop system.

---

## Tech Stack

### Core Framework

- **Next.js 16+** ✅ - React framework with App Router
- **TypeScript** ✅ - Type-safe development
- **Tailwind CSS v4** ✅ - Utility-first CSS with @tailwindcss/postcss
- **React** ✅ - UI library

### Development Tools

- **ESLint** ✅ - Code linting
- **Prettier** ✅ - Code formatting
- **EditorConfig** ✅ - Editor consistency
- **Husky** ✅ - Git hooks automation
- **Commitlint** ✅ - Enforce commit format
- **lint-staged** ✅ - Run linters on staged files

### Testing & Quality

- **Jest** ✅ - Unit testing framework
- **React Testing Library** ✅ - Component testing
- **Vitest** ✅ - Fast unit test runner
- **SonarCloud** ✅ - Code quality analysis
- **Storybook v10.1.4** ✅ - Component documentation

### Component Development

- **Storybook NextJS + Vite** ✅ - Component isolation
- **@storybook/addon-vitest** ✅ - Test integration
- **@storybook/addon-a11y** ✅ - Accessibility testing
- **@storybook/addon-docs** ✅ - Auto-generated docs
- **@chromatic-com/storybook** ✅ - Visual testing

### Error Monitoring

- **Sentry** ⚠️ - Error tracking (packages installed, config pending)

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── NavBar.tsx               ✅ Navigation component
│   │   └── Header.tsx               (Needs story)
│   ├── (wallet)/
│   │   └── page.tsx                 Wallet feature page
│   ├── (nft)/
│   │   └── page.tsx                 NFT minting page
│   ├── (marketplace)/
│   │   └── page.tsx                 Marketplace page
│   ├── (faucet)/
│   │   └── page.tsx                 Faucet page
│   ├── (airdrop)/
│   │   └── page.tsx                 Airdrop page
│   ├── layout.tsx                   Root layout
│   └── page.tsx                     Home page
└── stories/
    └── NavBar.stories.tsx           ✅ Component documentation

.storybook/
├── main.ts                          Framework config
├── preview.ts                       Global settings
└── vitest.setup.ts                  Test setup

Configuration Files:
├── next.config.ts
├── tsconfig.json
├── tailwind.config.js
├── jest.config.js
├── vitest.config.ts
├── eslint.config.mjs
├── .prettierrc
└── commitlint.config.js
```

---

## Current Progress

### ✅ Completed

**Foundation & Setup**

- ✅ Next.js 16+ with TypeScript App Router configured
- ✅ Tailwind CSS v4 with @tailwindcss/postcss setup
- ✅ ESLint with TypeScript support
- ✅ Prettier formatting configuration
- ✅ EditorConfig for consistency
- ✅ Husky pre-commit hooks
- ✅ Commitlint for conventional commits
- ✅ lint-staged for staged file linting
- ✅ SonarCloud integration

**Testing Infrastructure**

- ✅ Jest configured with React Testing Library
- ✅ Vitest configured for fast unit testing
- ✅ Test setup files and utilities ready
- ✅ Coverage reporting enabled

**Component Development**

- ✅ Storybook v10.1.4 fully configured
- ✅ Storybook with NextJS + Vite builder
- ✅ Storybook addons: vitest, a11y, docs, chromatic
- ✅ NavBar component created and documented in Storybook
- ✅ Story files working with `.tsx` extension
- ✅ Storybook running on http://localhost:6007

**Version Control**

- ✅ Git workflow established
- ✅ Conventional commits implemented
- ✅ Feature branch feat/homepage-layout created
- ✅ Pre-commit linting and formatting automated
- ✅ All changes committed and pushed to GitHub

### ⚠️ In Progress

**Component Documentation**

- ⚠️ More component stories needed (Header, feature pages)
- ⚠️ Adding prop controls to stories
- ⚠️ Component documentation in Storybook

**Error Monitoring**

- ⚠️ Sentry packages installed
- ⚠️ Configuration setup pending
- ⚠️ Error tracking implementation

### 📋 Planned

**Blockchain Features**

- [ ] Wallet connection (MetaMask integration)
- [ ] Smart contract templates
- [ ] NFT minting functionality
- [ ] Marketplace features
- [ ] Faucet system
- [ ] Airdrop mechanism

**Performance & Monitoring**

- [ ] Lighthouse CI for performance budgets
- [ ] Performance metrics dashboard
- [ ] User analytics integration

**Accessibility**

- [ ] eslint-plugin-jsx-a11y for a11y linting
- [ ] Accessibility audit and fixes
- [ ] WCAG 2.1 AA compliance

**Documentation**

- [ ] API documentation
- [ ] Smart contract documentation
- [ ] Architecture decision records (ADR)
- [ ] Contributing guidelines

---

## Key Features

### Navigation

- Responsive navigation bar with links to all features
- Routes: Home, Wallet, NFT Minting, Marketplace, Faucet, Airdrop
- Implemented with Next.js Link component

### Feature Pages (Placeholders)

- **/wallet** - Wallet integration and management
- **/nft** - NFT minting interface
- **/marketplace** - P2P marketplace
- **/faucet** - Blockchain faucet
- **/airdrop** - Token airdrop system

### Developer Experience

- Component isolation with Storybook
- Interactive component playground
- Accessibility testing built-in
- Visual regression testing ready
- Hot module reloading in development

---

## Running the Project

### Development

```bash
npm run dev              # Start Next.js dev server (http://localhost:3000)
npm run storybook       # Start Storybook (http://localhost:6006 or 6007)
```

### Testing

```bash
npm run test            # Run Jest tests
npm run test:watch     # Jest watch mode
npm test -- --coverage # With coverage
npm run test:vitest    # Run Vitest
```

### Code Quality

```bash
npm run lint           # Check with ESLint
npm run lint:fix       # Auto-fix issues
npm run format         # Format with Prettier
npm run format:check   # Check formatting
```

### Build & Deploy

```bash
npm run build          # Production build
npm start              # Run production server
```

---

## Git Workflow

**Current Branch:** `feat/homepage-layout`

### Commit Format (Conventional Commits)

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: dependency updates
```

### Pre-commit Automation

- ESLint --fix runs on staged files
- Prettier --write runs on staged files
- Commitlint validates commit messages

### Recent Commits

- ✅ "feat: add storybook, testing setup, and placeholder pages" (19 files, 11994 insertions)

---

## Storybook Stories

### Current Stories

- **Components/NavBar** - Navigation bar component with default state

### Story Examples

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '../app/components/NavBar';

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavBar />,
};
```

### Story Guidelines

- File extension: `.tsx` (not `.ts` - must support JSX)
- Location: `src/stories/ComponentName.stories.tsx`
- Title format: `Components/ComponentName`
- One component per story file (usually)

---

## Dependencies Highlights

### Production

- next@16.0
- react@19.0
- tailwindcss@4.x
- typescript@5.x

### Development

- @storybook/nextjs-vite@10.1.4
- jest@29.x
- vitest@3.x
- eslint@9.x
- prettier@3.x
- husky@9.x
- commitlint@19.x

---

## Configuration Reference

### TypeScript (tsconfig.json)

- Module: ESNext
- Target: ES2020
- Strict mode enabled
- Path aliases configured

### Next.js (next.config.ts)

- App Router enabled
- Image optimization
- Environment variables

### Tailwind (tailwind.config.js)

- v4 configuration
- PostCSS integration
- Custom theme extensions

### ESLint (eslint.config.mjs)

- TypeScript support
- React rules enabled
- Next.js rules included
- Prettier integration

---

## Notes for Copilot

When continuing development:

1. **Always check git status first** - Know what's staged/unstaged
2. **Run lint:fix before committing** - Auto-fixes most issues
3. **Create stories for new components** - Maintain documentation
4. **Follow conventional commits** - Keeps history clean
5. **Test before pushing** - Catch errors early
6. **Keep this file updated** - Maintain accurate project status

---

## Useful Links

- **GitHub Repo:** https://github.com/Ash31393/blockchain-proj
- **Next.js Docs:** https://nextjs.org/docs
- **Storybook Docs:** https://storybook.js.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Last Updated:** December 7, 2025 | **Status:** Foundation Complete, Blockchain Features Pending
