import { createContext, useContext, useState } from "react";
/* eslint-disable react-refresh/only-export-components */

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <AppContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <AppProvider>");
  return ctx;
}
