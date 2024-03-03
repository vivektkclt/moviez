
---

# React Native Movie App

This is a React Native project for a movie app. It allows users to browse movies, search for specific movies, view details about each movie, and includes animations powered by Lottie.

## Getting Started

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript bundler that ships with React Native.

To start Metro, run the following command from the root of your React Native project:

```bash
# using npm
npm install
cd ios && pod install
npm start
```

### Step 2: Start your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android or iOS app:

#### For Android

```bash
# using npm
npm run android
```

#### For iOS

```bash
# using npm
npm run ios
```

## Folder Structure

```
|-- src
    |-- api
    |   |-- interceptor.js
    |   |-- useGetApi.js
    |-- components
    |   |-- CommonComponent1.js
    |   |-- CommonComponent2.js
    |-- screens
    |   |-- Screen1.js
    |   |-- Screen2.js
    |-- navigation
    |   |-- AppNavigator.js
    |-- store
    |   |-- index.js
    |-- animations
    |   |-- Animation1.json
    |   |-- Animation2.json
    |-- App.js
    |-- ...
```

- **api**: Contains API-related files such as interceptor and custom hooks for API calls.
- **components**: Contains reusable components used across different screens.
- **screens**: Contains individual screens for the app.
- **navigation**: Contains navigation-related files, including the main AppNavigator.
- **store**: Contains files related to state management using Zustand.
- **animations**: Contains JSON files for Lottie animations.
- **App.js**: Entry point of the application.

## Features

- Browse movies
- Search for specific movies
- View details about each movie
- Animated UI elements using Lottie

## Dependencies

- React Native
- Zustand
- React Navigation
- Lottie React Native

## API

This app uses the TMDB API for data fetching and search.

---
