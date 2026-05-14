# NPM commands

New project/dir:
```
npm create vite@latest
```

Start specific server:
```
npm run dev
```

JSON server:
```
npx json-server --port 3001 db.json
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

# Default main

```
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

```

# Building backend and frontend together

```
cd part3/phonebook
npm run build:ui
npm run dev
```

# Deploying

```
npm run deploy:full
```

# Useful links

- https://fullstackopen.com/en/
- http://localhost:5173/?
- https://studies.cs.helsinki.fi/stats/courses/fullstackopen/submissions
- https://github.com/swierczek/fullstackopen

# Hosted environments

## Notes
- https://fullstackopen-lfw7.onrender.com/
- https://fullstackopen-lfw7.onrender.com/api/notes

## Phonebook
- https://fullstackopen-phonebook-1ic3.onrender.com/
- https://fullstackopen-phonebook-1ic3.onrender.com/api/persons
