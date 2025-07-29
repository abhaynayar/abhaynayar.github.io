document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.createElement('button');
  themeToggleButton.id = 'theme-toggle';
  themeToggleButton.innerHTML = `
    <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  `;
  document.body.prepend(themeToggleButton);

  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  };

  // Check for saved theme in local storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.contains('dark-mode');
    const newTheme = isDarkMode ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // only switch if there's no saved theme
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
    }
  });

  function highlightCodeBlocks() {
    document.querySelectorAll('pre code').forEach((block) => {
      const code = block.textContent;
      const tokens = [
        { pattern: /(\/\/.*)/g, className: 'token-comment' },
        { pattern: /(".*?")/g, className: 'token-string' },
        { pattern: /\b(class|function|void|let|var|if|else|while|return|do|true|false|static|null)\b/g, className: 'token-keyword' },
        { pattern: /\b([A-Z][a-zA-Z0-9_]*)\b/g, className: 'token-class-name' },
        { pattern: /(?:\.)([a-zA-Z_][a-zA-Z0-9_]*)/g, className: 'token-function' },
        { pattern: /\b\d+\b/g, className: 'token-number' },
        { pattern: /([=+\-*/&|<>~^!%]+)/g, className: 'token-operator' },
        { pattern: /([,.;:(){}\[\]])/g, className: 'token-punctuation' },
      ];

      let highlightedCode = '';
      let lastIndex = 0;

      // This is a simplified tokenizer. It will find all matches and sort them by position.
      const allMatches = [];
      for (const token of tokens) {
        for (const match of code.matchAll(token.pattern)) {
          // For functions, we only want to highlight the name after the dot.
          const matchGroup = token.className === 'token-function' ? match[1] : match[0];
          const startIndex = token.className === 'token-function' ? match.index + match[0].length - matchGroup.length : match.index;
          
          allMatches.push({
            start: startIndex,
            end: startIndex + matchGroup.length,
            className: token.className,
            match: match
          });
        }
      }

      // Sort matches by start index. If they are the same, longer matches get priority.
      allMatches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

      const finalMatches = [];
      let currentPos = 0;
      for (const match of allMatches) {
        if (match.start >= currentPos) {
          finalMatches.push(match);
          currentPos = match.end;
        }
      }

      for (const { start, end, className, match } of finalMatches) {
        highlightedCode += escapeHtml(code.substring(lastIndex, start));
        const matchText = code.substring(start, end);
        highlightedCode += `<span class="${className}">${escapeHtml(matchText)}</span>`;
        lastIndex = end;
      }

      highlightedCode += escapeHtml(code.substring(lastIndex));
      block.innerHTML = highlightedCode;
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  highlightCodeBlocks();
});
