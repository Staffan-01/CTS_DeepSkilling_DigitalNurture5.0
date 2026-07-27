# Exercise 4: Conflict Resolution

## Objectives
- Learn how to handle merge conflicts in Git

## Steps

### 1. Create a Conflict
```bash
git checkout -b branch-a
echo "Version A" > config.txt
git add config.txt
git commit -m "Branch A: update config"
```

```bash
git checkout main
git checkout -b branch-b
echo "Version B" > config.txt
git add config.txt
git commit -m "Branch B: update config"
```

### 2. Merge and Encounter Conflict
```bash
git checkout main
git merge branch-b
git merge branch-a
```
Git will show a merge conflict in `config.txt`.

### 3. View the Conflict
```bash
cat config.txt
```
You will see:
```
<<<<<<< HEAD
Version B
=======
Version A
>>>>>>> branch-a
```

### 4. Resolve the Conflict
Open the file and edit it to keep the desired content:
```
Version A and B merged
```

### 5. Stage the Resolved File
```bash
git add config.txt
git commit -m "Resolve merge conflict"
```

### 6. Verify Resolution
```bash
git log --oneline --graph --all
```

## Tips
- Always communicate with your team to avoid conflicts
- Pull frequently to stay up to date
- Use a merge tool for complex conflicts
