import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';
import { FaGithub } from 'react-icons/fa';

const CodeEditor = ({ theme }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className={`code-editor-container ${theme}`}>
      <h2>A simple no-frills code editor with syntax highlighting.</h2>
      <div className="code-editor">
        <textarea
          value={code}
          onChange={handleChange}
          className="code-input"
          spellCheck="false"
        />
        <pre className="code-highlight">
          <code
            dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
          />
        </pre>
      </div>
      <div className="github-btn-container">
        <a href="https://github.com/SuvigyaSrivastava/CodeEditor2" target="_blank" rel="noopener noreferrer" className="github-btn">
          <FaGithub /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default CodeEditor;
