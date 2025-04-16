import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Inicializa com base no localStorage ou na preferência do sistema
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Aplica a classe "dark" ao <html> com base no estado
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-300"
      aria-label={
        isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
      }>
      {isDarkMode ? <>☀️ Modo Claro</> : <>🌙 Modo Escuro</>}
    </button>
  );
};

export default DarkModeToggle;
