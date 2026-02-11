# Deployment Guide: GitHub + GoDaddy

Step-by-step timeline to host **Blue Whale Tech Consultancy Services** (bwtcs.com) using GitHub and GoDaddy.  
**Contact:** Hr@bwtcs.com

---

## Overview

| Phase | Where | What |
|-------|--------|------|
| 1–3 | GitHub | Store code, build, and serve the site (GitHub Pages) |
| 4–5 | GoDaddy | Use your domain and point it to GitHub Pages |

**Result:** Your site runs on GitHub Pages; visitors use your GoDaddy domain **www.bwtcs.com**.

---

## Phase 1: Prepare the project for deployment

### Step 1.1 – Build the React app locally

On your computer, in the project folder:

```bash
cd /Users/Main/Desktop/consultancy
npm run build
```

This creates a `build` folder with the production files.

### Step 1.2 – Add `homepage` in `package.json` (for GitHub Pages)

Edit `package.json` and set `homepage` to your GitHub Pages URL:

- For **bwtcs.com**, set homepage to your live domain after DNS is connected:

```json
"homepage": "https://www.bwtcs.com"
```

(Until then, you can use `https://YOUR_USERNAME.github.io/consultancy` for GitHub Pages preview.)

---

## Phase 2: Put the code on GitHub

### Step 2.1 – Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click **“+”** (top right) → **“New repository”**.
3. **Repository name:** e.g. `consultancy` (or any name you prefer).
4. **Visibility:** Public.
5. Do **not** add a README, .gitignore, or license (you already have files).
6. Click **“Create repository”**.

### Step 2.2 – Push your project to GitHub

In Terminal (from your project folder):

```bash
cd /Users/Main/Desktop/consultancy

# Initialize Git (if not already)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Blue Whale Tech Consultancy Services (bwtcs.com)"

# Rename branch to main (if needed)
git branch -M main

# Add GitHub as remote (replace YOUR_USERNAME and consultancy with your repo name)
git remote add origin https://github.com/YOUR_USERNAME/consultancy.git

# Push to GitHub
git push -u origin main
```

Use your GitHub username and the exact repository name you created.

---

## Phase 3: Enable GitHub Pages and deploy the build

You have two options: **A) gh-pages branch (manual)** or **B) gh-pages package (automated)**.

### Option A – Deploy build manually to branch `gh-pages`

1. Install `gh-pages` (one-time):

   ```bash
   npm install --save-dev gh-pages
   ```

2. In `package.json`, add a `deploy` script and keep `homepage` correct:

   ```json
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "deploy": "gh-pages -d build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   },
   "homepage": "https://www.bwtcs.com"
   ```

3. Deploy:

   ```bash
   npm run build
   npm run deploy
   ```

4. On GitHub: **Settings → Pages**.
   - **Source:** Deploy from a branch.
   - **Branch:** `gh-pages` (or whatever branch `gh-pages` uses) → **Save**.

5. Wait a few minutes. Site will be at:  
   `https://YOUR_USERNAME.github.io/consultancy` (until you connect www.bwtcs.com).

### Option B – Deploy with `gh-pages` package (recommended)

1. Install:

   ```bash
   npm install --save-dev gh-pages
   ```

2. In `package.json`:

   - Set `homepage`: `"https://YOUR_USERNAME.github.io/consultancy"`.
   - Add scripts:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
   }
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

4. In GitHub: **Settings → Pages** → choose branch **gh-pages** (root) → Save.

**Timeline:** About 1–5 minutes after push/deploy, the site is live on `https://YOUR_USERNAME.github.io/consultancy`. Then point www.bwtcs.com to it (Phase 4).

---

## Phase 4: Point your GoDaddy domain to GitHub Pages

### Step 4.1 – Get your GitHub Pages URL

- It’s: `https://YOUR_USERNAME.github.io/consultancy`  
  Your custom domain will be **www.bwtcs.com**.

### Step 4.2 – Add custom domain in GitHub

1. In your repo: **Settings → Pages**.
2. Under **“Custom domain”**, enter: **www.bwtcs.com** (recommended).  
   Or use **bwtcs.com** (apex) if you prefer no “www”.
3. Click **Save**.
4. (Optional) Enable **“Enforce HTTPS”** after DNS is working.

### Step 4.3 – Configure DNS at GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products**.
2. Find your domain → **DNS** or **Manage DNS**.
3. Add or edit records as below.

**For www.bwtcs.com (recommended):**

| Type | Name | Value | TTL |
|------|------|--------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 600 (or default) |

Replace `YOUR_USERNAME` with your GitHub username.

**If you also want bwtcs.com (no www) to work:**

| Type | Name | Value | TTL |
|------|------|--------|-----|
| A     | @ | 185.199.108.153 | 600 |
| A     | @ | 185.199.109.153 | 600 |
| A     | @ | 185.199.110.153 | 600 |
| A     | @ | 185.199.111.153 | 600 |

(These are GitHub’s Pages IPs; they can change – check [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).)

4. Remove or avoid conflicting CNAME for root (`@`) if you only use `www`.
5. Save changes. DNS can take from **5 minutes up to 48 hours** (often 15–30 minutes).

### Step 4.4 – Wait for DNS and HTTPS

- GitHub will issue an SSL certificate for your custom domain.
- In **Settings → Pages**, when the domain is verified, enable **“Enforce HTTPS”**.

---

## Phase 5: Verify and maintain

### Step 5.1 – Check the site

- `https://www.yourconsultancy.com` (or `https://yourconsultancy.com`).
- Test: Home, About, Services, Contact, and the contact form.

### Step 5.2 – Future updates

1. Edit code locally.
2. Build and deploy:

   ```bash
   npm run deploy
   ```

   (Or: `npm run build` then push the `gh-pages` branch if you use manual deploy.)

3. Changes usually appear within 1–5 minutes.

---

## Timeline summary

| Step | Action | When |
|------|--------|------|
| 1 | Set `homepage` in package.json, run `npm run build` | Day 1 |
| 2 | Create GitHub repo, push code (`git push`) | Day 1 |
| 3 | Install `gh-pages`, add deploy script, run `npm run deploy` | Day 1 |
| 4 | In GitHub: Settings → Pages → set branch to gh-pages | Day 1 |
| 5 | Wait for GitHub Pages to go live (~1–5 min) | Day 1 |
| 6 | In GitHub: Settings → Pages → add GoDaddy custom domain | Day 1 |
| 7 | In GoDaddy: add CNAME (and A records if using apex) | Day 1 |
| 8 | Wait for DNS (15 min – 48 hrs) | Day 1–2 |
| 9 | Enable “Enforce HTTPS” in GitHub Pages | After DNS works |
| 10 | Test site on your domain | Day 2 |

---

## Alternative: Hosting the site on GoDaddy (not GitHub Pages)

If you have **GoDaddy Web Hosting** (cPanel) and prefer the site to be hosted there:

1. Build: `npm run build`.
2. Upload the **contents** of the `build` folder (not the folder itself) to:
   - `public_html/` for the main site, or  
   - `public_html/consultancy/` for a subfolder.
3. If the app uses client-side routing (React Router), add a `.htaccess` in the same folder with:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </RewriteEngine>
   </IfModule>
   ```

   (Adjust `RewriteBase` if you use a subfolder, e.g. `/consultancy/`.)

4. Point your GoDaddy domain to this hosting in GoDaddy’s DNS (usually already set for “Web Hosting”).

---

## Quick reference

- **GitHub repo:** `https://github.com/YOUR_USERNAME/consultancy`
- **GitHub Pages (before custom domain):** `https://YOUR_USERNAME.github.io/consultancy`
- **After GoDaddy:** **https://www.bwtcs.com** | **Hr@bwtcs.com**
- **Deploy command:** `npm run deploy`

**For this project:** Domain **www.bwtcs.com**, host email **Hr@bwtcs.com**, website name **Blue Whale Tech Consultancy Services**.
