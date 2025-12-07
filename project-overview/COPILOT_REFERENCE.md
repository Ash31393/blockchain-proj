# Copilot Reference Guide - Blockchain Project

**Last Updated:** December 7, 2025  
**Repository:** Ash31393/blockchain-proj  
**Current Branch:** feat/homepage-layout

---

## Quick Reference for Copilot

This document serves as your persistent reference when chat history is deleted. It contains essential context about the project structure, current state, and how to continue development.

### Project Status

✅ **Foundation Complete**

- Next.js 16+ with TypeScript App Router
- Tailwind CSS v4 with @tailwindcss/postcss
- Professional dev tooling (ESLint, Prettier, Husky, Commitlint)
- Storybook v10.1.4 running and fully configured
- Jest + React Testing Library + Vitest
- SonarCloud integration
- NavBar component story created and rendering

⚠️ **In Progress**

- More component stories (Header, feature pages)
- Sentry error monitoring (packages installed, config pending)
- Blockchain feature implementation

---

## Key Folders & Files

### Source Code

```
src/
├── app/
│   ├── components/
│   │   ├── NavBar.tsx           ✅ Complete, in Storybook
│   │   └── Header.tsx
│   ├── (wallet)/page.tsx         Feature page placeholder
│   ├── (nft)/page.tsx            Feature page placeholder
│   ├── (marketplace)/page.tsx    Feature page placeholder
│   ├── (faucet)/page.tsx         Feature page placeholder
│   ├── (airdrop)/page.tsx        Feature page placeholder
│   ├── layout.tsx                Root layout with NavBar
│   └── page.tsx                  Home page
└── stories/
    └── NavBar.stories.tsx        ✅ First component story
```

### Configuration

```
.storybook/
├── main.ts                       Framework & addons config
├── preview.ts                    Global parameters & NextJS setup
└── vitest.setup.ts               Test configuration

Project config files:
- tsconfig.json                  TypeScript settings
- next.config.ts                 Next.js settings
- tailwind.config.js             Tailwind CSS settings
- postcss.config.js              PostCSS settings
- jest.config.js                 Jest test runner
- vitest.config.ts               Vitest test runner
- eslint.config.mjs              ESLint rules
- .prettierrc                     Prettier formatting
- commitlint.config.js            Conventional commits
```

### Documentation (in project-overview/)

```
project-overview/
├── README.md                     Navigation guide for docs
├── PROJECT_OVERVIEW.md           Main project documentation
├── STORYBOOK_GUIDE.md            How to use Storybook
└── COPILOT_REFERENCE.md          This file - persistent reference
```

---

## Running the Project

### Development Server

```bash
npm run dev
```

- Runs on http://localhost:3000
- Next.js auto-reload enabled

### Storybook

```bash
npm run storybook
```

- Runs on http://localhost:6006 (or 6007 if in use)
- View components in isolation
- Interactive controls, accessibility checks

### Testing

```bash
npm run test              # Run Jest tests
npm run test:watch       # Jest watch mode
npm test -- --coverage   # With coverage report
npm run test:vitest      # Run Vitest tests
```

### Linting & Formatting

```bash
npm run lint             # Check with ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format with Prettier
npm run format:check     # Check formatting
```

### Build

```bash
npm run build            # Build for production
npm start                # Run production build
```

---

## Tech Stack Summary

| Category              | Technology                   | Version         | Status |
| --------------------- | ---------------------------- | --------------- | ------ |
| **Framework**         | Next.js                      | 16+             | ✅     |
| **Language**          | TypeScript                   | Latest          | ✅     |
| **Styling**           | Tailwind CSS                 | v4              | ✅     |
| **Components**        | React                        | Latest          | ✅     |
| **Routing**           | App Router                   | Built-in        | ✅     |
| **Component Library** | Storybook                    | 10.1.4          | ✅     |
| **Testing**           | Jest + React Testing Library | Latest          | ✅     |
| **Unit Testing**      | Vitest                       | Latest          | ✅     |
| **Linting**           | ESLint                       | Latest          | ✅     |
| **Formatting**        | Prettier                     | Latest          | ✅     |
| **Git Hooks**         | Husky                        | Latest          | ✅     |
| **Commit Linting**    | Commitlint                   | Latest          | ✅     |
| **Analytics**         | SonarCloud                   | Latest          | ✅     |
| **Error Monitoring**  | Sentry                       | (pending setup) | ⚠️     |

---

## Important Git Commands

```bash
# Current branch: feat/homepage-layout
git status                           # Check status
git add .                            # Stage changes
git commit -m "feat: description"    # Commit with conventional format
git push -u origin feat/homepage-layout  # Push to remote

# Branches
git branch -a                        # List all branches
git checkout -b feature-name         # Create new feature branch
git switch main                      # Switch to main

# Pre-commit hooks automatically:
# - Run ESLint --fix on changed files
# - Run Prettier --write on changed files
# - Validate commit message format
```

---

## Creating Component Stories (Most Common Task)

### Template

```tsx
// src/stories/ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from '../app/components/ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'fullscreen', // or 'centered', 'padded'
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ComponentName />,
};

export const Variant: Story = {
  render: () => <ComponentName prop={value} />,
};
```

### Key Rules

- File must be `.tsx` (not `.ts`) if it contains JSX
- Title format: `Components/ComponentName`
- Import from `../app/components/`
- One component per story file (usually)

---

## Common Development Workflows

### Add a New Page

1. Create folder: `src/app/(feature-name)/`
2. Create `page.tsx` with route component
3. Next.js auto-creates the route
4. Add to NavBar if it's a main feature

### Add a New Component

1. Create: `src/app/components/ComponentName.tsx`
2. Create story: `src/stories/ComponentName.stories.tsx`
3. Test in Storybook: `npm run storybook`
4. Add to layout or pages as needed

### Fix Linting Errors

1. `npm run lint:fix` - Auto-fixes most issues
2. Manual edits if needed
3. `npm run format` - Ensure consistent formatting

### Run Tests Before Commit

```bash
npm run test -- --coverage    # See test coverage
npm run lint                  # Check linting
npm run format:check          # Check formatting
```

---

## Known Issues & Solutions

### Issue: Port 6006 Already in Use

**Solution:** Storybook auto-falls back to 6007. Check `npm run storybook` output.

### Issue: Pre-commit Hook Fails

**Solution:** Run `npm run lint:fix && npm run format` manually, then commit again.

### Issue: Story File Not Showing

**Solution:**

- Check filename ends in `.stories.tsx` (not `.ts`)
- Reload browser
- Check file is in `src/stories/` or `src/**/*.stories.tsx`

### Issue: Component Import Error in Story

**Solution:** Verify import path matches actual file location. Use relative paths from story file.

---

## Environment Variables

Create `.env.local` for development:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
# Add other env vars as needed for features
```

---

## Git Commit Convention

Follow conventional commits format:

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: dependency updates
```

Examples:

```bash
git commit -m "feat: add wallet connection component"
git commit -m "fix: navbar link styling on mobile"
git commit -m "docs: add storybook guide"
```

---

## When Chat History is Deleted

1. **Refer to this file** (COPILOT_REFERENCE.md) for project context
2. **Check PROJECT_OVERVIEW.md** for detailed progress
3. **Check STORYBOOK_GUIDE.md** for component documentation help
4. **Look at existing stories** in `src/stories/` for examples
5. **Check git log** with `git log --oneline` to see recent work

---

## Feature Checklist (Upcoming)

- [ ] Complete more component stories (Header, feature pages)
- [ ] Finish Sentry error monitoring setup
- [ ] Implement wallet connection (MetaMask)
- [ ] Add NFT minting functionality
- [ ] Build marketplace features
- [ ] Add faucet functionality
- [ ] Build airdrop system
- [ ] Add Lighthouse CI performance monitoring
- [ ] Setup accessibility linting (eslint-plugin-jsx-a11y)

---

## Useful Links

- **Repository:** https://github.com/Ash31393/blockchain-proj
- **Next.js Docs:** https://nextjs.org/docs
- **Storybook Docs:** https://storybook.js.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Note:** This reference file should be kept up-to-date as the project evolves. Update it whenever major changes occur or new patterns are established.
