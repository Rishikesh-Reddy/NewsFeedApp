import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import SwipeToFetchButton from '../components/SwipeToFetchButton';
import useFetchNews from '../hooks/useFetchNews';
import ArticleCard from '../components/ArticleCard';

const NewsFeedScreen: React.FC = () => {
  const [fetchNews, setFetchNews] = useState(false);
  const { news, isLoading, isError } = useFetchNews(fetchNews);

  const handleSwipeComplete = () => {
    setFetchNews(true);
  };

  // Filter articles to include only those with valid image, title, and description
  const validNews = news?.filter((item: { urlToImage: string; title: string; description: string; }) => item.urlToImage && item.title && item.description) || [];

  return (
    <View style={styles.container}>
      <SwipeToFetchButton onSwipeComplete={handleSwipeComplete} />
      {fetchNews ? (
        isLoading ? (
          <Text style={styles.message}>Loading...</Text>
        ) : isError ? (
          <Text style={styles.message}>Error fetching news</Text>
        ) : (
          <FlatList
            data={validNews}
            keyExtractor={(item, index) => `${item.url}-${index}`}
            renderItem={({ item }) => (
              <ArticleCard
                title={item.title}
                description={item.description}
                imageUrl={item.urlToImage}
              />
            )}
            contentContainerStyle={styles.newsContainer}
          />
        )
      ) : null}
    </View>
  );
};

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
