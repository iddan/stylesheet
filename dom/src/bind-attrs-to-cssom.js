import onDOMLoad from './on-dom-load';

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
        return cssStylesheet.cssRules[i + 1];
      }
    }
  }
  throw new Error(
    'A CSS rule used by a Stylesheet component was not found. Make sure you imported the source CSS correctly'
  );
}

/**
 * @typedef {Attr} BoundAttr Attr bound to a CSSOM rule
 * @property {CSSRule} cssRule will be used to apply the result of the attr declaration
 * @property {string} className cssRule's class name
 */

/**
 * @param {Attr[]} attrs
 * @returns {BoundAttr[]}
 */
const bindAttrsToCSSOM = attrs => {
  const firstStyleSheet = getFirstStyleSheet();
  const boundAttrs = attrs.map(attr => {
    const className = 'a' + Math.random().toString(32).slice(6);
    const cssRuleIndex = firstStyleSheet.cssRules.length;
    firstStyleSheet.insertRule(`${ attr.selector }.${ className } {}`, cssRuleIndex);
    const cssRule = firstStyleSheet.cssRules[cssRuleIndex];
    return { ...attr, className, cssRule };
  });
  onDOMLoad(() => {
    for (const attr of boundAttrs) {
      const cssRuleIndex = [...firstStyleSheet.cssRules].indexOf(attr.cssRule);
      firstStyleSheet.deleteRule(cssRuleIndex);
      attr.cssRule = insertCSSRule(attr.selector, attr.cssRule.cssText);
    }
  });
  return boundAttrs;
};

export default bindAttrsToCSSOM;
