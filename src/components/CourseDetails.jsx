import ProgressBar from "./ProgressBar";
import { getCategoryStyle } from "../categoryStyles";

// Right side panel showing course details. It is displayed when a course card is clicked. It can be closed by clicking outside the panel or on the back button.
export default function CourseDetails({ course, onClose, onComplete }) {
  const done = course.progress === 100;
  const style = getCategoryStyle(course.category);
  return (
    <div className="fixed inset-0 z-10 flex justify-end bg-ink/50" onClick={onClose}>
      <aside
        className="animate-slide-in h-full w-full max-w-md overflow-y-auto bg-cream p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()} // panel ke andar click se close na ho
      >
        <button onClick={onClose} className="mb-6 text-sm font-medium text-pine hover:underline">
          ← Back to courses
        </button>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>
          {style.icon} {course.category}
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold">{course.title}</h2>
        <p className="mt-4 text-ink/80">{course.description}</p>

        <dl className="my-6 grid grid-cols-2 gap-4 text-sm">
          <div className="rounded-xl bg-white p-3">
            <dt className="text-ink/60">Instructor</dt>
            <dd className="font-bold">{course.instructor}</dd>
          </div>
          <div className="rounded-xl bg-white p-3">
            <dt className="text-ink/60">Duration</dt>
            <dd className="font-bold">{course.duration}</dd>
          </div>
        </dl>

        <ProgressBar value={course.progress} />

        <button
          onClick={() => onComplete(course.id)}
          disabled={done}
          className="mt-6 w-full rounded-xl bg-coral py-3 font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:bg-pine"
        >
          {done ? "✓ Course Completed" : "Mark as Completed"}
        </button>
      </aside>
    </div>
  );
}
