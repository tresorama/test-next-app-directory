import { FileHint } from "@/ui/FileHint";

export default function Settings() {
  return (
    <div className="relative h-full bg-zinc-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-cornice" />
      <div className="absolute top-2 left-8"><FileHint fileName="app/dashboard/settings/page.tsx" /></div>
      <div className="h-full overflow-auto p-8">
        <h2 className="mt-4 font-semibold text-6xl">Settings</h2>
      </div>
    </div>
  );
}