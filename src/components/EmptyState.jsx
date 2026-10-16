export default function EmptyState() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-pine/30 p-12 text-center">
      <p className="text-4xl">🔍</p>
      <h3 className="font-display mt-2 text-xl font-semibold">No courses found</h3>
      <p className="text-ink/70">Try a different search word or choose another category.</p>
    </div>
  );
}
