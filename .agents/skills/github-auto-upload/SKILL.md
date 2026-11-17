---
name: github-auto-upload
description: >-
  Stages, commits with a descriptive comment related to the changes made,
  and pushes project modifications to GitHub after getting affirmative confirmation
  from the user. Use this skill whenever you create, edit, or delete files in the project.
---

# GitHub Auto-Upload Skill

Use this skill after making any code, documentation, or configuration changes to the project. You **must** ask the user for confirmation before committing and pushing, and only run the upload once they respond affirmatively.

## Workflow Steps

1. **Inspect Changes & Draft a Related Commit Comment**
   - Review the modified, added, or deleted files (e.g., via `git status --short`) to ensure no sensitive credentials or unintended temporary files are included.
   - Draft a clear, concise commit message that directly describes the changes made and why (e.g., `feat: add F2P quest progression table and skill requirements`).

2. **Ask the User for Confirmation**
   - Present the proposed commit message to the user and ask if they would like to commit and upload the changes to GitHub.
   - **Wait** for the user's response. Do **not** run the upload script until the user responds with an affirmative confirmation (e.g., "yes", "go ahead", "commit it").

3. **Run the Upload Script (After Affirmative Confirmation)**
   - Once the user confirms, execute the helper script [upload.ps1](./scripts/upload.ps1) with the descriptive commit message:
     ```powershell
     powershell -ExecutionPolicy Bypass -File .\.agents\skills\github-auto-upload\scripts\upload.ps1 -Message "<your descriptive comment>"
     ```

4. **Handle Uninitialized Repo or Missing Remote**
   - If the workspace does not yet have a `.git` repository or `origin` remote configured, inform the user and offer to initialize the repository (`git init`, `git branch -M main`) and connect it to their GitHub repository URL or create one via `gh repo create`.

5. **Verify Upload**
   - Confirm in the command output that `git commit` and `git push` succeeded without errors, and report the commit comment and branch to the user.
