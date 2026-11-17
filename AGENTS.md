# Project Rules

## GitHub Upload Confirmation

Whenever you create, edit, or delete files in this project, follow the [`github-auto-upload`](./.agents/skills/github-auto-upload/SKILL.md) skill:

1. Inspect `git status --short --branch` and draft a descriptive commit comment directly related to the changes made.
2. Ask the user **once**: *"Do you want to push these changes to GitHub?"* (including the proposed commit comment).
3. Once the user responds affirmatively, automatically perform the remaining steps (`git add`, `git commit`, `git push`) without asking for confirmation between steps.
