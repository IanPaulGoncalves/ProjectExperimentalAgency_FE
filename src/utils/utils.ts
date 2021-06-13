export default function getChair(count: number) {
  const chair: string[] = [];
  const startChair = 1;
  const endChair = count;
  for (let i = startChair; i <= endChair; i++) {
    chair.push(String(i));
  }
  return chair;
}
