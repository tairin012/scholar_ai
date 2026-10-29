# ScholarAI (React)

Only Frontend

React + Vite port of the original static HTML site.

    npm install
    npm run dev      
    npm run build


## Structure
- `src/layouts/DashboardLayout.jsx` shared sidebar + navbar + `<main>` (replaces the copy-pasted markup)
- `src/components/Sidebar.jsx`, `Navbar.jsx` collapse / active item / mobile search (ported from `cv.js`)
- `src/pages/*` one component per original HTML page
- `src/router.jsx` routes and page titles
- `src/styles/layout.css` original `css/style.css`; Tailwind + daisyUI now come from npm instead of CDNs
