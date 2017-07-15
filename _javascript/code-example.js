import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import postcss from 'postcss';
import CodeMirror from 'react-codemirror';
import * as Babel from 'babel-standalone';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import mapValues from 'lodash/fp/mapValues';
import postcssPlugin from 'stylesheet/postcss';
import { preprocess } from 'stylesheet/react-dom';
import createComponent from 'stylesheet/react-dom/dist/create-css-component';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/theme/tomorrow-night-bright.css';
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
const initialCSS = document.currentScript.getAttribute('data-css');
const initialJS = document.currentScript.getAttribute('data-js');

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
    tabIndex: 0,
    raw: {
      css: initialCSS,
      js: initialJS,
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
    compile(css)
      .then(compiled => this.setState({ compiled }))
      /** @TODO handle parse errors */
      .catch(err => null);
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
    try {
      eval(compileJS(this.state.raw.js));
    } catch (err) {
      /** @TODO handle parse errors */
    }
    /* eslint-enable no-eval, no-unused-vars */
  }

  handleTabSelect = (tabIndex) => {
    this.setState({ tabIndex })
  }

  render() {
    const { raw, compiled, tabIndex } = this.state;
    return (
      <div className="code-example">
        <Tabs className="code-example__tabs" onSelect={ this.handleTabSelect }>
          <TabList>
            <Tab>Live Editor</Tab>
            <Tab>Compiled Code</Tab>
            <div className="code-example__indicator" style={{ transform: `translateX(${ tabIndex * 100 + '%' })` }} />
          </TabList>
          <TabPanel>
            <CodeMirror className="code-example__code-panel"
                        onChange={ this.handleCSSChange }
                        value={ raw.css }
                        options={{ mode: 'css', lineWrapping: true, theme: 'tomorrow-night-bright', height: 'auto', viewportMargin: Infinity }} />
            <CodeMirror className="code-example__code-panel"
                        onChange={ this.handleJSChange }
                        value={ raw.js }
                        options={{ mode: 'jsx', lineWrapping: true, theme: 'tomorrow-night-bright', height: 'auto', viewportMargin: Infinity }} />
          </TabPanel>
          <TabPanel>
            <CodeMirror className="code-example__code-panel"
                        value={ compiled.css }
                        options={{ readOnly: true, mode: 'css', lineWrapping: true, theme: 'tomorrow-night-bright', height: 'auto', viewportMargin: Infinity }} />
            <CodeMirror className="code-example__code-panel"
                        value={ Object.entries(compiled.components).map(([name, properties]) => (
  `export const ${ name } = createComponent(${ JSON.stringify(properties, null, 2) });`
  )).join('\n') }
                        options={{ readOnly: true, mode: 'jsx', lineWrapping: true, theme: 'tomorrow-night-bright', height: 'auto', viewportMargin: Infinity }} />
          </TabPanel>
        </Tabs>
        <style>
        { compiled.css }
        </style>
        <div className="code-example__output" ref={ this.setOutput } />
      </div>
    );
  }
}

ReactDOM.render(<CodeExample />, container);
