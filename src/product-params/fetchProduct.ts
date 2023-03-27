export default async function fetchProduct({ queryKey }: any) {
  const data = queryKey[1];

  if (!data) return [];

  const res = await fetch(`/data/data.json`);

  if (!res.ok) {
    throw new Error(`data.json fetch not ok`);
  }
  return res.json();
}
