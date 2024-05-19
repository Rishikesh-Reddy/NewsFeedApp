# News Feed App

This is a single-screen news feed application developed using React Native and TypeScript. The application features a custom-made swipe control named "Swipe to Fetch Button" to trigger the fetching of news articles from the NewsAPI.org. The project utilizes the SWR library for efficient data fetching and caching. 

## Installation

To install and run the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Rishikesh-Reddy/news-feed-app.git
```

2. Navigate to the project directory:

```bash
cd news-feed-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your NewsAPI.org API key:

```
NEWS_API_KEY=your_api_key_here
```

5. Run the project:

```bash
npm start
```

## Project Structure

The project structure is as follows:

- **components:** Contains reusable UI components used in the application.
  - `SwipeToFetchButton.tsx`: Custom swipe control component for fetching news articles.
  - `ArticleCard.tsx`: Component for displaying individual news articles in a card format.
- **hooks:** Contains custom hooks used for fetching news articles.
  - `useFetchNews.ts`: Custom hook using SWR for fetching news articles from NewsAPI.org.
- **screens:** Contains the main screens of the application.
  - `NewsFeedScreen.tsx`: Main screen displaying the news feed with the Swipe to Fetch button.

## Dependencies

### Production Dependencies
- **react:** 18.2.0
- **react-native:** 0.74.1
- **react-native-dotenv:** 3.4.11
- **swr:** 2.2.5

## Usage

1. The main screen of the application displays a list of news articles.
2. Swipe the "Swipe to Fetch" button to trigger the fetching of news articles.
3. Each news article is displayed in a card format, showing the title, description, author, published date, and source name.

## Architecture Overview

The application follows a modular architecture, with separate components for UI elements and hooks for data fetching. The main screen (`NewsFeedScreen`) contains the logic for fetching news articles and rendering them using the `ArticleCard` component. The `SwipeToFetchButton` component handles the swipe action to trigger the fetching of news articles.