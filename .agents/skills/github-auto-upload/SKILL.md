---
name: github-auto-upload
description: >-
  Inspects project changes, drafts a commit comment related to the changes made,
  asks the user once whether they want to push the changes to GitHub, and—upon
  affirmative confirmation—stages, commits, and pushes automatically without
  asking between steps. Use this skill whenever you create, edit, or delete
  files in the project.
---

# GitHub Auto-Upload Skill

Use this skill after making any code, documentation, or configuration changes to the project. Ask the user **once** before uploading; once they confirm, perform all remaining Git steps automatically without asking again.

## Workflow

1. **Inspect Changes & Draft a Related Comment**
   - Run `git status --short --branch` to verify what files were created, edited, or deleted (and ensure no sensitive credentials or unintended temporary files are included).
   - Draft a clear, concise commit comment directly related to the changes made (e.g., `feat: add F2P quest progression tracker`).

2. **Ask Once for Confirmation**
   - Show the changed files and proposed commit comment, and ask **one question**:
     > *"Do you want to push these changes to GitHub?"*
   - **Wait** for the user's response. Do not stage, commit, or push until the user responds affirmatively.

3. **Execute All Remaining Steps Automatically**
   - Once the user responds in the affirmative (or suggests edits to the comment), decide and run the necessary Git commands natively in sequence without asking for confirmation between steps:
     1. Stage changes as needed (`git add -A` or selective paths if requested).
     2. Commit with the descriptive comment (`git commit -m "<your descriptive comment>"`), unless changes were already committed.
     3. Push to GitHub (`git push` or `git push -u origin <branch>`).
   - Verify the final `git push` and `git status --short --branch` output succeeded, then report the branch, commit hash, and commit comment to the user.

## Uninitialized Repo or Missing Remote
- If `.git` or a remote is missing, inform the user and offer to run `git init -b main` and `git remote add origin <url>` before proceeding.
