'use client'; // Error components must be Client components
import { FileHint } from "@/ui/FileHint";

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-teal-800 rounded-xl p-2 flex flex-col gap-4">
      <div className="self-end">
        <FileHint fileName="app/jsonplaceholders/@todos/error.tsx" />
      </div>
      <div>
        <h2 className="text-xs">Todos Error Handler - Something went wrong!</h2>
        <p className="text-xs">Error details:</p>
        <pre className="whitespace-pre">{error.message}</pre>
      </div>
      <button className="border px-[1em] py-[0.5em]" onClick={() => reset()}>
        Reload Todos
      </button>
    </div>
  );
}
