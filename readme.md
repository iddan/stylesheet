<div align="center" href="">
    <p>
        <a href="https://npm.im/stylesheet">
            <img src="https://img.shields.io/npm/v/stylesheet.svg"
                 alt="NPM Version" />
        </a>
        <a href="https://snyk.io/test/github/iddan/stylesheet">
            <img src="https://snyk.io/test/npm/stylesheet/badge.svg"
                 alt="Known Vulnerabilities"
                 data-canonical-src="https://snyk.io/test/npm/stylesheet"/>
        </a>
        <a href="https://travis-ci.org/iddan/stylesheet">
            <img src="https://travis-ci.org/iddan/stylesheet.svg?branch=master" />
        </a>
        <a href='https://coveralls.io/github/iddan/stylesheet?branch=master'>
            <img src='https://coveralls.io/repos/github/iddan/stylesheet/badge.svg?branch=master' 
                 alt='Coverage Status' />
        </a>
        <a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Fstylesheet?ref=badge_shield"
           alt="FOSSA Status">
            <img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fiddan%2Fstylesheet.svg?type=shield" />
        </a>
    </p>
    <img height="145" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/stylesheet.svg" alt="Stylesheet Logo" align="center" />
    <h1>Stylesheet</h1>
    <p>Dynamic CSS for user interfaces.</p>
</div>

```bash
npm install stylesheet
```

 - **Pure:** Stylesheet uses pure standard CSS. Wrap your dynamic CSS properties with an [attr() function][attr] or [attribute selector] and Stylesheet will automatically update and render them with your data. So you can develop new features in Stylesheet without rewriting existing code.
 
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
            <a href="https://github.com/iddan/stylesheet/tree/master/react-dom">
                <img width="50" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/react.svg" alt="React Logo" align="center">
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/iddan/stylesheet/tree/master/vanilla-dom">
                <img width="50" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/dom.svg" alt="HTML5 Logo" align="center">
            </a>
        </td>
        <td align="center">
          <a href="https://github.com/iddan/stylesheet/tree/master/loader">
              <img width="50" src="https://cdn.rawgit.com/iddan/stylesheet/master/assets/webpack.svg" alt="Webpack Logo" align="center">
          </a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://github.com/iddan/stylesheet/tree/master/react-dom">ReactDOM</a>
        </td>
        <td align="center">
            <a href="https://github.com/iddan/stylesheet/tree/master/vanilla-dom">Vanilla DOM</a>
        </td>
        <td align="center">
            <a href="https://github.com/iddan/stylesheet/tree/master/loader">Webpack</a>
        </td>
    </tr>
</table>
</div>

<div align="center">
    <p>
        <a href="https://github.com/iddan/stylesheet/wiki/Bindings">
            Learn more about integrations
        </a>
    </p>
</div>

<h2 align="center">Prior Art and Comparison</h2>

#### CSS Modules
A methodology to import CSS tokens (e.g. class names) to JavaScript and converting them to unique identifiers.

 - Requires boilerplate code to use as components.
 - Does not provide a solution for dynamic CSS.

 [attr]: https://github.com/iddan/stylesheet/wiki/attr()
 [attribute selector]: https://github.com/iddan/stylesheet/wiki/Attribute-Selector
