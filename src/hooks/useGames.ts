import useData from "./useData";

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

const useGames = () => {
  const { data: games, error, isLoading } = useData<Game>("/games");

  return { games, error, isLoading };
};

export default useGames;
