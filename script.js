document.addEventListener('DOMContentLoaded', () => {
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

  // Apply theme based on system preference:
  const applySystemTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  };

  // Initial theme application:
  applySystemTheme();

  // Listen for changes in system preference:
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
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
