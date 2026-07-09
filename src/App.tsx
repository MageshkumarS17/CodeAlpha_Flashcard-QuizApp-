import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Flashcard from "./components/Flashcard";
import FlashcardForm from "./components/FlashcardForm";
import type { Flashcard as FlashcardType } from "./types/flashcard";
import { loadFlashcards, saveFlashcards } from "./utils/localStorage";

function App() {
  // All flashcards, loaded once from Local Storage (or sample data on first run).
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(() =>
    loadFlashcards()
  );
  // Index of the flashcard currently being displayed.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Whether the "Add Flashcard" form is open.
  const [isAdding, setIsAdding] = useState(false);
  // The flashcard currently being edited (null when no edit form is open).
  const [editingCard, setEditingCard] = useState<FlashcardType | null>(null);

  // Whenever flashcards change, save them back to Local Storage.
  useEffect(() => {
    saveFlashcards(flashcards);
  }, [flashcards]);

  const currentCard = flashcards[currentIndex];

  function goToPrevious() {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }

  function goToNext() {
    setCurrentIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
  }

  function handleAddCard(question: string, answer: string) {
    const newCard: FlashcardType = {
      id: Date.now().toString(),
      question,
      answer,
    };
    const updated = [...flashcards, newCard];
    setFlashcards(updated);
    // Jump to the newly added card so the user can see it right away.
    setCurrentIndex(updated.length - 1);
    setIsAdding(false);
  }

  function handleEditCard(question: string, answer: string) {
    if (!editingCard) return;

    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === editingCard.id ? { ...card, question, answer } : card
      )
    );
    setEditingCard(null);
  }

  function handleDeleteCard(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this flashcard? This cannot be undone."
    );
    if (!confirmed) return;

    const updated = flashcards.filter((card) => card.id !== id);
    setFlashcards(updated);

    // Keep the current index inside the new (shorter) list of cards.
    setCurrentIndex((prev) => Math.min(prev, updated.length - 1));
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onAddClick={() => setIsAdding(true)} />

      <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-10 sm:px-6">
        {flashcards.length === 0 ? (
          // Empty state — shown if every flashcard has been deleted.
          <div className="mt-10 text-center">
            <p className="mb-4 text-slate-500">
              You don't have any flashcards yet.
            </p>
            <button
              onClick={() => setIsAdding(true)}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              + Add your first flashcard
            </button>
          </div>
        ) : (
          <>
            {/* Position indicator, e.g. "Card 2 of 10" */}
            <p className="mb-4 text-sm font-medium text-slate-500">
              Card {currentIndex + 1} of {flashcards.length}
            </p>

            <Flashcard
              card={currentCard}
              onEdit={() => setEditingCard(currentCard)}
              onDelete={() => handleDeleteCard(currentCard.id)}
            />

            {/* Previous / Next navigation */}
            <div className="mt-6 flex w-full max-w-md justify-between gap-4">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Previous
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex === flashcards.length - 1}
                className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </main>

      {/* Add Flashcard modal */}
      {isAdding && (
        <FlashcardForm
          title="Add Flashcard"
          onSubmit={handleAddCard}
          onCancel={() => setIsAdding(false)}
        />
      )}

      {/* Edit Flashcard modal */}
      {editingCard && (
        <FlashcardForm
          title="Edit Flashcard"
          initialQuestion={editingCard.question}
          initialAnswer={editingCard.answer}
          onSubmit={handleEditCard}
          onCancel={() => setEditingCard(null)}
        />
      )}
    </div>
  );
}

export default App;
