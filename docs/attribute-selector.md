# Attribute Selector

In CSS the attribute selector is used to specify style for elements having an attribute with matching value. When using with Stylesheet component's attribute selectors are converted to unique class names for performance and allowing non-standards attributes without forcing a prefix.

### Example

*CSS: Title.css*
```css
Title[highlighted] {
  background: yellow;
}
```

*Vanilla DOM*
```js
import { Title } from './title.css';

const title = Title.create();

title.highlighted = true;
```

*React*
```jsx
import { Title } from './title.css';

<Title highlighted />;
```
