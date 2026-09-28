window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true
  },
  chtml: {
    scale: 1
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};

(function loadMathJax() {
  if (document.querySelector('script[data-ea-mathjax]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.dataset.eaMathjax = 'true';
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
  document.head.appendChild(script);
})();