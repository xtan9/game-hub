import useData from "./useData";

export interface Platform {
  slug: string;
  id: number;
  name: string;
  background_image: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
