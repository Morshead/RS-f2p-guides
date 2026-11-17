---
name: github-auto-upload
description: >-
  Inspects project changes, drafts a commit comment related to the changes made,
  asks the user once whether they want to push the changes to GitHub, and—upon
  affirmative confirmation—runs git add, git commit, and git push as separate
  individual commands without asking between steps. Use this skill whenever you
  create, edit, or delete files in the project.
---

# GitHub Auto-Upload Skill

Use this skill after making any code, documentation, or configuration changes to the project. Ask the user **once** before uploading; once they confirm, run each Git command as its own **separate, standalone command** (never chained on one line with `;` or `&&`) so command permissions/allowlists can match each command individually.

## Workflow

1. **Inspect Changes & Draft a Related Comment**
   - Run `git status --short --branch` as a standalone command to verify what files were created, edited, or deleted (and ensure no sensitive credentials or unintended temporary files are included).
   - Draft a clear, concise commit comment directly related to the changes made (e.g., `feat: add F2P quest progression tracker`).

2. **Ask Once for Confirmation**
   - Show the changed files and proposed commit comment, and ask **one question**:
     > *"Do you want to push these changes to GitHub?"*
   - **Wait** for the user's response. Do not stage, commit, or push until the user responds affirmatively.

3. **Execute Each Git Command Individually (No Asking Between Steps)**
   - Once the user responds in the affirmative (or suggests edits to the comment), run the required Git commands **one per tool call** (never combined with `;` or `&&`):
     1. Stage changes: `git add -A` (or selective paths if requested).
     2. Commit with the descriptive comment: `git commit -m "<your descriptive comment>"` (skip if already committed).
     3. Push to GitHub: `git push` (or `git push -u origin <branch>` if upstream isn't set).
     4. Verify final state: `git status --short --branch`.
   - Report the branch, commit hash, and commit comment to the user.

## Uninitialized Repo or Missing Remote
- If `.git` or a remote is missing, inform the user and offer to run `git init -b main` and `git remote add origin <url>` (each as its own command) before proceeding.
