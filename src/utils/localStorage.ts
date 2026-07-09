import type { Flashcard } from "../types/flashcard";
import { sampleFlashcards } from "../data/sampleData";

// The key we use to store our flashcards inside the browser's Local Storage.
const STORAGE_KEY = "flashcards";

/**
 * Loads flashcards from Local Storage.
 * If nothing is stored yet (e.g. first time the app runs),
 * it falls back to the sample flashcards.
 */
export function loadFlashcards(): Flashcard[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored) as Flashcard[];
    }

    // No saved data yet — seed Local Storage with the sample cards
    // so the app has content the very first time it runs.
    saveFlashcards(sampleFlashcards);
    return sampleFlashcards;
  } catch (error) {
    console.error("Failed to load flashcards from Local Storage:", error);
    return sampleFlashcards;
  }
}

/**
 * Saves the given list of flashcards to Local Storage.
 */
export function saveFlashcards(flashcards: Flashcard[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  } catch (error) {
    console.error("Failed to save flashcards to Local Storage:", error);
  }
}
