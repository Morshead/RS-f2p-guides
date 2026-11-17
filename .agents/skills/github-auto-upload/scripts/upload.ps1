param(
    [Parameter(Mandatory = $true, HelpMessage = "Commit message describing the changes made.")]
    [string]$Message
)

$ErrorActionPreference = "Stop"

# 1. Verify Git repository exists
if (-not (Test-Path ".git")) {
    Write-Error "Not a git repository (.git folder not found). Initialize git and configure a GitHub remote first."
    exit 1
}

# 2. Verify a remote is configured
$remotes = git remote
if (-not $remotes) {
    Write-Error "No git remote configured. Add a GitHub remote (e.g., 'git remote add origin <url>') before uploading."
    exit 1
}

# 3. Stage all changes
git add -A

# 4. Check if there are staged changes to commit
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Output "No changes to commit."
    exit 0
}

# 5. Commit with the related comment
Write-Output "Committing changes with message: $Message"
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
    Write-Error "git commit failed."
    exit $LASTEXITCODE
}

# 6. Push to remote branch
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
Write-Output "Pushing branch '$branch' to origin..."
git push -u origin $branch
if ($LASTEXITCODE -ne 0) {
    Write-Error "git push failed."
    exit $LASTEXITCODE
}

Write-Output "Successfully uploaded changes to GitHub ($branch)."
