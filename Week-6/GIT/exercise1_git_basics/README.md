# Exercise 1: Git Basics

## Objectives
- Learn basic Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, `git pull`

## Steps

### 1. Initialize a Git Repository
```bash
mkdir GitDemo
cd GitDemo
git init
```

### 2. Check Repository Status
```bash
git status
```

### 3. Create a File
```bash
echo "Welcome to Git" > welcome.txt
```

### 4. Stage the File
```bash
git add welcome.txt
```

### 5. Commit the File
```bash
git commit -m "Initial commit: add welcome.txt"
```

### 6. Configure Git (if not already done)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 7. View Commit History
```bash
git log --oneline
```

## Summary
| Command | Description |
|---------|-------------|
| `git init` | Initialize a new repository |
| `git status` | Check the status of files |
| `git add <file>` | Stage a file for commit |
| `git commit -m "message"` | Commit staged files |
| `git log` | View commit history |
