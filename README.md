# Flashcard Quiz App

A simple, clean, and responsive flashcard study app built with React, TypeScript, Vite, and Tailwind CSS. All data is stored in the browser's Local Storage — there is no backend.

## Features

- View flashcards one at a time, with the question shown first and a "Show Answer" button to reveal the answer
- Navigate between cards with **Previous** / **Next** buttons and a "Card X of Y" position indicator
- **Add** new flashcards (question + answer, both required)
- **Edit** existing flashcards
- **Delete** flashcards, with a confirmation prompt
- Data persists across page refreshes using Local Storage
- Comes pre-loaded with 8 sample flashcards the first time you run it
- Responsive, mobile-friendly layout

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
│
├── components/
│   ├── Flashcard.tsx       # Displays a single card (question, answer, edit/delete)
│   ├── FlashcardForm.tsx   # Reusable form modal used for both Add and Edit
│   └── Navbar.tsx          # Top bar with app title and "Add Flashcard" button
│
├── data/
│   └── sampleData.ts       # Sample flashcards shown on first run
│
├── types/
│   └── flashcard.ts        # Flashcard TypeScript type
│
├── utils/
│   └── localStorage.ts     # Load/save helpers for Local Storage
│
├── App.tsx                 # Main app logic: state, navigation, CRUD
└── main.tsx                # App entry point
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Browser Local Storage (no backend)
