import DOMLoad from './dom-load';

function getFirstStyleSheet() {
  const [firstStyleSheet] = document.styleSheets;
  if (firstStyleSheet) {
    return firstStyleSheet;
  } else {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    document.head.appendChild(styleElement);
    return styleElement.sheet;
  }
}

function insertCSSRule(selector, rule) {
  for (const cssStylesheet of document.styleSheets) {
    for (let i = 0; i < cssStylesheet.cssRules.length; i++) {
      const cssRule = cssStylesheet.cssRules[i];
      if (cssRule.selectorText && cssRule.selectorText.includes(selector)) {
        cssStylesheet.insertRule(rule, i + 1);
        return cssStylesheet.rules[i + 1];
      }
    }
  }
  throw new Error(
    'A CSS rule used by a Stylesheet component was not found. Make sure you imported the source CSS correctly'
  );
}

const bindAttrsToCSSOM = attrs => {
  const firstStyleSheet = getFirstStyleSheet();
  const boundAttrs = attrs.map(attr => {
    const className = 'a' + Math.random().toString(32).slice(6);
    const cssRuleIndex = firstStyleSheet.cssRules.length;
    firstStyleSheet.insertRule(`.${ className } {}`, cssRuleIndex);
    const cssRule = firstStyleSheet.cssRules[cssRuleIndex];
    return { ...attr, className, cssRule };
  });
  DOMLoad.then(() => {
    for (const attr of boundAttrs) {
      const cssRuleIndex = [...firstStyleSheet.cssRules].indexOf(attr.cssRule);
      firstStyleSheet.removeRule(cssRuleIndex);
      attr.cssRule = insertCSSRule(attr.selector, attr.cssRule.cssText);
    }
  });
  return boundAttrs;
};

export default bindAttrsToCSSOM;
