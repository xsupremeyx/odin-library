# Odin Library 📚

A simple **Library application** built using **HTML, CSS, and JavaScript** as part of *The Odin Project* curriculum.  
This project allows users to add, display, remove, and update books dynamically using a clean, Object oriented approach.

---

## Version 2.0

## 🚀 Features

- Add new books using a modal dialog
- Display books as cards
- Remove books from the library
- Toggle book read / not-read status
- Ver 1.0 Uses JavaScript objects and prototypes
- Ver 2.0 Uses Classes and Modules instead, refactoring the entire project's script
- Dynamic DOM manipulation (no page reloads)

---

## 🛠️ Built With

- **HTML5** (semantic structure, `<dialog>` element)
- **CSS3** (Grid, Flexbox, custom properties)
- **Vanilla JavaScript**
  - Constructors & prototypes
  - Event delegation
  - State-driven rendering

---

## Webpage:-
https://xsupremeyx.github.io/odin-library/

---

## 🧠 How It Works

- All books are stored in a single array (`myLibrary`)
- Each book is represented by a `Book` object
- The UI is generated dynamically from the library array
- User actions (add, remove, toggle read status) update the data first
- The UI is re-rendered after every change

---

## 📘 Book Object

Each book contains:
- `id` – unique identifier
- `title`
- `author`
- `pages`
- `read` – boolean (`true` = Read, `false` = Not Read)


