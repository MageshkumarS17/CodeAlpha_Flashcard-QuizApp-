import { useState, type FormEvent } from "react";

interface FlashcardFormProps {
  title: string;
  initialQuestion?: string;
  initialAnswer?: string;
  onSubmit: (question: string, answer: string) => void;
  onCancel: () => void;
}

/**
 * A form for creating or editing a flashcard.
 * Shown as a modal overlay. Used for both "Add" and "Edit" since the
 * logic (two required fields) is identical — only the labels/initial values differ.
 */
function FlashcardForm({
  title,
  initialQuestion = "",
  initialAnswer = "",
  onSubmit,
  onCancel,
}: FlashcardFormProps) {
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Both fields are required.
    if (!question.trim() || !answer.trim()) {
      setError("Please fill in both the question and the answer.");
      return;
    }

    onSubmit(question.trim(), answer.trim());
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-lg font-bold text-slate-800">{title}</h2>

        <form onSubmit={handleSubmit}>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Question
          </label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={2}
            className="mb-4 w-full rounded-lg border border-slate-300 p-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
            placeholder="e.g. What is React?"
          />

          <label className="mb-1 block text-sm font-medium text-slate-700">
            Answer
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={3}
            className="mb-4 w-full rounded-lg border border-slate-300 p-2 text-sm text-slate-800 focus:border-indigo-500 focus:outline-none"
            placeholder="e.g. A JavaScript library for building UIs."
          />

          {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FlashcardForm;
