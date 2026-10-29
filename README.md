# ScholarAI (React)

React + Vite port of the original static HTML site.

    npm install
    npm run dev      # http://localhost:5173
    npm run build

## Routes
- `/` landing, `/login` (pick Student / Teacher / Admin; no backend yet, any submit signs in)
- `/:role` where role = `student | teacher | admin`
  - index (dashboard), `prepmate`, `prepmate/chat`, `image-to-text`, `pdf-to-audio`,
    `plagiarism-checker`, `cv-generator`, `profile`, `course`, `assignments`, `live-class`,
    `announcement` and `participants` (teacher pages)

## Structure
- `src/layouts/DashboardLayout.jsx` shared sidebar + navbar + `<main>` (replaces the copy-pasted markup)
- `src/components/Sidebar.jsx`, `Navbar.jsx` collapse / active item / mobile search (ported from `cv.js`)
- `src/pages/*` one component per original HTML page
- `src/router.jsx` routes and page titles
- `src/styles/layout.css` original `css/style.css`; Tailwind + daisyUI now come from npm instead of CDNs
