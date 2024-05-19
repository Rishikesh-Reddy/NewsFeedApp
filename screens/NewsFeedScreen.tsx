import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import SwipeToFetchButton from '../components/SwipeToFetchButton';
import useFetchNews from '../hooks/useFetchNews';
import ArticleCard from '../components/ArticleCard';

// Define type for news item
interface newsItem {
  title: string,
  description: string,
  urlToImage: string,
  publishedAt: string,
}

const NewsFeedScreen: React.FC = () => {
  const [fetchNews, setFetchNews] = useState(false);
  // Fetch news data using custom hook
  const { news, isLoading, isError } = useFetchNews(fetchNews);

  // Callback when swipe action is completed and start news fetch
  const handleSwipeComplete = () => {
    setFetchNews(true);
  };

  // Filter articles to include only those with valid image, title, and description
  const validNews = news?.filter((item: newsItem) => item.urlToImage && item.title && item.description) || [];

  return (
    <View style={styles.container}>
      <SwipeToFetchButton onSwipeComplete={handleSwipeComplete} />
      {/* On render when the swipe action is completed */}
      {fetchNews ? (
        isLoading ? ( // Render loading message while fetching news
          <Text style={styles.message}>Loading...</Text>
        ) : isError ? ( // Render error message if there is an error fetching news
          <Text style={styles.message}>Error fetching news</Text>
        ) : (
          // using FlatList as it increases performance by rendering lazily.
          <FlatList
            data={validNews}
            renderItem={({ item }) => (
              // An ArticleCard is rendered for each item.
              <ArticleCard
                title={item.title}
                description={item.description}
                imageUrl={item.urlToImage}
                publishedAt={item.publishedAt}
              />
            )}
            contentContainerStyle={styles.newsContainer}
          />
        )
      ) : null}
    </View>
  );
};

// Styles for NewsFeedScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  newsContainer: {
    paddingBottom: 20,
  },
  message: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default NewsFeedScreen;
