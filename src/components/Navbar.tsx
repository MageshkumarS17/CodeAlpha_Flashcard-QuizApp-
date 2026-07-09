interface NavbarProps {
  onAddClick: () => void;
}

/**
 * Simple top bar showing the app name and a button to add a new flashcard.
 */
function Navbar({ onAddClick }: NavbarProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
        <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
          📚 Flashcard Quiz
        </h1>
        <button
          onClick={onAddClick}
          className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 sm:px-4 sm:text-base"
        >
          + Add Flashcard
        </button>
      </div>
    </header>
  );
}

export default Navbar;
