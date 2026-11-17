# Project Rules

## Step-by-Step GitHub Upload Confirmation

Whenever you create, edit, or delete files in this project, you **must** follow the [`github-auto-upload`](./.agents/skills/github-auto-upload/SKILL.md) skill step by step, asking the user for confirmation before **each** step and waiting for their affirmative reply before executing it via [`.agents/skills/github-auto-upload/scripts/upload.ps1`](./.agents/skills/github-auto-upload/scripts/upload.ps1):

1. **Step 1/3 (Stage)**: List the changed files (`git status --short`) and ask the user if they want to stage them (`-Step stage`).
2. **Step 2/3 (Commit)**: Draft a descriptive commit comment directly related to the changes made and ask the user if they want to commit (`-Step commit -Message "..."`).
3. **Step 3/3 (Push)**: Show the commit summary and target branch and ask the user if they want to push to GitHub (`-Step push`).
