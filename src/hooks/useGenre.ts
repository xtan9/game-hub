import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data: genres, error, isLoading } = useData<Genre>("/genres");

  return { genres, error, isLoading };
};

export default useGenres;
