import { createContext, useContext, useEffect, useState } from "react";
import { getSite } from "../services/projects";

const SettingsCtx = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsCtx);

export default function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    (async () => {
      try {
        const s = await getSite();
        setSettings(s);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // applique le thème global par défaut
  useEffect(()=> {
    const t = settings?.theme_default || {};
    const r = document.documentElement;
    if (t) {
      r.style.setProperty('--theme-primary', t.primary || '#6C5CE7');
      r.style.setProperty('--theme-bg', t.background || '#0B1020');
      r.style.setProperty('--theme-text', t.text || '#F8FAFC');
      r.style.setProperty('--theme-accent', t.accent || '#00D1B2');
    }
  }, [settings]);

  return (
    <SettingsCtx.Provider value={{ settings, loading }}>
      {children}
    </SettingsCtx.Provider>
  );
}
