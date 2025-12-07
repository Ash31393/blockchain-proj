# Project Overview Documentation

This folder contains comprehensive documentation about the blockchain project. These files serve as persistent references when chat history is deleted.

## Files in This Folder

### 1. **PROJECT_OVERVIEW.md**

Main project documentation with:

- Tech stack overview
- Current progress (completed, in-progress, planned)
- Project structure
- Key features and milestones
- Git status and deployment

**Use this when:** You need to understand the overall project status and what's been completed.

### 2. **STORYBOOK_GUIDE.md**

Complete guide for using Storybook with:

- What Storybook is and why we use it
- How to create new component stories
- How to add controls/props
- All current and planned stories
- Troubleshooting guide
- Common patterns and examples

**Use this when:** Creating new component stories or debugging Storybook issues.

### 3. **COPILOT_REFERENCE.md**

Quick reference for Copilot AI with:

- Project status summary
- Key file locations
- Running commands
- Tech stack at a glance
- Git commands
- Common workflows
- Known issues and solutions
- Feature checklist

**Use this when:** Chat history is deleted and you need quick context to continue development.

## How to Use These Files

1. **Start Development Session**
   - Read `COPILOT_REFERENCE.md` (2 min read) to get oriented
   - Check `PROJECT_OVERVIEW.md` for current status
   - Reference `STORYBOOK_GUIDE.md` as needed for components

2. **When Creating Components**
   - Use `STORYBOOK_GUIDE.md` as template
   - Follow patterns in existing stories
   - Update `PROJECT_OVERVIEW.md` with new progress

3. **When Debugging**
   - Check "Known Issues" section in `COPILOT_REFERENCE.md`
   - Look at "Troubleshooting" in `STORYBOOK_GUIDE.md`
   - Review project structure in `PROJECT_OVERVIEW.md`

4. **Before Committing**
   - Verify linting passes: `npm run lint`
   - Check formatting: `npm run format:check`
   - Run tests: `npm run test`
   - Use conventional commit messages (see `COPILOT_REFERENCE.md`)

## Quick Navigation

| Need             | File                 | Section                  |
| ---------------- | -------------------- | ------------------------ |
| Project status   | PROJECT_OVERVIEW.md  | Current Progress         |
| Creating stories | STORYBOOK_GUIDE.md   | How to Add More Stories  |
| Running commands | COPILOT_REFERENCE.md | Running the Project      |
| Known issues     | COPILOT_REFERENCE.md | Known Issues & Solutions |
| Git workflow     | COPILOT_REFERENCE.md | Important Git Commands   |
| Tech stack       | COPILOT_REFERENCE.md | Tech Stack Summary       |

## Keeping These Files Updated

As the project evolves:

1. Update `COPILOT_REFERENCE.md` with new commands or workflows
2. Update `PROJECT_OVERVIEW.md` with completed features
3. Update `STORYBOOK_GUIDE.md` when adding new patterns
4. Add new documentation files as needed (e.g., ARCHITECTURE.md, TESTING.md)

---

**Last Updated:** December 7, 2025
