import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games, error, isLoading };
};

export default useGames;
