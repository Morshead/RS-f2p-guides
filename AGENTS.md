# Project Rules

## GitHub Upload Confirmation

Whenever you create, edit, or delete files in this project, you **must** follow the [`github-auto-upload`](./.agents/skills/github-auto-upload/SKILL.md) workflow:

1. Draft a descriptive commit comment directly related to the changes you made.
2. Ask the user if they want to commit and upload the changes to GitHub (showing the proposed commit comment).
3. **Only after the user responds with an affirmative confirmation**, run the `github-auto-upload` skill script ([`.agents/skills/github-auto-upload/scripts/upload.ps1`](./.agents/skills/github-auto-upload/scripts/upload.ps1)) to stage, commit, and push the changes to GitHub.
