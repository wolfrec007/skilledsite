# 🏗️ SkilledCA Site Blueprint
*Current Architecture as of Jan 22, 2026*

This blueprint documents the current file structure, navigation flow, and key components of the SkilledCA website.

## 📂 File Structure
```
skilledca.in/
├── index.html                  # 🏠 Main Dynamic Homepage (Entry Point)
├── ICON_REQUIREMENTS.md        # 📋 Icon naming & download guide
├── GIT_TUTORIAL.md             # 🎓 Git safety & rollback guide
│
├── tech/                       # 💻 Tech Hub Section
│   ├── index.html              # Tech Hub Landing Page
│   ├── backend.html            # Backend Path
│   ├── go.html                 # Go Path
│   ├── python-gui-roadmap.html # Python Path
│   ├── cybersecurity.html      # Security Path
│   ├── linux.html              # Linux Path
│   ├── web-basics.html         # Web Dev Path
│   └── cmd-snippets.html       # CMD Reference
│
├── ca/                         # 📊 CA Hub Section
│   └── index.html              # CA Hub Landing Page (Coming Soon)
│
├── forms/                      # 📝 Forms Module
│   └── index.html              # Feedback Form
│
├── styles/                     # 🎨 Shared Styles
│   └── main.css                # Global CSS (Theme, Layout, Responsive)
│
├── scripts/                    # ⚙️ Shared Logic
│   └── main.js                 # Global JS (Modals, Animations)
│
└── assets/                     # 🖼️ Static Assets
    └── favicon.svg             # Site Icon
```

---

## 🧭 Navigation Flow

### 1. Main Navbar (Global)
Present on all tech pages.
`Home (SkilledCA)` | `CA Hub` | `Tech Hub` | `Feedback` | `Say Hi 👋`

### 2. User User Journeys

**A. Tech Learner**
1. Lands on `index.html` → Clicks "Tech Hub"
2. Sees `tech/index.html` (Landing) → Takes Quiz or Browses Paths
3. Clicks a Path (e.g., `backend.html`) → Reads Content
4. Can jump to `CA Hub` or `Home` via Navbar

**B. CA Professional**
1. Lands on `index.html` → Clicks "CA Hub"
2. Sees `ca/index.html` (Current resources + Coming Soon)
3. Can jump to `Tech Hub` or `Home` via Navbar

---

## 🧩 Key Components

| Component | Description | File Location |
|-----------|-------------|---------------|
| **Dynamic Hero** | Main landing page split (Tech vs CA) | `index.html` |
| **Contact Modal** | "Say Hi" popup with email forms | `tech/index.html`, etc. (in HTML) |
| **Quiz Modal** | Interactive path recommender | `tech/index.html` |
| **Email Fallback** | Banner if Web3Forms fails | `scripts/main.js` |
| **Glass Theme** | Dark mode, glassmorphism UI | `styles/main.css` |

---

## 🚀 Next Steps (Roadmap)
1.  **Icons**: Replace emojis with SVGs (see `ICON_REQUIREMENTS.md`).
2.  **CA Hub Content**: Build detail pages for Excel, GSTIN, etc.
3.  **Deploy**: Connect GitHub repo to Vercel/Netlify.
