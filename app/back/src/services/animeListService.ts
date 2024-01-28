import accessAnimeApi from '../hellpers/accessAnimeApi';

const getAnimeList = async (): Promise<any> => {
  const animeList = await accessAnimeApi.getAnimesList();
  return animeList;
};

export default { getAnimeList };