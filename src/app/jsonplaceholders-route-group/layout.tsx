import { Card } from "./_components/Card";

type JsonPlaceholdersLayoutProps = {
  children: React.ReactNode,
  todos: React.ReactNode,
  posts: React.ReactNode,
};

export default async function JsonPlaceholdersLayout(props: JsonPlaceholdersLayoutProps) {
  return (
    <div className="px-4 h-full overflow-auto">
      <div className="px-8 py-12 bg-zinc-900 rounded-xl">
        <h2 className="mb-8 font-semibold text-4xl">JSON Placeholders</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="col-span-2">{props.children}</Card>
          <Card title="Todos">{props.todos}</Card>
          <Card title="Posts">{props.posts}</Card>
        </div>
      </div>
    </div>
  );
}