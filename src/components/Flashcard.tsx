import { useState, useEffect } from "react";
import type { Flashcard as FlashcardType } from "../types/flashcard";

interface FlashcardProps {
  card: FlashcardType;
  onEdit: () => void;
  onDelete: () => void;
}

/**
 * Displays a single flashcard: the question, a button to reveal the answer,
 * and edit/delete controls for that card.
 */
function Flashcard({ card, onEdit, onDelete }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Hide the answer again whenever a different card is shown.
  useEffect(() => {
    setShowAnswer(false);
  }, [card.id]);

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      {/* Question */}
      <p className="mb-1 text-sm font-medium uppercase tracking-wide text-indigo-500">
        Question
      </p>
      <p className="mb-6 text-lg font-semibold text-slate-800 sm:text-xl">
        {card.question}
      </p>

      {/* Answer area */}
      {showAnswer ? (
        <div className="mb-6 rounded-xl bg-indigo-50 p-4">
          <p className="mb-1 text-sm font-medium uppercase tracking-wide text-indigo-500">
            Answer
          </p>
          <p className="text-base text-slate-700 sm:text-lg">{card.answer}</p>
        </div>
      ) : (
        <button
          onClick={() => setShowAnswer(true)}
          className="mb-6 w-full rounded-xl border-2 border-dashed border-indigo-300 py-3 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50 sm:text-base"
        >
          Show Answer
        </button>
      )}

      {/* Edit / Delete controls */}
      <div className="flex gap-3 border-t border-slate-100 pt-4">
        <button
          onClick={onEdit}
          className="flex-1 rounded-lg bg-slate-100 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 rounded-lg bg-red-50 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
