import { useState } from "react";
import useCourses from "../hooks/useCourses";
import SearchBar from "../components/SearchBar";
import FilterPills from "../components/CategoryFilter";
import CourseCard from "../components/CourseCard";
import CourseDetails from "../components/CourseDetails";
import CardSkeleton from "../components/CardSkeleton";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";

const STATUS_OPTIONS = ["All", "In Progress", "Completed"];

export default function Dashboard() {
  // ---- DATA (fetch, loading, error hook se aate hain) ----
  const { courses, setCourses, loading, error, loadCourses } = useCourses();

  // ---- UI STATE ----
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  // ---- DERIVED DATA ----
  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  // all the three filters (search, category, status) are applied to the courses array to get the filteredCourses array. The filter method is used to create a new array that contains only the courses that match the search term, selected category, and selected status.
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || course.category === category;
    const isDone = course.progress === 100;
    const matchesStatus =
      status === "All" || (status === "Completed" ? isDone : !isDone);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const selectedCourse = courses.find((c) => c.id === selectedId);
  const completedCount = courses.filter((c) => c.progress === 100).length;
  const averageProgress = courses.length
    ? Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length)
    : 0;

  // ---- ACTION: immutable update ----
  function markCompleted(id) {
    setCourses(courses.map((c) => (c.id === id ? { ...c, progress: 100 } : c)));
  }

  // ---- What to display on the page (loading -> error -> empty -> list) ----
  let content;
  if (loading) {
    content = (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => <CardSkeleton key={n} />)}
      </div>
    );
  } else if (error) {
    content = <ErrorState message={error} onRetry={loadCourses} />;
  } else if (filteredCourses.length === 0) {
    content = <EmptyState />;
  } else {
    content = (
      <>
        <p className="mb-4 text-sm text-ink/60">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onOpen={setSelectedId} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="bg-pine text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <p className="text-sm font-medium tracking-widest text-sun uppercase">Learning Hub</p>
          <h1 className="font-display mt-2 text-3xl font-bold sm:text-5xl">
            Your Training Dashboard
          </h1>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">
            <Stat label="Courses" value={loading ? "–" : courses.length} />
            <Stat label="Completed" value={loading ? "–" : completedCount} />
            <Stat label="Avg. progress" value={loading ? "–" : `${averageProgress}%`} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <FilterPills label="Category" options={categories} selected={category} onSelect={setCategory} />
          <FilterPills label="Status" options={STATUS_OPTIONS} selected={status} onSelect={setStatus} />
        </div>
        {content}
      </main>

      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedId(null)}
          onComplete={markCompleted}
        />
      )}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/10 p-3">
      <p className="font-display text-2xl font-bold">{value}</p>
      <p className="text-xs text-white/70">{label}</p>
    </div>
  );
}
