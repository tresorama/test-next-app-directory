import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full overflow-auto flex">
      <span className="m-auto underline text-6xl">
        Go <Link href="/jsonplaceholders-route-group">here</Link>
      </span>
    </div>
  );
}
