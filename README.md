# Student Name: Esra Özdemir  
# Student ID: 220408014  
# GitHub Repository: https://github.com/esraozdemir6/PreferencesApp

## Preferences & Auth App

**Preferences & Auth App** is a mobile application developed using **React Native** and **Expo** as part of the Mobile App Development Lab.  
The application demonstrates real-world **state management patterns** including local state, global state, persistent storage, and custom hooks.

The app includes a mock authentication flow, global user state management using Context API, and persistent user preferences such as theme selection using AsyncStorage.

---

## Features

- Mock login and logout flow
- Global authentication state using **Context API**
- Persistent login session with **AsyncStorage**
- Theme preference (light / dark) with persistence
- Custom hook for theme management
- Stack-based navigation between screens

---

## Concepts Demonstrated

- **useState** for local UI and form state
- **useEffect** for side effects and persistence
- **Context API** to eliminate prop drilling
- **AsyncStorage** for app restart persistence
- **Custom Hooks** for reusable logic
- **React Navigation** (Native Stack Navigator)

---

## Screens

- **Login Screen**
  - Username input
  - Login validation
- **Home Screen**
  - Displays logged-in user
  - Navigation to settings
  - Logout functionality
- **Settings Screen**
  - Theme toggle (light / dark)
  - Persistent theme preference
  - Logout option

---

## Project Structure

PreferencesApp/
├── App.js
├── screens/
│ ├── LoginScreen.js
│ ├── HomeScreen.js
│ └── SettingsScreen.js
├── context/
│ └── AuthContext.js
├── hooks/
│ └── useTheme.js
├── assets/
├── package.json
└── README.md


---

## How to Run the App

### 1. Clone the Repository
```bash
git clone https://github.com/esraozdemir6/PreferencesApp.git
cd PreferencesApp

npm install

npx expo start
