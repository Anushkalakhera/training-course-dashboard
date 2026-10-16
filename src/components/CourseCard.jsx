import ProgressBar from "./ProgressBar";
import { getCategoryStyle } from "../categoryStyles";

export default function CourseCard({ course, onOpen }) {
  const style = getCategoryStyle(course.category);
  const done = course.progress === 100;

  return (
    <article
      onClick={() => onOpen(course.id)}
      className="group cursor-pointer rounded-2xl bg-white p-5 shadow-sm ring-1 ring-pine/10 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-2xl">
          {style.icon}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
          {course.category}
        </span>
      </div>

      <h3 className="font-display mt-4 text-xl font-semibold group-hover:text-pine">
        {course.title}
      </h3>
      <p className="mt-1 mb-5 text-sm text-ink/60">
        {course.instructor} · {course.duration}
      </p>

      <ProgressBar value={course.progress} />
      {done && <p className="mt-3 text-xs font-bold text-pine">✓ Completed</p>}
    </article>
  );
}
