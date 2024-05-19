import useSWR from 'swr';
import { NEWS_API_KEY } from '@env'; // Using .env file to keep our secrets safe


const fetcher = (url: string) => fetch(url).then(res => res.json());

// Custom hook to fetch news data
const useFetchNews = (triggerFetch: boolean) => {
  const { data, error } = useSWR(
    // Fetchonly when the flag triggerFetch is true.
    triggerFetch ? `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}` : null,
    fetcher
  );

  return {
    news: data?.articles, // Extract articles data from fetched response
    isLoading: !error && !data, // if No data and no error then loading.
    isError: error, // Return error state
  };
};

export default useFetchNews;