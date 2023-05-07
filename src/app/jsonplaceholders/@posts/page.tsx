import { fetchPosts } from "../_utils/fetchers";

export default async function Page() {
  const posts = await fetchPosts();

  return (
    <div className="max-h-[40vh] overflow-auto flex flex-col gap-2">
      {posts.map(post => (
        <div key={post.id} className="border-b pb-2">
          <span className="font-semibold">{post.title}</span>
        </div>
      ))}
    </div>
  );
}