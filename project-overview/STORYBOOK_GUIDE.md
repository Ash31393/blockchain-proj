# Storybook Complete Guide

A comprehensive guide for creating, managing, and using Storybook in this project.

---

## What is Storybook?

Storybook is an isolated development environment for building and testing UI components. It allows you to:

- **View components in isolation** - Test without the full app context
- **Create interactive stories** - Document different states/variants
- **Auto-generate documentation** - From JSX/TypeScript comments
- **Test interactions** - Record and replay user interactions
- **Check accessibility** - Run a11y audits on components
- **Visual regression testing** - Catch unintended visual changes with Chromatic
- **Develop faster** - Focus on component behavior without full app setup

---

## Getting Started with Storybook

### Start the Storybook Server

```bash
npm run storybook
```

- Opens on `http://localhost:6006` (or 6007 if 6006 is in use)
- Watch mode - changes auto-reload
- Full development experience

### Access Storybook Features

Once running, you'll see:

- **Sidebar:** Components organized by folder structure
- **Canvas:** Interactive component preview
- **Tabs:** Controls, Actions, Interactions, Accessibility, etc.

---

## Creating Your First Story

### Step 1: Create Story File

Create a file named `ComponentName.stories.tsx` in `src/stories/`:

```tsx
// src/stories/NavBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import NavBar from '../app/components/NavBar';

// Metadata about the story
const meta = {
  title: 'Components/NavBar', // Shows in sidebar as Components/NavBar
  component: NavBar, // Component to document
  parameters: {
    layout: 'fullscreen', // Fullscreen, centered, or padded
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story variant
export const Default: Story = {
  render: () => <NavBar />,
};
```

### Step 2: Add More Variants

```tsx
// Add additional story variants
export const Active: Story = {
  render: () => <NavBar isActive={true} />,
};

export const WithUserMenu: Story = {
  render: () => <NavBar showUserMenu={true} />,
};
```

### Step 3: Save and View

- Save the file
- Browser auto-reloads
- New story appears in Storybook sidebar under Components/NavBar

---

## Story File Structure Explained

### File Naming

- Must end in `.stories.tsx` (not `.stories.ts`)
- The `.tsx` extension is required because stories contain JSX
- Place in `src/stories/` or alongside components

### Meta Object (Story Configuration)

```tsx
const meta = {
  title: 'Components/NavBar', // Where it appears in sidebar
  component: NavBar, // Component to render
  parameters: {
    layout: 'fullscreen', // 'fullscreen', 'centered', 'padded'
    docs: {
      description: 'Navigation component...',
    },
  },
  argTypes: {
    // Define props for controls
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
  decorators: [
    // Wrap stories with providers
    (Story) => (
      <YourProvider>
        <Story />
      </YourProvider>
    ),
  ],
} satisfies Meta<typeof NavBar>;
```

### Story Definition

```tsx
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props to pass to component
    // ...
  },
  render: () => <NavBar />, // Custom render function
  play: async ({ canvasElement }) => {
    // Interaction testing code
  },
};
```

---

## Adding Component Props & Controls

### Without Controls

```tsx
export const WithText: Story = {
  render: () => <Button>Click me</Button>,
};
```

### With Controls (Interactive)

```tsx
const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }, // Button click
    variant: {
      // Dropdown select
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean' }, // Checkbox
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    borderRadius: { control: 'range', min: 0, max: 20 }, // Slider
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    size: 'medium',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    size: 'medium',
    children: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled button',
  },
};
```

### Control Types

- `'select'` - Dropdown menu
- `'boolean'` - Checkbox
- `'radio'` - Radio buttons
- `'range'` - Number slider
- `'color'` - Color picker
- `'text'` - Text input
- `'date'` - Date picker

---

## Story Organization

### Title Format (Sidebar Structure)

```tsx
'Components/Button'; // Shows under Components folder
'Components/Forms/Input'; // Nested folder structure
'Pages/Dashboard'; // Different category
'Layout/Header'; // Multiple categorization
```

### Best Practices

```tsx
// Good: Clear hierarchy
title: 'Components/Forms/TextInput';

// Avoid: Flat structure
title: 'TextInput';

// Avoid: Too deep
title: 'Components/Forms/Inputs/Text/StandardText';
```

---

## Current Project Stories

### Existing Stories

- **Components/NavBar** - `src/stories/NavBar.stories.tsx`
  - Default variant showing navigation bar
  - Fullscreen layout
  - Links to all feature pages

### Stories to Create

- **Components/Header** - From `src/app/components/Header.tsx`
- **Components/Button** - If created
- **Components/Card** - If created
- **Pages/Wallet** - Wallet feature page
- **Pages/NFT** - NFT minting page
- **Pages/Marketplace** - Marketplace page
- **Pages/Faucet** - Faucet page
- **Pages/Airdrop** - Airdrop page

---

## Using Storybook Features

### Controls Tab

- Interactive controls for component props
- Change values in real-time
- See component update instantly
- Use for testing different states

### Actions Tab

- Logs all component events/callbacks
- Verify onClick, onChange, etc. are triggered
- Useful for interactive components

### Interactions Tab

- Record user interactions (clicks, typing)
- Replay interactions
- Create reproducible test cases

### Visual Tests Tab

- Take snapshots for regression testing
- Chromatic integration for CI/CD visual testing
- Detect unintended visual changes

### Accessibility Tab (a11y)

- Run automated accessibility checks
- Identify WCAG violations
- Color contrast issues
- ARIA attribute problems

---

## Storybook Configuration Files

### `.storybook/main.ts`

Main configuration file:

```typescript
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
  ],
  staticDirs: ['../public'],
};

export default config;
```

**What it does:**

- Defines framework (Next.js + Vite)
- Tells Storybook where to find stories
- Configures addons (vitest, a11y, docs, etc.)
- Points to static assets

### `.storybook/preview.ts`

Runtime configuration:

```typescript
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: true },
        },
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
```

**What it does:**

- Global parameters for all stories
- Control matchers (recognize color/date props)
- Accessibility settings
- Next.js integration settings

---

## Common Patterns

### Component with Props

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../app/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
```

### Component with State

```tsx
// Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '../app/components/Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Custom component to manage state
function ModalWithState() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Modal content</p>
      </Modal>
    </>
  );
}

export const Open: Story = {
  render: () => <ModalWithState />,
};
```

### Component with Decorator (Provider)

```tsx
// Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Card from '../app/components/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Card title="Card Title">Card content</Card>,
};
```

---

## Troubleshooting

### Issue: Story File Not Appearing

**Causes:**

- File doesn't end in `.stories.tsx`
- File is in wrong location (not in `src/stories/`)
- Typo in component name
- Storybook not reloaded

**Solutions:**

1. Check filename ends in `.stories.tsx`
2. Move file to `src/stories/`
3. Reload browser (F5)
4. Check Storybook server output for errors

### Issue: Component Not Rendering

**Causes:**

- Import path is incorrect
- Component requires props that aren't provided
- Component requires external context/providers

**Solutions:**

1. Verify import path is correct relative to story file
2. Check component prop requirements
3. Use decorators to provide necessary context

### Issue: "Expected '>', got 'style'"

**Cause:** Story file has `.ts` extension but contains JSX

**Solution:** Rename file from `.stories.ts` to `.stories.tsx`

### Issue: Controls Not Appearing

**Causes:**

- Missing `argTypes` in meta
- Props aren't recognized as controllable types

**Solutions:**

1. Add `argTypes` to meta object
2. Use `args` in story definition
3. Check prop types are supported

### Issue: NextJS Link Not Working

**Solution:** Already configured in `.storybook/preview.ts` with:

```typescript
nextjs: {
  appDirectory: true,
}
```

---

## Best Practices

### ✅ Do

- One component per story file (usually)
- Use descriptive story names (Default, Hover, Active, Disabled)
- Add documentation with comments
- Create variants for different states
- Use controls for interactive props
- Test components at different screen sizes
- Check accessibility with a11y tab

### ❌ Don't

- Create `.stories.ts` files with JSX (use `.stories.tsx`)
- Mix multiple components in one story file
- Forget to document props
- Ignore accessibility warnings
- Leave console errors unresolved

---

## Next: Create Header Story

Template to create Header component story:

```tsx
// src/stories/Header.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Header from '../app/components/Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Header />,
};
```

Save, and you'll see it appear in Storybook!

---

## Resources

- **Storybook Docs:** https://storybook.js.org/docs
- **Writing Stories:** https://storybook.js.org/docs/react/writing-stories/introduction
- **Args & Controls:** https://storybook.js.org/docs/react/essentials/controls
- **Decorators:** https://storybook.js.org/docs/react/writing-stories/decorators
- **Testing:** https://storybook.js.org/docs/react/writing-tests/introduction
- **Next.js Integration:** https://storybook.js.org/docs/react/builders/webpack#next
- **Accessibility:** https://storybook.js.org/docs/react/essentials/accessibility

---

**Last Updated:** December 7, 2025
