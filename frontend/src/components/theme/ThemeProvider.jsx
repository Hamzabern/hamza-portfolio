export default function ThemeProvider({ theme, children }) {
  const t = {
    primary: theme?.primary ?? "var(--theme-primary)",
    background: theme?.background ?? "var(--theme-bg)",
    text: theme?.text ?? "var(--theme-text)",
    accent: theme?.accent ?? "var(--theme-accent)",
  };
  return (
    <div style={{
      '--theme-primary': t.primary,
      '--theme-bg': t.background,
      '--theme-text': t.text,
      '--theme-accent': t.accent,
    }}>
      {children}
    </div>
  );
}
