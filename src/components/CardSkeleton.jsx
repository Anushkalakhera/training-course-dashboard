// shows a skeleton card while the data is being fetched from the server.
export default function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-white p-5 ring-1 ring-pine/10">
      <div className="h-10 w-10 rounded-xl bg-sage" />
      <div className="mt-4 h-5 w-3/4 rounded bg-sage" />
      <div className="mt-2 h-3 w-1/2 rounded bg-sage" />
      <div className="mt-6 h-2.5 w-full rounded-full bg-sage" />
    </div>
  );
}
