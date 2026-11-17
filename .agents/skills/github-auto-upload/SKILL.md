---
name: github-auto-upload
description: >-
  Guides a step-by-step GitHub upload (stage, commit with a descriptive comment
  related to the changes made, and push), asking the user for confirmation before
  each individual step. Use this skill whenever you create, edit, or delete files
  in the project.
---

# GitHub Auto-Upload Skill (Step-by-Step)

Use this skill after making any code, documentation, or configuration changes to the project. You **must** execute the upload in **3 separate steps**, asking the user for affirmative confirmation before **each** step.

**Never** chain `stage`, `commit`, and `push` together in a single turn without waiting for the user's response at each step.

## Step-by-Step Workflow

### Step 1/3 — Stage Changes
1. Run `git status --short` to inspect all modified, added, or deleted files (ensure no sensitive credentials or unintended temporary files are included).
2. List the changed files for the user and ask:
   > *"Step 1/3 (Stage): Would you like me to stage these changes?"*
3. **Stop and wait** for the user's confirmation.
4. Once the user responds affirmatively, run:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\.agents\skills\github-auto-upload\scripts\upload.ps1 -Step stage
   ```

### Step 2/3 — Commit with a Related Comment
1. After staging succeeds, draft a clear, concise commit comment that directly describes the changes made and why (e.g., `feat: add F2P quest progression table and skill requirements`).
2. Present the staged files and proposed commit comment to the user and ask:
   > *"Step 2/3 (Commit): Would you like me to commit the staged changes with the comment: `<your descriptive comment>`?"*
3. **Stop and wait** for the user's confirmation (if the user suggests edits to the comment, use their updated wording).
4. Once the user responds affirmatively, run:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\.agents\skills\github-auto-upload\scripts\upload.ps1 -Step commit -Message "<your descriptive comment>"
   ```

### Step 3/3 — Push to GitHub
1. After committing succeeds, show the created commit summary and target branch (e.g., `origin/main`) and ask:
   > *"Step 3/3 (Push): Would you like me to push this commit to GitHub (`origin/<branch>`)?"*
2. **Stop and wait** for the user's confirmation.
3. Once the user responds affirmatively, run:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\.agents\skills\github-auto-upload\scripts\upload.ps1 -Step push
   ```
4. Confirm in the command output that `git push` succeeded without errors and report the branch and commit hash to the user.

## Handling Uninitialized Repo or Missing Remote
- If the workspace does not yet have a `.git` repository or `origin` remote configured, inform the user and offer to initialize the repository (`git init -b main`) and connect it to their GitHub repository URL before proceeding with Step 1.
