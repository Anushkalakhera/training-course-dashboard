# Training Course Dashboard

React + Vite + Tailwind CSS v4.

## Setup
```bash
npm install
npm run dev     # open http://localhost:5173
```

## Pages (React Router)
- `/` – Home (landing page)
- `/courses` – Dashboard (all assignment features)

## Components
- `Navbar` – links between pages using `NavLink`
- `useCourses` (hook) – fetches `/courses.json` with `useEffect`, manages `loading` and `error`
- `pages/Dashboard` – owns UI state, filtering and the complete action
- `App` – only defines the routes
- `SearchBar`, `CategoryFilter` – controlled inputs (value + callback)
- `CourseCard`, `ProgressBar` – display only
- `CourseDetails` – side panel with "Mark as Completed"
- `CardSkeleton`, `ErrorState` (with retry), `EmptyState` – loading / error / no-match views

## State & filtering note
Data comes from `useCourses`; `Dashboard` keeps `search`, `category`, `status`, `selectedId`.
The visible list is *derived*: `courses.filter(...)` checks title (case-insensitive),
category AND status together, so both filters work at once and update on every keystroke.
Marking complete creates a new array with `map` (immutable update) and sets that
course's progress to 100. The selected course is looked up by id, so the details
panel always shows fresh data.
