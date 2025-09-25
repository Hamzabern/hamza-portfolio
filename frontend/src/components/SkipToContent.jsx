export default function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 px-3 py-2 rounded-lg font-medium
                 bg-[var(--accent)] text-black shadow-accent hover:shadow-accent flex items-center gap-2">
      {/* icône “écran/ordi” */}
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5l1.5 3h-6L10 17H5a2 2 0 0 1-2-2V5Z"/>
      </svg>
      Aller au contenu
    </a>
  );
}
