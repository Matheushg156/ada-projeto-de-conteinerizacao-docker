import axios from 'axios';

const getAnimesList = async () => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/anime');
    console.log("response.data.results:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar animes:", error);
    return [];
  }
};

export default { getAnimesList };
