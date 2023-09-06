import { useState, useEffect } from 'react';

export function useDataFetching<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
        setIsLoading(false);
      } catch (err:any) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  console.log(data)

  return { data, isLoading, error };
}
