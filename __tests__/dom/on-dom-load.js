import onDOMLoad from '../../dom/src/on-dom-load';

test('Callback is triggered only after document is loaded', () => {
  onDOMLoad(() => {
    expect(document.readyState).toBe('complete');
  });
});
