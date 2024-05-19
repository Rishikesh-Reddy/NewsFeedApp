import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Article cards props defination
interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  publishedAt: string;
}

// Article Card Component for reusability
const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imageUrl, publishedAt }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.publishedAt}>{new Date(publishedAt).toDateString()}</Text>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    height: 200,
    width: '100%',
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#111'
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666'
  },
  author: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  publishedAt: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 5,
  },
  sourceName: {
    fontSize: 14,
    color: '#888888',
  },
});

export default ArticleCard;
