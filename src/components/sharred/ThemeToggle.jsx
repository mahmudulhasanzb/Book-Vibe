import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <BsSun className="text-lg" />
      ) : (
        <BsMoon className="text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;