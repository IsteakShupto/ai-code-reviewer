# AI-Powered Code Reviewer Web App

This is an AI-based code review web application built with React.js, Redux Toolkit, Express.js, and the Gemini SDK. It generates structured and intelligent feedback on code snippets using different animal-themed reviewer personas.

## Overview

Submit your code, choose an animal persona (e.g., cat, dog, bird), and receive a markdown-based review with structured sections such as:

- Intro
- Issues Found
- Suggestions
- Final Thoughts

The review content is generated using Google's Gemini SDK (`gemini-2.0-flash` model).

## Features

- Animal-themed AI reviewers (cat, dog, bird, etc.)
- Markdown feedback with syntax highlighting
- Intelligent responses powered by Gemini SDK
- State management using Redux Toolkit

## Tech Stack

**Frontend**

- React.js
- Redux Toolkit
- react-markdown
- rehype-highlight

**Backend**

- Node.js
- Express.js
- @google/genai
- dotenv

**AI**

- Gemini SDK (gemini-2.0-flash model)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IsteakShupto/ai-code-reviewer
cd ai-code-reviewer
```

### 2. Install dependencies

**Frontend**

```bash
cd frontend
npm install
```

**Backend**

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder and add the following:

```
PORT=Enter port number here
GEMINI_API_KEY=Enter your gemini sdk's api key
```

### 4. Start the development servers

**Backend**

```bash
cd backend
npm run dev
```

**Frontend**

```bash
cd frontend
npm run dev
```

The frontend will typically run at `http://localhost:5173` and the backend at the port you specified in the `.env` file.

## Project Structure

```
├── frontend
│   ├── src
│   │   └── components
│   │       └── MarkdownWrapper.jsx
│   └── main.jsx
├── backend
│   ├── routes
│   │   └── agentRoutes.js
│   ├── utils
│   │   └── prompt.js
│   ├── .env
│   └── index.js
```

## Contribution

Contributions are welcome. Feel free to open an issue or submit a pull request if you have ideas to improve the app or add more reviewer personas.

Let me know if you'd like a short badge section (like GitHub stars, license, or PRs welcome), or a GIF demo for the top of the README.
