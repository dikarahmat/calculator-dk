# Calculator_ 

> DK Project #4 | Built with React + Vite

A clean, minimal calculator with a dark terminal aesthetic. Built as part of a 30-day frontend project challenge.

🔗 **Live Demo:** [calculator-dk.vercel.app](https://calculator-dk.vercel.app/)

---

## Features

- ➕➖✖️➗ Basic arithmetic operations
- % percentage and +/- toggle
- ⌫ Backspace to delete last digit
- 🖥️ Expression display (shows full calculation)
- ⌨️ Full keyboard support
- 📐 Auto font resize for long numbers

---

## Tech Stack

- **React** — UI & state management
- **Vite** — build tool
- **CSS** — custom styling, no UI library
- **Vercel** — deployment

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/dikarahmat/calculator-dk.git

# Install dependencies
cd calculator-dk
npm install

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  components/
    Display.jsx     # Shows current number & expression
    Keypad.jsx      # Grid of calculator buttons
  App.jsx           # Main logic & state management
  App.css           # Global styles
```

---

## What I Learned

- Managing complex state with multiple `useState`
- Handling keyboard events with `useEffect`
- Conditional styling based on active state
- Building reusable button components with props
- Floating point precision handling in JavaScript

---

Made by [@dikarahmat](https://github.com/dikarahmat)
