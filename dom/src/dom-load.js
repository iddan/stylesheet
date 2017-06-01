const DOMLoad = new Promise(resolve => {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    const onDOMLoad = () => {
      removeEventListener('load', onDOMLoad);
      resolve();
    };
    addEventListener('load', onDOMLoad);
  }
});

export default DOMLoad;
