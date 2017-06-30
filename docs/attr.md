### attr()

In CSS the `attr()` function is used to bind a DOM element attribute value to a css property value. Currently browsers only support using it to bind text values, Stylesheet enables using `attr()` to bind any kind of value to any property.

Stylesheet makes sure every time you update the value of the bounded attribute the CSS property's value will be updated.

### Example

*CSS: Title.css*
```CSS
Title {
  color: attr(textColor color, blue);
}
```

*Vanilla DOM*
```js
import { Title } from './Title.css';

const title = Title.create();

title.textColor = 'yellow';
```

*React*
```jsx
import { Title } from './Title.css';

<Title textColor="yellow" />;
```
