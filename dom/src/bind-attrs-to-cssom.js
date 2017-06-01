import DOMLoad from './dom-load';

const getCSSRule = (attr, className) => {
  for (const cssStylesheet of document.styleSheets) {
    for (let i = 0; i < cssStylesheet.cssRules.length; i++) {
      const rule = cssStylesheet.cssRules[i];
      if (rule.selectorText && rule.selectorText.includes(attr.selector)) {
        cssStylesheet.insertRule(`.${ className } {}`, i + 1);
        return cssStylesheet.cssRules[i + 1];
      }
    }
  }
  throw new Error(
    `The CSS rule of ${ attr.template } was not found. Make sure you imported the source CSS correctly`
  );
};

const bindAttrsToCSSOM = attrs =>
  DOMLoad.then(() =>
    attrs.map(attr => {
      const className = 'a' + Math.random().toString(32).slice(6);
      const cssRule = getCSSRule(attr, className);
      return { ...attr, className, cssRule };
    })
  );

export default bindAttrsToCSSOM;
