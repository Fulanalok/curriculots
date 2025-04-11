// src/components/DarkModeToggle.tsx
import React from "react";

const DarkModeToggle: React.FC = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 mb-4 bg-gray-200 dark:bg-gray-700 rounded text-sm">
      Alternar Tema
    </button>
  );
};

export default DarkModeToggle;
