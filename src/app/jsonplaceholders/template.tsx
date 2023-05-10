import { Card } from "./_components/Card";

type Props = {
  children: React.ReactNode;
};

export default async function Template(props: Props) {
  return (
    <div className="px-4 h-full overflow-auto">
      <div className="px-8 py-12 bg-zinc-900 rounded-xl">
        <h2 className="mb-8 font-semibold text-sm">Template {Math.random()}</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="col-span-2">{props.children}</Card>
        </div>
      </div>
    </div>
  );
}
