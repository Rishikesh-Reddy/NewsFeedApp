import useSWR from 'swr';
import { NEWS_API_KEY } from '@env';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const useFetchNews = (triggerFetch: boolean) => {
  const { data, error } = useSWR(
    triggerFetch ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}` : null,
    fetcher
  );

  return {
    news: data?.articles,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFetchNews;
