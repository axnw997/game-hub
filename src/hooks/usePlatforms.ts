//use axios to get list

import useData from "./useData";

export interface Platforms {
  id: number,
  name: string,
  slug: string
}

const usePlatforms = () => {
  return useData<Platforms>("/platforms/lists/parents");
};

export default usePlatforms;
