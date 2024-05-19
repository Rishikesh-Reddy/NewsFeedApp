# News Feed App

## Overview

This is a single-screen news feed application developed using React Native and TypeScript. The application fetches news from the NewsAPI.org service and displays them in a swipe-to-fetch manner. It features two custom components: `SwipeToFetchButton` for triggering news fetching and `ArticleCard` for displaying individual news articles.

## Requirements

- Node.js
- npm or yarn
- React Native CLI
- TypeScript

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` or `yarn install` to install the project dependencies.

## Configuration

### Environment Variables

This project uses the `react-native-dotenv` package for handling environment variables. Create a `.env` file in the root directory of the project and define your NewsAPI.org API key:

```plaintext
NEWS_API_KEY=your_api_key_here
```

## Usage

### Running the App

- Ensure you have set up your development environment for React Native.
- Connect a mobile device or start an emulator/simulator.
- Run `npm start` or `yarn start` to start the Metro bundler.
- Open another terminal window and run `npm run android` or `npm run ios` to build and run the app on your device/emulator.