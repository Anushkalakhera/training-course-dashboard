// Controlled input: value comes from the parent component's state.
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search courses by title..."
      className="w-full rounded-xl border border-pine/20 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/20"
    />
  );
}
