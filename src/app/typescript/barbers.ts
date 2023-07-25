export async function getBarbers(url: string) {
  const res = await fetch(url, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
