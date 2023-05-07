
// fake external API used to get data
const sleep = (timeInMs: number) => new Promise(res => setTimeout(res, timeInMs));
const fetchData = async () => {
  await sleep(3000);
  const aOrB: 'a' | 'b' = Math.random() > 0.5 ? 'a' : 'b';
  return aOrB === 'a' ? {
    variant: 'a',
    mail: 'a@mail.com',
    phone: "3453453432"
  } : {
    variant: 'b',
    mail: 'b@mail.com',
    phone: '352234532',
  };
};

// debug visually rerenders
const getRandomColor = () => {
  function getRandomIntInRange(min: number, max: number): number {
    // Make sure min and max are integers
    min = Math.ceil(min);
    max = Math.floor(max);

    // Generate a random number within the range (inclusive of both min and max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const h = getRandomIntInRange(0, 360);
  const s = getRandomIntInRange(0, 100);
  const l = getRandomIntInRange(0, 100);
  const a = 0.3;
  return `hsl(${h} ${s}% ${l}% / ${a})`;
};

export default async function Contact() {
  const data = await fetchData();
  const bgColor = getRandomColor();

  return (
    <div className="px-4">
      <div className="px-8 py-12 bg-zinc-900 rounded-xl">
        <div className="flex items-start gap-4">
          <h1 className="mb-8 font-semibold text-4xl">Contact Us</h1>
          <span className="p-2 font-medium text-xs rounded-xl" style={{ backgroundColor: bgColor }} >Random Color on every rerender</span>
        </div>
        <ul className="flex flex-col gap-4">
          {Object.entries(data).map(([key, value], index) => (
            <li key={index} className="flex gap-1">
              <span className="font-semibold">{key}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}