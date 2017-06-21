<div align="center" href="">
    <p>
        <a href="https://npm.im/stylesheet">
            <img src="https://img.shields.io/npm/v/stylesheet.svg"
                 alt="NPM Version" />
        </a>
        <a href="https://snyk.io/test/github/500tech/stylesheet">
            <img src="https://snyk.io/test/github/500tech/stylesheet/badge.svg"
                 alt="Known Vulnerabilities"
                 data-canonical-src="https://snyk.io/test/github/500tech/stylesheet" />
        </a>
        <a href="https://travis-ci.org/500tech/stylesheet">
            <img src="https://travis-ci.org/500tech/stylesheet.svg?branch=master" />
        </a>
    </p>
    <img height="145" src="https://cdn.rawgit.com/500tech/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
    <h1>Stylesheet</h1>
    <p>Dynamic CSS for user interfaces.</p>
</div>

```bash
npm install stylesheet
```

 - **Pure:** Stylesheet uses pure standard CSS. Wrap your dynamic CSS properties with the experminatal attr() function and Stylesheet will automatically update and render them with your data. So you can develop new features in Stylesheet without rewriting existing code.
 
 - **Component-Based:** Build reusable, customizable and dynamic front-end UI elements. Since components styles is written in plain CSS you can easily define components's complex relationships, interactions and shared styles.
 
 - **Write Once, Use Anywhere:** Stylesheet can potentially work with any front-end technology stack, so you can share and transfer your styled components between platforms. Stylesheet has official bindings for React and vanilla DOM.

<h2 align="center">Usage</h2>

```CSS
Title {
  font-size: 4em;
  color: attr(textColor color);
}
```

<h3 align="center">And an integration</h3>

<div align="center">
<table align="center">
    <tr>
        <td align="center">
            <a href="https://github.com/500tech/stylesheet/tree/master/react-dom">
                <img width="50" src="https://cdn.rawgit.com/500tech/stylesheet/master/assets/react.svg" alt="React Logo" align="center">
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/500tech/stylesheet/tree/master/vanilla-dom">
                <img width="50" src="https://cdn.rawgit.com/500tech/stylesheet/master/assets/dom.svg" alt="HTML5 Logo" align="center">
            </a>
        </td>
        <td align="center">
          <a href="https://github.com/500tech/stylesheet/tree/master/loader">
              <img width="50" src="https://cdn.rawgit.com/500tech/stylesheet/master/assets/webpack.svg" alt="Webpack Logo" align="center">
          </a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/500tech/stylesheet/tree/master/react-dom">ReactDOM</a>
        </td>
        <td align="center">
            <a href="https://github.com/500tech/stylesheet/tree/master/vanilla-dom">Vanilla DOM</a>
        </td>
        <td align="center">
            <a href="https://github.com/500tech/stylesheet/tree/master/loader">Webpack</a>
        </td>
    </tr>
</table>
</div>

<h2 align="center">Prior Art and Comparison</h2>

#### CSS Modules
A methodology to import CSS tokens (e.g. class names) to JavaScript and converting them to unique identifiers.

 - Requires boilerplate code to use as components.
 - Does not provide a solution for dynamic CSS.
