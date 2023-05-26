import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  slug: string;
  id: number;
  name: string;
  background_image: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: abortController.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => abortController.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
