# @apply

In CSS `@apply` is an at-rule used to apply multiple style properties gathered in a variable on an element. Stylesheet uses it to determine the base element type of a component.

Unlike in standard CSS to determine a tag name on a component you write without the var `--` prefix.

### Example

```css
Title {
  @apply h1; /* This tells Stylesheet to set Title element's tag name to h1 by default */
}
```
