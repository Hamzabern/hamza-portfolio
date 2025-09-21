export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-8" role="status" aria-live="polite" aria-label="Chargement">
      <div className="h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Chargement…</span>
    </div>
  );
}
