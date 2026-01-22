[comment]: # (Updated: 2026-01-22)
# 🎓 Git Real-World Safety Tutorial
*Based on the "SkilledCA" Migration Incident (Jan 2026)*

This guide documents a real-world scenario where we accidentally pushed a major refactor to the wrong repository and how we fixed it.

---

## 🛑 The Scenario
We had an existing repository (**Old Repo**) for a Tech website.  
We significantly reorganized the project (changed folders, added new sections) to create a **New Website**.  
**The Mistake:** We accidentally pushed this new structure to the **Old Repo** instead of the **New Repo**.

---

## 🛠️ The Fix (Step-by-Step)

### 1. Identify the Mistake
We checked the remote URL and realized it was pointing to the wrong place.
```bash
git remote -v
# Output: origin https://github.com/user/old-repo.git (WRONG!)
```

### 2. Find the Safe Point (Commit ID)
We looked at the log to find the last "good" commit before the mess.
```bash
git log --oneline -n 10
# Output:
# a031c19 (HEAD) Refactor: Reorganize site... (BAD COMMIT)
# 195eab2 Initial commit... (GOOD COMMIT)
```
*Target:* We want to go back to `195eab2`.

### 3. Connect to Old Repo (Temporarily)
To fix the old repo, we ensured we were looking at it.
```bash
git remote set-url origin https://github.com/user/old-repo.git
```

### 4. The Magic Command: Force Push ⚡
We forced the remote branch (`main`) to reset to the specific good commit ID (`195eab2`).
```bash
git push -f origin 195eab2:main
```
- **`-f` (Force)**: Tells Git "I know history is different, overwrite it anyway."
- **`195eab2:main`**: "Take my local commit `195eab2` and make it the remote's `main`."

> **⚠️ WARNING:** Force push is dangerous! It erases history. Only use it if you are 100% sure you want to revert changes on the server.

### 5. Switch to New Repo
Now that the old repo was fixed (rolled back), we pointed our local folder to the **New Repo** so we could continue working safely.
```bash
git remote set-url origin https://github.com/user/new-repo.git
```

### 6. Verification
We verified we are safe.
```bash
git remote -v
# Output: origin https://github.com/user/new-repo.git (CORRECT!)
```

---

## 🧠 Key Learnings
1. **Always check `git remote -v`** before pushing major changes.
2. **Commit IDs are your checkpoints.** You can always return to them.
3. **`git push -f` is a reset button** for the server, but use with extreme caution.
4. **`git remote set-url`** is the cleanest way to switch destinations.

---
---
*Created for SkilledCA Learning Hub*

---

# 📝 Part 2: Daily Workflow (Safe Practice)

After the incident, we established this standard routine for saving work.

## 1. Stage Changes
We tell Git which files to track updates for.
```bash
git add .
```
*   **`.` (Dot)**: Means "everything in the current folder".

## 2. Commit (Save Locally)
We save a snapshot of the changes with a clear message.
```bash
git commit -m "Feat: Add Google Sheets backend to feedback form"
```
*   **`-m`**: Stands for "message". ALWAYS write a clear message describing *what* and *why*.

## 3. Push (Upload to Cloud)
We upload our local commits to GitHub.
```bash
git push origin main
```
*   `origin`: The nickname for our remote repo (GitHub).
*   `main`: The branch we are working on.

## 💡 Pro Tip: Status Check
If you're ever unsure what's going on, run:
```bash
git status
```
It tells you what files are changed, what's staged, and what branch you're on. It's your compass! 🧭
