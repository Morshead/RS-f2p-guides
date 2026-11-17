param(
    [Parameter(Mandatory = $true, HelpMessage = "Upload step to execute: stage, commit, or push.")]
    [ValidateSet("stage", "commit", "push")]
    [string]$Step,

    [Parameter(Mandatory = $false, HelpMessage = "Commit message describing the changes made (required for -Step commit).")]
    [string]$Message
)

$ErrorActionPreference = "Stop"

# Pre-check: Verify Git repository exists
if (-not (Test-Path ".git")) {
    Write-Error "Not a git repository (.git folder not found). Initialize git and configure a GitHub remote first."
    exit 1
}

switch ($Step) {
    "stage" {
        Write-Output "Staging all changes..."
        git add -A
        if ($LASTEXITCODE -ne 0) {
            Write-Error "git add failed."
            exit $LASTEXITCODE
        }

        Write-Output "Current staged status:"
        git status --short
        Write-Output "Step 1/3 complete: Changes staged."
    }

    "commit" {
        if ([string]::IsNullOrWhiteSpace($Message)) {
            Write-Error "A descriptive -Message is required when running -Step commit."
            exit 1
        }

        git diff --cached --quiet
        if ($LASTEXITCODE -eq 0) {
            Write-Output "No staged changes to commit. Run -Step stage first."
            exit 0
        }

        Write-Output "Committing staged changes with message: $Message"
        git commit -m "$Message"
        if ($LASTEXITCODE -ne 0) {
            Write-Error "git commit failed."
            exit $LASTEXITCODE
        }

        Write-Output "Step 2/3 complete: Changes committed."
    }

    "push" {
        $remotes = git remote
        if (-not $remotes) {
            Write-Error "No git remote configured. Add a GitHub remote (e.g., 'git remote add origin <url>') before pushing."
            exit 1
        }

        $branch = (git rev-parse --abbrev-ref HEAD).Trim()
        Write-Output "Pushing branch '$branch' to origin..."
        git push -u origin $branch
        if ($LASTEXITCODE -ne 0) {
            Write-Error "git push failed."
            exit $LASTEXITCODE
        }

        Write-Output "Step 3/3 complete: Successfully pushed changes to GitHub ($branch)."
    }
}
