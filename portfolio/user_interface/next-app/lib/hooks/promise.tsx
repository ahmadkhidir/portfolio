"use client";

import { useEffect, useState } from "react";

interface UsePromiseReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  refetch: (...args: any[]) => Promise<void>;
}

type FetchMode = "auto" | "manual";

function usePromise<T>(
  promiseFn?: (...args: any[]) => Promise<T>,
  defaultArgs: any[] = [],
  mode: FetchMode = "auto"
): UsePromiseReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (args: any[] = defaultArgs) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await promiseFn?.(...args);
      setData(result || null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (mode === "auto") {
      fetchData();
    }
  }, []);

  return { data, isLoading, error, refetch: fetchData };
}

export default usePromise;