import { useState, useEffect } from "react";

const KEY = "theme";

function readTheme() {
  try {
    return localStorage.getItem(KEY) === "dev" ? "dev" : "formal";
  } catch (e) {
    return "formal";
  }
}

// Alterna entre "formal" (por defecto) y "dev". Aplica el tema en <html> y lo
// recuerda en localStorage; si el almacenamiento falla, la página sigue igual.
export default function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      /* sin almacenamiento: el tema solo dura la sesión */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dev" ? "formal" : "dev"));
  return [theme, toggle];
}
