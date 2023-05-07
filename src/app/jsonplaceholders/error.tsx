'use client';// Error components must be Client components

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2>Json Placeholder Error Handler - Something went wrong!</h2>
      {error.message && (
        <>
          <p>Error details:</p>
          <pre className="whitespace-pre">{error.message}</pre>
        </>
      )}
      <button
        className="border px-[1em] py-[0.5em]"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
