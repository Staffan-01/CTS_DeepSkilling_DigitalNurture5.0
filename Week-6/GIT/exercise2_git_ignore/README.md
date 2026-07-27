# Exercise 2: Git Ignore

## Objectives
- Learn how to use `.gitignore` to exclude files from version control

## Steps

### 1. Create a `.gitignore` File
```bash
echo "node_modules/" > .gitignore
echo "dist/" >> .gitignore
echo "*.log" >> .gitignore
echo ".env" >> .gitignore
```

### 2. Create Files to Test
```bash
mkdir node_modules
echo "dependency" > node_modules/dep.js
echo "build output" > dist/bundle.js
echo "log data" > app.log
echo "secret key" > .env
echo "source code" > app.js
```

### 3. Check Status
```bash
git status
```
Only `app.js` and `.gitignore` should appear as untracked.

### 4. Stage and Commit
```bash
git add .gitignore app.js
git commit -m "Add .gitignore and app.js"
```

### 5. Verify Ignored Files
```bash
git status
```
The `node_modules/`, `dist/`, `*.log`, and `.env` files should not appear.

## Common .gitignore Patterns
```
# Dependencies
node_modules/
vendor/

# Build output
dist/
build/
*.o

# Logs
*.log
logs/

# Environment files
.env
.env.local

# IDE
.vscode/
.idea/
```
