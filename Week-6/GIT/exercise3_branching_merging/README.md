# Exercise 3: Branching and Merging

## Objectives
- Learn how to create, switch, and merge branches in Git

## Steps

### 1. View Current Branch
```bash
git branch
```

### 2. Create a New Branch
```bash
git branch feature-login
```

### 3. Switch to the New Branch
```bash
git checkout feature-login
```
Or use the shorthand:
```bash
git checkout -b feature-login
```

### 4. Make Changes on the Feature Branch
```bash
echo "Login functionality" > login.js
git add login.js
git commit -m "Add login page"
```

### 5. Switch Back to Main Branch
```bash
git checkout main
```

### 6. Create Another Branch
```bash
git checkout -b feature-signup
echo "Signup functionality" > signup.js
git add signup.js
git commit -m "Add signup page"
```

### 7. Merge Feature Branch into Main
```bash
git checkout main
git merge feature-login
```

### 8. Delete Merged Branch
```bash
git branch -d feature-login
```

### 9. View Branch History
```bash
git log --oneline --graph --all
```

## Summary
| Command | Description |
|---------|-------------|
| `git branch` | List/create branches |
| `git checkout -b <name>` | Create and switch to a branch |
| `git merge <branch>` | Merge a branch into current branch |
| `git branch -d <name>` | Delete a merged branch |
