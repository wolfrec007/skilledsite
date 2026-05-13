# app.skilledca.in — Architecture Blueprint

> **Stack:** React + Vite + Node.js + Express + SuperTokens  
> **Author:** wolfrec007 | **Status:** Ready to Build | **Date:** March 2026

---

## Why app.skilledca.in?

| Domain | Purpose |
|---|---|
| `skilledca.in` | Public site — stays static, no changes needed |
| `app.skilledca.in` | Authenticated utility hub — new build |

Users visit `skilledca.in`, click a utility link → land on `app.skilledca.in/gstr3b` → if not logged in, redirected to login → authenticated → utility loads.

---

## Architecture at a Glance

```
User Browser
     │
     ▼
app.skilledca.in          ← React SPA (Vercel)
     │  checks session
     ▼
SuperTokens Core           ← Managed cloud (free ≤5000 MAU)
     │  session valid?
     ▼
api.skilledca.in           ← Node.js + Express (Railway)
     │  business logic
     ▼
Database                   ← PostgreSQL / MongoDB Atlas
```

---

## Step 1 — DNS Setup

In your domain registrar (GoDaddy / Namecheap / Cloudflare):

```
Type   Name   Value                    TTL
CNAME  app    cname.vercel-dns.com     Auto
CNAME  api    your-railway-app.up.railway.app  Auto
```

> DNS propagation takes 10–30 minutes. Both get free SSL automatically.

---

## Step 2 — Frontend (React App)

### Scaffold

```bash
npm create vite@latest app-skilledca -- --template react
cd app-skilledca
npm install supertokens-web-js react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Folder Structure

```
app-skilledca/
├── src/
│   ├── main.jsx                 ← SuperTokens init here
│   ├── App.jsx                  ← all routes here
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx   ← wraps pages needing auth
│   ├── pages/
│   │   ├── Home.jsx             ← dashboard post-login
│   │   ├── GSTR3B.jsx           ← your first utility
│   │   └── Login.jsx            ← SuperTokens UI injected
│   └── api/
│       └── client.js            ← axios instance
├── vercel.json
└── .env
```

### SuperTokens Init — `main.jsx`

```js
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword';

SuperTokens.init({
  appInfo: {
    appName: 'SkilledCA',
    apiDomain: 'https://api.skilledca.in',
    apiBasePath: '/auth',
  },
  recipeList: [
    EmailPassword.init(),
    Session.init(),
  ],
});
```

### ProtectedRoute — `components/ProtectedRoute.jsx`

```jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Session from 'supertokens-web-js/recipe/session';

export default function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    Session.doesSessionExist().then(exists => {
      if (!exists) navigate('/auth');
      else setAuth(true);
    });
  }, []);

  if (!auth) return <div>Loading...</div>;
  return children;
}
```

### Routes — `App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import GSTR3B from './pages/GSTR3B';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/gstr3b" element={<ProtectedRoute><GSTR3B /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
```

### vercel.json — SPA routing fix

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Step 3 — Backend (Node.js API)

### Scaffold

```bash
mkdir skilledca-api && cd skilledca-api
npm init -y
npm install express cors supertokens-node dotenv
```

### Full Server — `index.js`

```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const supertokens = require('supertokens-node');
const Session = require('supertokens-node/recipe/session');
const EmailPassword = require('supertokens-node/recipe/emailpassword');
const { middleware, errorHandler } = require('supertokens-node/framework/express');
const { verifySession } = require('supertokens-node/recipe/session/framework/express');

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_URI,
    apiKey: process.env.SUPERTOKENS_API_KEY,
  },
  appInfo: {
    appName: 'SkilledCA',
    apiDomain: 'https://api.skilledca.in',
    websiteDomain: 'https://app.skilledca.in',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

const app = express();

app.use(cors({
  origin: 'https://app.skilledca.in',
  allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

app.use(express.json());
app.use(middleware()); // handles all /auth/* routes automatically

// ── Protected Routes ──────────────────────────────────────
app.get('/api/gstr3b/data', verifySession(), async (req, res) => {
  const userId = req.session.getUserId();
  // your GSTR-3B logic here
  res.json({ userId, message: 'GSTR-3B data loaded' });
});

app.use(errorHandler());
app.listen(3000, () => console.log('API running on port 3000'));
```

### `.env`

```
SUPERTOKENS_URI=https://your-instance.aws.supertokens.io:3567
SUPERTOKENS_API_KEY=your-api-key-here
NODE_ENV=production
```

---

## Step 4 — SuperTokens Setup

1. Go to [supertokens.com](https://supertokens.com) → Get Started (free)
2. Create app → name it **SkilledCA**
3. Copy your `connectionURI` and `apiKey`
4. Paste into your `.env` file

> **Free tier:** up to 5,000 Monthly Active Users. No credit card needed.

### What SuperTokens handles automatically

| Endpoint | What it does |
|---|---|
| `POST /auth/signup` | Register new user |
| `POST /auth/signin` | Login, creates session cookie |
| `POST /auth/signout` | Logout, destroys session |
| `POST /auth/session/refresh` | Silent token refresh |

### Add Google OAuth later (optional)

```js
const ThirdParty = require('supertokens-node/recipe/thirdparty');

// Add to recipeList:
ThirdParty.init({
  signInAndUpFeature: {
    providers: [{
      config: {
        thirdPartyId: 'google',
        clients: [{
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }]
      }
    }]
  }
})
```

---

## Step 5 — Deployment

### Frontend → Vercel

1. Push `app-skilledca/` to GitHub
2. Vercel → New Project → import repo
3. Add env var: `VITE_API_URL = https://api.skilledca.in`
4. Deploy → Project Settings → Domains → add `app.skilledca.in`
5. Copy the CNAME Vercel shows → add to DNS (Step 1)

### Backend → Railway

1. [railway.app](https://railway.app) → New Project → deploy from GitHub
2. Connect `skilledca-api` repo
3. Add env vars: `SUPERTOKENS_URI`, `SUPERTOKENS_API_KEY`, `NODE_ENV=production`
4. Settings → Custom Domain → add `api.skilledca.in`
5. Copy CNAME → add to DNS (Step 1)

---

## Step 6 — Link From skilledca.in

Update the GSTR-3B button on your existing static site:

```html
<a href="https://app.skilledca.in/gstr3b" class="btn-primary">
  Open GSTR-3B Utility
</a>
```

---

## Adding Future Utilities

Once auth is live, every new tool is just **1 frontend route + 1 backend route**:

| Utility | Frontend | Backend |
|---|---|---|
| GSTR-3B | `/gstr3b` | `GET /api/gstr3b/data` |
| Excel Consolidator | `/excel` | `POST /api/excel/merge` |
| SAP T-Code Helper | `/sap` | `GET /api/sap/tcodes` |
| Audit Checklist | `/audit` | `GET /api/audit/checklist` |
| ITR Calculator | `/itr` | `POST /api/itr/calculate` |

---

## Build Checklist

### Phase 1 — Foundation (Day 1)
- [ ] Add CNAME records for `app.` and `api.` in DNS
- [ ] Create SuperTokens free account, copy URI + API key
- [ ] Scaffold React app with Vite
- [ ] Install all dependencies

### Phase 2 — Backend (Day 1–2)
- [ ] Create Node.js + Express project
- [ ] Add SuperTokens init with your credentials
- [ ] Add test protected route: `GET /api/ping`
- [ ] Deploy to Railway, verify it responds

### Phase 3 — Frontend Auth (Day 2)
- [ ] Init SuperTokens in `main.jsx`
- [ ] Build `ProtectedRoute` component
- [ ] Set up React Router with `/auth/*` and `/gstr3b`
- [ ] Test login flow locally (`npm run dev`)
- [ ] Deploy to Vercel, add `app.skilledca.in` domain

### Phase 4 — GSTR-3B Utility (Day 3+)
- [ ] Build `GSTR3B.jsx` with your utility logic
- [ ] Add `GET /api/gstr3b` route with `verifySession()`
- [ ] Connect frontend to backend via axios (`credentials: true`)
- [ ] Update link on `skilledca.in`
- [ ] Test end-to-end: visit link → login → see utility ✅

---

## Security Notes

- SuperTokens uses **httpOnly cookies** — JS cannot read the token (XSS-safe)
- Always use `credentials: true` in axios and `cors({ credentials: true })` in Express
- Never expose `SUPERTOKENS_API_KEY` in frontend code — backend only
- `NODE_ENV=production` enables secure cookie flags
- CORS is locked to `app.skilledca.in` only

---

> *You are building something real. Ship it. 🚀*  
> `github.com/wolfrec007/skilledsite`
