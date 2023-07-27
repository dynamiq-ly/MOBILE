# [NAVIGATION - ROUTES] Directory and File Structure for The Mobile Application

The navigation system in our React Native mobile application is organized using a navigation package that supports drawer, stack, and tab navigation. Each type of navigation is configured within the `@/navigation` directory.

## Stack Navigation
Stack navigation defines the navigation and options for each screen or feature in the application. Each stack screen corresponds to a specific feature and is named accordingly. The stack navigation configuration can be found in the file `@/navigation/StackNavigation.js`.

## Tab Navigation
Tab navigation defines the navigation and options for each tab in the application. Each tab screen represents a different section of the app and is named using the `[tab-name]` convention. The tab navigation configuration is available in the file `@/navigation/TabNavigation.js`.

## Drawer Navigation
Drawer navigation defines the navigation and options for the drawer in the application, which presents a list of features. The drawer navigation configuration can be found in the file `@/navigation/DrawerNavigation.js`. When a feature is selected from the drawer, it redirects to the corresponding stack navigator for that feature.

### Flow of the Navigation
The navigation flow in our application follows this pattern:

```
{Stack Navigation Screen} <- {Drawer Navigation Screen} <- [Tab Navigation Screen]
```

In this flow, the stack navigation screens represent the individual screens or features of the application. The drawer navigation screen presents a list of features, and upon selecting a feature, the tab navigation screens become accessible.

## Routes Configuration
The actual routes definition for the entire navigation system is located in a separate file named [`routes-config.md`](./route-config.md). This file serves as a comprehensive guide to all the routes, screens, and navigation options for the entire application.

## Directory Structure

```
📂 @/
├── 📁 navigation/
│   ├── 📄 StackNavigation.js
│   ├── 📄 TabNavigation.js
│   └── 📄 DrawerNavigation.js
├── 📁 page/
│   ├── 📁 [Feature1]/
│   │   ├── 📁 screens/
│   │   │   └── 📄 index.js
│   ├── 📁 [Feature2]/
│   │   ├── 📁 screens/
│   │   │   └── 📄 index.js
│   └── 📁 [Feature3]/
│       ├── 📁 screens/
│       │   └── 📄 index.js
└── 📁 routes/
    ├── 📄 stack.routes.js
    └── 📄 tab.routes.js
```

## Important Note

For the navigation to work correctly, it is essential to include the `NavigationContainer` component in the `app.js` file and ensure it wraps the entire application navigation system. The `NavigationContainer` component is a crucial part of the navigation package and must be placed at the top of the component hierarchy to enable navigation functionalities.

## Summary

Our React Native mobile application's directory and file structure efficiently organize the navigation system using a powerful navigation package that supports drawer, stack, and tab navigation. All navigation-related configuration files are kept within the `@/navigation` directory, providing a clean and easy-to-manage structure for our navigation setup.