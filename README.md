## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 💡 [Developer Note](#developer-note)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🧪 [API Endpoints](#api-endpoints)

## <a name="introduction">🤖 Introduction</a>

This is a full-stack application built as part of the QuantumTech Full Stack Developer interview process. The goal was to implement a design provided via Figma, and expose API endpoints to manage account holder details using a PostgreSQL database.

---

## <a name="developer-note">💡 Developer Note</a>

While this project uses Prisma for convenience and type safety, I’m also very comfortable working directly with PostgreSQL using the lower-level pg library. Here's an example of a raw SQL query I might write:

```js
const result = await pool.query(
  "INSERT INTO account (first_name, last_name, occupation) VALUES ($1, $2, $3) RETURNING *",
  [firstName, lastName, occupation]
);
```

using server action is better of doing this than creating an api route in this use case

learn more about server actions [Nextjs server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#convention)

---

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js 15+ (App Router)**
- **React 19**
- **PostgreSQL**
- **Prisma** (ORM)
- **Zod** (for request and form validation validation)
- **react-query(@tanstack/react-query) and axios** for making query to the backend
- **react-table(@tanstack/react-table)** for displaying accounts in table format
- **Tailwind CSS** (for styling, if UI is included)

---

## <a name="features">🔋 Features</a>

- Build RESTful API endpoints with nextjs:
  - `POST /api/accounts` – Create account
  - `PUT /api/accounts/:id` – Update account
  - `DELETE /api/accounts/:id` – Delete account
- Validate requests using **Zod**
- Use **Prisma** for database access and schema modeling
- make sure you have postgres installed locally or you have access to an online postgres database
- Implement UI based on [Figma design](<https://www.figma.com/proto/hOLRAo0MWOShYpKVRCKVaA/Design--2-(Copy)?node-id=1-606&p=f&t=CAnfVeGkOkzSdzko-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1>)
- Github action CI to run build on push to main

---

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites / Project Requirements**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**_Note_**

- [postgres](https://www.postgresql.org/download/) make sure you have postgres installed locally or you have access to an online postgres database

**Cloning the Repository**

```bash
git clone https://github.com/junihoj/quantum-dashboard.git
cd quantum-dashboard
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
DATABASE_URL=postgresql://user:password@host:port/database-name
NEXT_PUBLIC_API_URL="/api"
```

Replace the placeholder value for the DATABASE_URL with your actual **(POSTGRES URL)** credentials.

**Set up the database:**

```bash
npx prisma db push
```

```bash
npx prisma generate
```

**Run the App**

```bash
npm run dev
```

---

## <a name="api-endpoints">🧪 API ENDPOINTS</a>

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| POST   | `/api/accounts`     | Create an account |
| GET    | `/api/accounts`     | get All accounts  |
| PUT    | `/api/accounts/:id` | Update an account |
| DELETE | `/api/accounts/:id` | Delete an account |

### ✅ Payload Example

**NOTE**
This avatar path should be a base64 text

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "occupation": "ENGINEER",
  "avatar": ""
}
```

---
