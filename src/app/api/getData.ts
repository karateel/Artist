export async function getData(url: string, index:number, key:string) {
  const res = await fetch(url, {cache: 'reload'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data[index][key]
}
