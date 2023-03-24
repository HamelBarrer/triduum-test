import type { fetchWikipedia } from '@/types/fetchWikipedia';
import { ref } from 'vue';

export const useApiService = () => {
  const baseApi =
    'https://es.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json';

  const fetchSearch = async (
    inputSearch: string
  ): Promise<fetchWikipedia[]> => {
    const response = await fetch(`${baseApi}&srsearch=${inputSearch}`);
    const data = await response.json();

    const dataWikipedia: fetchWikipedia[] = [];
    data.query.search.forEach((wikipedia: fetchWikipedia) => {
      const { pageid, title, snippet } = wikipedia;
      dataWikipedia.push({ pageid, title, snippet });
    });

    return dataWikipedia;
  };

  return { fetchSearch };
};
