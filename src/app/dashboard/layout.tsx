import { FileHint } from "@/ui/FileHint";
import { NavItem } from "./_components/NavItem";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
  const repeat = (times: number) => new Array(times).fill('');

  return (
    <div className="h-full px-4 pb-4 grid grid-cols-4 gap-4 ">
      {/* Sidebar */}
      <div className="relative col-span-1 min-h-0 h-full bg-zinc-900 rounded-xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-cornice" />
        <div className="h-full overflow-auto px-4 py-8 relative">
          <p className="absolute right-2 top-2">
            <FileHint fileName="app/dashboard/layout.tsx" />
          </p>
          <h1 className="mb-4 px-4 font-semibold text-2xl">Dashboard</h1>
          <ul>
            {repeat(2).map((_, index) => (
              <NavItem key={index} name={`Item ${index + 1}`} />
            ))}
            <NavItem name="Home" href="/dashboard" />
            <NavItem name="Settings" href="/dashboard/settings" />
            <NavItem name="Analytics" href="/dashboard/analytics" />
            {repeat(8).map((_, index) => (
              <NavItem key={index} name={`Item ${index + 1 + 5}`} />
            ))}
          </ul>
        </div>
      </div>
      {/* Main */}
      <div className=" col-span-3 min-h-0 h-full">
        {children}
      </div>
    </div>
  );
}