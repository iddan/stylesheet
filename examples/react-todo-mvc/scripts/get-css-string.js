// paste in the console
[...document.styleSheets]
  .map(stylesheet => [...stylesheet.cssRules].map(cssRule => cssRule.cssText).join('\n'))
  .join('\n');
