// only shows the progress bar. It is used in the course card and in the course details panel.
export default function ProgressBar({ value }) {
  const done = value === 100;
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs font-medium text-ink/70">
        <span>{done ? "Completed" : "Progress"}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-sage">
        <div
          className={`h-full rounded-full transition-all duration-500 ${done ? "bg-pine" : "bg-sun"}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
