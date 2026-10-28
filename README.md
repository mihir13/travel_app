# Travel App

A mobile travel-guide prototype built with React Native and Expo. It's a UI exercise from 2019: a polished three-screen app that browses destinations in Croatia, using mock data rather than a backend.

## Screens

- **List:** a header with a search bar and a tappable profile avatar, scrolling destination cards with photos, locations and ratings, and a recommended list underneath
- **Article:** a destination page with a swipeable photo carousel, dot pagination, a star rating, a review count and a description
- **Profile:** a simple user profile screen

The mock destinations are Dubrovnik, Split, Hvar, Zadar and Zagreb, defined in `screens/List.js`.

## Tech

- React Native with Expo (SDK 35)
- React Navigation 4 (stack navigator)
- `react-native-gesture-handler`, `react-native-reanimated` and `react-native-vector-icons`
- Photos load from Unsplash and avatars from randomuser.me, so the app needs an internet connection

## Running it

```bash
yarn install        # or: npm install
yarn start          # or: npx expo start
```

Then open it in the Expo Go app, an iOS or Android simulator, or the browser (`yarn web`).

This project targets Expo SDK 35 from 2019. A current Expo Go app won't open SDK 35 projects, so to run it today you'll need either an old Expo Go version or to upgrade the dependencies (`npx expo install --fix` after bumping `expo`).

## Project structure

```
App.js                app container
navigation/Travel.js  stack navigator and screen routing
screens/              List, Article and Profile screens
theme.js              shared colours and sizes
assets/               app icon and splash screen
```

## Status

A finished prototype. It uses mock data, has no backend, the search bar is a visual placeholder rather than a working search, and it isn't maintained.
