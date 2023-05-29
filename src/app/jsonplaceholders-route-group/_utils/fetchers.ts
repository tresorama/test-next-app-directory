const sleep = (timeInMs: number) => new Promise(res => setTimeout(res, timeInMs));

// API fetchers
type FetchOptions = Parameters<typeof fetch>[1];
const createFetcher = <Data extends unknown>(url: string) => {
  return async (fetchOptions?: FetchOptions) => {
    await sleep(4000);
    const response = await fetch(url, fetchOptions);
    throw new Error('Forced error'); // forced error
    //if (Math.random() > 0.5) throw new Error('50/50 chance to fail and it\'s failed!'); // this will render "error.tsx" component
    if (!response.ok) throw new Error('Failed to fetch'); // this will render "error.tsx" component
    const data = await response.json();
    return data as Data;
  };
};

// JSON Placeholder fetchers
export const fetchPosts = createFetcher<{
  userId: number;
  id: number,
  title: string,
  body: string,
}[]>('https://jsonplaceholder.typicode.com/posts');
export const fetchTodos = createFetcher<{
  userId: number;
  id: number,
  title: string,
  completed: boolean,
}[]>('https://jsonplaceholder.typicode.com/todos');

