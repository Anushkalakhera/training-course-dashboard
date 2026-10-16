export default function ErrorState({ message, onRetry }) {
  return (
    <div className="rounded-2xl border border-coral/30 bg-coral/5 p-10 text-center">
      <p className="text-4xl">⚠️</p>
      <h3 className="font-display mt-2 text-xl font-semibold">Could not load courses</h3>
      <p className="mb-5 text-ink/70">{message}</p>
      <button
        onClick={onRetry}
        className="rounded-xl bg-coral px-6 py-2.5 font-bold text-white hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}
