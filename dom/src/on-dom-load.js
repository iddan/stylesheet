export default function onDOMLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    const handleDOMLoad = () => {
      removeEventListener('load', handleDOMLoad);
      callback();
    };
    addEventListener('load', handleDOMLoad);
  }
}
