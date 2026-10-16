import { Link, NavLink } from "react-router-dom";

// NavLink khud batata hai ki current page active hai ya nahi (isActive)
const linkClass = ({ isActive }) =>
  `rounded-full px-4 py-1.5 text-sm font-medium transition ${
    isActive ? "bg-pine text-white" : "text-pine hover:bg-sage"
  }`;

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-5 border-b border-pine/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-display text-xl font-bold text-pine">
          🎓 LearnHub
        </Link>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
        </div>
      </div>
    </nav>
  );
}
