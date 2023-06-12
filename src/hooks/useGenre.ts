import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ genres:genres, error:null, isLoading:null })

export default useGenres;
