# Project Rules

## Step-by-Step GitHub Upload Confirmation

Whenever you create, edit, or delete files in this project, you **must** follow the [`github-auto-upload`](./.agents/skills/github-auto-upload/SKILL.md) skill natively step by step, inspecting Git state and asking the user for confirmation before executing **each** individual Git step:

1. **Stage**: Inspect `git status --short --branch`, list changed files, and ask the user for confirmation before staging (`git add`).
2. **Commit**: Draft a descriptive commit comment directly related to the changes made and ask the user for confirmation before committing (`git commit -m "..."`).
3. **Push**: Show the commit summary and target branch and ask the user for confirmation before pushing to GitHub (`git push`).
