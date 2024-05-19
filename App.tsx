import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewsFeedScreen from './screens/NewsFeedScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewsFeedScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
