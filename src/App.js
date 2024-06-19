import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import { FaSun, FaMoon, FaGithub } from 'react-icons/fa';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <button onClick={toggleTheme} className="toggle-theme-btn">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <div className="github-btn-container">
          <a href="https://github.com/SuvigyaSrivastava/CodeEditor2" target="_blank" rel="noopener noreferrer" className="github-btn">
            <FaGithub /> View on GitHub
          </a>
        </div>
      </header>
      <h1>Simple Code Editor</h1>
      <CodeEditor theme={theme} />
    </div>
  );
}

export default App;
