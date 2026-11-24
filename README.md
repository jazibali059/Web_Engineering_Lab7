# Web Engineering Lab 07 – Next.js

This project implements the six tasks in the supplied **Lab 07: Next.js Server
Components, Routing and Server Actions** statement.

## Requirements

- Node.js LTS
- npm
- VS Code (recommended)

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Routes

- `/` – Home page with the Hello, World! heading.
- `/office-hours` – Server-rendered office-hours table loaded from `data/slots.json`,
  with a small interactive Client Component for Select/Cancel.
- `/feedback` – Feedback form handled by a Server Action and a list of saved messages.

## Production check

```bash
npm run build
npm start
```

Open `/feedback`, submit a message, and confirm that it appears in the list.
The Server Action calls `revalidatePath("/feedback")` after saving.

## Lab task mapping

1. **Create app and first page:** `next.config.ts`, `app/page.tsx`, and global CSS.
2. **Layout and routes:** `app/layout.tsx`, `app/office-hours/page.tsx`,
   and `app/feedback/page.tsx`.
3. **Load server data:** `data/slots.json` and `lib/slots.ts`.
4. **Client Component:** `app/office-hours/BookButton.tsx` begins with `"use client"`.
5. **Server Action:** `app/feedback/actions.ts` begins with `"use server"` and
   stores messages through `lib/feedback.ts`.
6. **Refresh after saving:** `revalidatePath("/feedback")` is called after saving.

## Important notes

- The Lab 07 statement asks students to reuse the stylesheet from Lab 5. That
  stylesheet was not included with the supplied file, so this project includes
  a clean, accessible replacement in `app/globals.css`.
- `data/feedback.json` is created automatically when the first feedback is
  submitted. It is excluded from Git because it contains user-submitted data.
- The lab statement asks students to test with JavaScript disabled, inspect
  View Source, capture a screenshot of the Feedback page, and commit/push their
  own work. These environment-specific actions still need to be performed on
  the student's computer.
- Feedback JSON file storage is intended for this local lab exercise, not
  production deployment with multiple server instances.
