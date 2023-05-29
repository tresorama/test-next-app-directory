import { fetchTodos } from "../../_utils/fetchers";

export default async function Page() {
  const todos = await fetchTodos({ cache: 'no-store' });

  return (
    <div className="max-h-[40vh] overflow-auto flex flex-col gap-2">
      {todos.map(todo => (
        <div key={todo.id} className="border-b pb-2 flex gap-2">
          <input type="checkbox" readOnly checked={todo.completed} />
          <span className="font-semibold">{todo.title}</span>
        </div>
      ))}
    </div>
  );
}