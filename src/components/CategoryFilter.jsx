// Reusable pill buttons: used for filtering courses by category or level.
export default function FilterPills({ label, options, selected, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-bold tracking-wider text-ink/50 uppercase">{label}</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            selected === opt
              ? "bg-pine text-white shadow"
              : "bg-white text-pine ring-1 ring-pine/20 hover:bg-sage"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
