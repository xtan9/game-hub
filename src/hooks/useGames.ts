import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: String;
}
interface GamesData {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    apiClient
      .get<GamesData>("/games", { signal: abortController.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => abortController.abort();
  }, []);
  return { games, error };
};

export default useGames;
