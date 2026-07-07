# Deploying TradeX on Vercel

This repo is configured as a single Vercel project:

- `frontend` is served at `/`
- `kite` is built into `frontend/build/kite` and served at `/kite`
- `BackEnd` is exposed as serverless API routes at `/api/*`

## Vercel settings

When importing the repository in Vercel, keep the root directory as the repository root.

- Build command: `npm run vercel-build`
- Output directory: `frontend/build`
- Install command: default

The root `vercel.json` already sets the build command, output directory, and SPA rewrites.

## Environment variables

Add this variable in Vercel Project Settings:

```text
MONGO_URL=your_mongodb_connection_string
```

Optional dashboard override:

```text
REACT_APP_API_BASE_URL=/api
```

The default API base URL is already `/api`, so the optional variable is only needed if the dashboard should call a different backend.

## Local development

Run each app in a separate terminal:

```text
npm run start:backend
npm run start:frontend
npm run start:kite
```

For local dashboard API calls, create `kite/.env` with:

```text
REACT_APP_API_BASE_URL=http://localhost:3002
```
