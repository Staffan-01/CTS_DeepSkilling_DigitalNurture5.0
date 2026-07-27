# Exercise 5: Cleanup and Push

## Objectives
- Learn how to clean up the repository and push changes to a remote

## Steps

### 1. View Remote Repository
```bash
git remote -v
```

### 2. Add a Remote Repository
```bash
git remote add origin https://github.com/username/repository.git
```

### 3. Push to Remote
```bash
git push -u origin main
```

### 4. Pull from Remote
```bash
git pull origin main
```

### 5. Clean Up Local Branches
```bash
git branch -d feature-login
git branch -d feature-signup
```

### 6. Remove Untracked Files
```bash
git clean -n  # Preview what will be deleted
git clean -f  # Force remove untracked files
```

### 7. View Final Status
```bash
git status
git log --oneline
```

### 8. Push Final Changes
```bash
git push origin main
```

## Summary
| Command | Description |
|---------|-------------|
| `git remote add origin <url>` | Add a remote repository |
| `git push -u origin main` | Push to remote and set upstream |
| `git pull origin main` | Pull from remote |
| `git branch -d <name>` | Delete a local branch |
| `git clean -f` | Remove untracked files |
