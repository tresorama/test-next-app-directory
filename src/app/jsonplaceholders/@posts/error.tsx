// Error components must be Client components
'use client';
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { FileHint } from "@/ui/FileHint";


export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter()
  const handleReset = () => {
    // Attempt to recover by trying to re-render the segment
    router.refresh(); // used useRouter() hook
    startTransition(reset);
  }

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
      <button className="border px-[1em] py-[0.5em]" onClick={handleReset}>
        Reload Posts
      </button>
    </div>
  );
}
