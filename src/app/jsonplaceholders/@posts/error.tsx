'use client';// Error components must be Client components

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-blue-800 rounded-xl p-2 flex flex-col gap-4">
      <div className="self-end">
        <FileHint fileName="app/jsonplaceholders/@posts/error.tsx" />
      </div>
      <div>
        <h2>Posts Error Handler - Something went wrong!</h2>
        <p>Error details:</p>
        <pre className="whitespace-pre">{error.message}</pre>
      </div>
      <button className="border px-[1em] py-[0.5em]" onClick={() => reset()}>
        Reload Posts
      </button>
    </div>
  );
}
