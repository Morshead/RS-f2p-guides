---
name: github-auto-upload
description: >-
  Guides an interactive, step-by-step GitHub upload (inspecting git state,
  staging, committing with a descriptive comment related to the changes made,
  and pushing), asking the user for confirmation before each step. Use this
  skill whenever you create, edit, or delete files in the project.
---

# GitHub Auto-Upload Skill (LLM-Driven, Step-by-Step)

Use this skill after making any code, documentation, or configuration changes to the project. Instead of relying on a wrapper script, inspect the live Git state yourself, decide the next logical step in the upload workflow, and ask the user for affirmative confirmation before executing each individual step.

**Never** combine staging, committing, and pushing into a single turn without waiting for user confirmation at each step.

## How to Decide & Execute Each Step

1. **Inspect Git State First**
   Run `git status --short --branch` (and `git remote -v` if needed) to understand where the repository stands:
   - **No `.git` repo or no remote**: Offer to initialize Git (`git init -b main`) or add the remote (`git remote add origin <url>`) and wait for confirmation.
   - **Unstaged / untracked changes exist**: Your next step is **Stage**.
   - **Staged changes exist (and nothing left to stage, or user chose selective staging)**: Your next step is **Commit**.
   - **Working tree is clean and local branch is ahead of remote (`[ahead N]`)**: Your next step is **Push**.

2. **Step: Stage (if unstaged or untracked changes exist)**
   - List the changed files and make sure no sensitive credentials or unwanted temporary files are included.
   - Ask the user for confirmation (e.g., *"Would you like me to stage these changes?"*).
   - **Wait** for their reply. Once confirmed, run the appropriate `git add` command (e.g., `git add -A`, or selective paths if the user requested exclusions).

3. **Step: Commit (when staged changes are ready)**
   - Inspect staged changes (`git diff --cached --stat`) if needed and craft a concise, descriptive commit comment directly describing the changes made and why (e.g., `feat: add F2P quest progression table`).
   - Show the proposed commit comment to the user and ask for confirmation (e.g., *"Would you like me to commit the staged changes with the comment: `<comment>`?"*).
   - **Wait** for their reply (use any edits the user requests). Once confirmed, run `git commit -m "<comment>"`.

4. **Step: Push (when local commits are ahead of remote)**
   - Show the commit summary (`git log -1 --oneline`) and target remote/branch (e.g., `origin/main`) and ask for confirmation (e.g., *"Would you like me to push this commit to GitHub (`origin/<branch>`)?"*).
   - **Wait** for their reply. Once confirmed, run `git push -u origin <branch>` (or `git push`) and verify the output succeeded without errors.
