# NPM commands

New project/dir:
```
npm create vite@latest
```

Start specific server:
```
npm run dev
```

# Various tips to remember

- Components must return a single child, either `<div>...</div>` or `<>...</>`.
- Child items must include a `key={...}` attribute
- `.map(item => ...)` iterates over each item
- `.reduce(` to do sums, more info below
- `import Header from './components/Header'` to import separate Components
- `export default Course` to export separate Components
- Parameter reduction via `const Note = ({ note }) => {`
- Never mutate state vars, instead copy them via _spread_ like `const copy = [...votes]` or `notes.concat(noteObject)` to add a value to an array

### Reduce

Object reduction with default _previous_ value.

```
const total = Object.keys(parts).reduce((previous, key) => {
	return previous + parts[key].exercises;
}, 0)
```
