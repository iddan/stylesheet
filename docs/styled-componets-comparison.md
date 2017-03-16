```JSX
const C = styled.div`
  color: ${({ isSelect }) ? white : red}
`
```

```SCSS
.C {
  color: white;

  &-isSelect {
    color: red;
  }
}
```

```JSX
const C = styled.div`
  color: ${({ textColor }) => textColor || 'red'}
`;
```

```SCSS
.C {
  color: attr(textColor color, red);
}
```