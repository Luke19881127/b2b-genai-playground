# 📘 B2B GenAI Adoption Playground — Starter App

A full-stack GenAI app designed for B2B companies selling products or services. Includes features like discovery question generation, pain point library, storytelling, active listening coaching, and creative prompt generation — styled in black, gold, white, and dark green.

---

## 🔧 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **AI Integration**: OpenAI GPT-4 API

---

## 🚀 Deployment Instructions

### 1. Clone the Repo

```bash
git clone https://your-repo-url-here
cd b2b-genai-playground
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
OPENAI_API_KEY=your_openai_key_here
```

Start the backend server:

```bash
node server.js
```

> The server will run at `http://localhost:5000`

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

> Make sure Tailwind CSS is configured in your project (`tailwind.config.js` and `index.css` with Tailwind directives already provided).

Start the React development server:

```bash
npm start
```

> App runs at `http://localhost:3000` and connects to the backend.

---

## 🧪 Testing the Playground

- Use the **Free Prompt Builder** to write a sales-related GenAI prompt.
- Click **Generate** to see AI output from the backend.
- Tailored for B2B sales reps and marketers.

---

## 🖼️ Preview Screenshot

> Add your screenshot image here for marketing purposes.

---

## 💡 Customization Ideas

- Integrate authentication (e.g., Auth0 or Firebase)
- Connect to a database for storing prompts/results
- Add a prompt library with categorized use cases
- Add user roles (Sales Rep, Manager, Trainer)

---

## 📄 License

MIT — Free for commercial and non-commercial use.
