import { myAnimeList }  from '../hellpers/animeList';
import { IAnimeList } from '../interfaces/animeListInterface';

const getAnimeList = async (): Promise<IAnimeList[]> => {
  const animeList: IAnimeList[] = myAnimeList
  return animeList;
};

export default { getAnimeList };