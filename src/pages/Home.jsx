import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

// Features array: card with icon, title and text. It is displayed on the home page.
const features = [
  { icon: "🔍", title: "Find fast", text: "Search by title and filter by category or status, all at the same time." },
  { icon: "📊", title: "See progress", text: "Every course shows a clear percentage and a progress bar." },
  { icon: "✅", title: "Finish courses", text: "Open a course, read the details and mark it completed in one click." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-bold tracking-widest text-coral uppercase">Training Portal</p>
          <h1 className="font-display mt-3 text-4xl leading-tight font-bold sm:text-6xl">
            Learn. Track.{" "}
            <span className="rounded-lg bg-sun/40 px-2">Finish.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            One calm place to see all your training courses, check how far you
            have come and finish what you started.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/courses"
              className="rounded-xl bg-pine px-7 py-3 font-bold text-white shadow-lg transition hover:bg-pine-dark"
            >
              Open Dashboard →
            </Link>
          </div>
        </div>

        {/* Sirf decoration: two tilted sample cards */}
        <div className="relative mx-auto h-72 w-full max-w-sm">
          <div className="absolute top-0 right-0 w-64 -rotate-6 rounded-2xl bg-sage p-5 shadow-md">
            <p className="font-display font-semibold">Git & GitHub Workflow</p>
            <div className="mt-4"><ProgressBar value={90} /></div>
          </div>
          <div className="absolute bottom-0 left-0 w-72 rotate-3 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-pine/10">
            <span className="text-2xl">💻</span>
            <p className="font-display mt-2 text-lg font-semibold">React Fundamentals</p>
            <p className="mb-4 text-sm text-ink/60">Aarav Mehta · 6 hrs</p>
            <ProgressBar value={70} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-pine/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-2xl">
                {f.icon}
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-ink/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom call-to-action */}
      <section className="bg-pine py-14 text-center text-white">
        <h2 className="font-display text-3xl font-bold">Ready to continue learning?</h2>
        <Link
          to="/courses"
          className="mt-6 inline-block rounded-xl bg-sun px-7 py-3 font-bold text-ink transition hover:brightness-110"
        >
          Go to my courses
        </Link>
      </section>
    </div>
  );
}
