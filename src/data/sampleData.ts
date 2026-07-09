import type { Flashcard } from "../types/flashcard";

// These sample cards are loaded automatically the first time the app runs,
// so the user has something to study right away.
export const sampleFlashcards: Flashcard[] = [
  {
    id: "1",
    question: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using reusable components.",
  },
  {
    id: "2",
    question: "What is HTML?",
    answer:
      "HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.",
  },
  {
    id: "3",
    question: "What is CSS?",
    answer:
      "CSS (Cascading Style Sheets) is used to style and lay out HTML elements, such as colors, fonts, and spacing.",
  },
  {
    id: "4",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.",
  },
  {
    id: "5",
    question: "What is TypeScript?",
    answer:
      "TypeScript is a superset of JavaScript that adds static typing, helping catch errors during development.",
  },
  {
    id: "6",
    question: "What is a component in React?",
    answer:
      "A component is a reusable, independent piece of UI that can accept inputs (props) and return JSX.",
  },
  {
    id: "7",
    question: "What is Local Storage?",
    answer:
      "Local Storage is a browser feature that lets web apps store data as key-value pairs that persist after a page refresh.",
  },
  {
    id: "8",
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that lets you style elements using predefined classes directly in your markup.",
  },
];
