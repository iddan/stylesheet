import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import postcss from 'postcss';
import CodeMirror from 'react-codemirror';
import * as Babel from 'babel-standalone';
import mapValues from 'lodash/fp/mapValues';
import postcssPlugin from 'stylesheet/postcss';
import { preprocess } from 'stylesheet/react-dom';
import createComponent from 'stylesheet/react-dom/dist/create-css-component';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';


const BABEL_OPTIONS = {
  presets: [
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-transform-es2015-modules-commonjs'),
  ],
};

const container = document.getElementById(document.currentScript.getAttribute('data-container-id'));

const compile = text => {
  let components;
  return postcss([
    postcssPlugin({
      id: 'ID',
      onComponents: (_components) => {
        components = _components;
      },
    }),
  ]).process(text).then(result => {
    return {
      css: result.css,
      components: mapValues(preprocess, components),
    };
  });
};

const compileJS = (js) => `
  function require(id) {
    const module = MODULES[id];
    if (!module) {
      throw new Error("can't resolve the module " + id);
    }
    return module;
  }
  ${Babel.transform(js, BABEL_OPTIONS).code}
`;

class CodeExample extends Component {

  state = {
    raw: {
      css: container.querySelector('#css').innerText,
      js: container.querySelector('#js').innerText,
    },
    compiled: {
      components: {},
      css: null,
    },
  }

  componentDidMount() {
    compile(this.state.raw.css).then(compiled => {
      this.setState({ compiled });
    });
  }

  handleCSSChange = (css) => {
    this.setState(state => ({ raw: { ...state.raw, css } }));
    compile(css).then(compiled => this.setState({ compiled }));
  }

  handleJSChange = (js) => {
    this.setState(state => ({ raw: { ...state.raw, js }}));
  }

  setOutput = el => {
    this.output = el;
  }

  componentDidUpdate() {
    /* eslint-disable no-eval, no-unused-vars */
    const MODULES = {
      'react': React,
      'react-dom': ReactDOM,
      './styles.css': mapValues(createComponent, this.state.compiled.components),
    };
    const mountNode = this.output;
    eval(compileJS(this.state.raw.js));
    /* eslint-enable no-eval, no-unused-vars */
  }

  render() {
    const { raw, compiled } = this.state;
    return (
      <div className="code-example">
        <div>
          <CodeMirror onChange={ this.handleCSSChange }
                      value={ raw.css }
                      options={{ mode: 'css', lineWrapping: true }} />
          <CodeMirror onChange={ this.handleJSChange }
                      value={ raw.js }
                      options={{ mode: 'jsx', lineWrapping: true }} />
        </div>
        <div>
          <pre><code>{ compiled.css }</code></pre>
          <pre><code>{
            Object.entries(compiled.components).map(([name, properties]) => (
              `export const ${ name } = createComponent(${ JSON.stringify(properties, null, 2) });`
            )).join('\n')  
          }</code></pre>
        </div>
        <style>
          { compiled.css }
        </style>
        <div ref={ this.setOutput } />
      </div>
    );
  }
}

ReactDOM.render(<CodeExample />, container);
