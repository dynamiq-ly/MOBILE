# [PAGE] Directory and File Structure for The Mobile Application

The directory and file structure described below is used for organizing the codebase of a mobile application. It follows a specific pattern for managing different features or modules within the application.

## Overview

The root directory of the application contains a folder named `page`, which is where most of the feature-related code is organized. Inside the `page` directory, each subfolder represents a separate feature or module of the application. Each feature folder will have a `routes.js` file and a `screens` folder.

## Directory Structure

```
📂 @/page/
├── 📁 Feature1/
│   ├── 📁 screens/
│   │   └── 📄 index.js
│   └── 📄 routes.js
├── 📁 Feature2/
│   ├── 📁 screens/
│   │   └── 📄 index.js
│   └── 📄 routes.js
└── 📁 Feature3/
    ├── 📁 screens/
    │   └── 📄 index.js
    └── 📄 routes.js
```

## Files

### `routes.js`

Each feature folder contains a `routes.js` file. This file is responsible for defining the routes and configuration for each screen related to that feature.

```javascript
// Feature1/routes.js

export const Feature1RoutesConfig = [
    {
        id: '', // path name
        component: '', // the React component imported from screens
        options: {
            // navigation options for the specific route
        }
    },
    // add more route configurations as needed
]
```

In the `routes.js` file, we export an object named `${FeatureName}RoutesConfig`, where `${FeatureName}` is the name of the feature or the parent folder in camelCase followed by `RoutesConfig`. It is an array of objects, with each object representing the configuration for a specific screen within that feature.

The properties of each route configuration object are as follows:
- `id`: The path name for the route.
- `component`: The React component that corresponds to the screen, imported from the `screens` folder of the same feature.
- `options`: This property is optional and represents navigation options for the specific route, which can be customized as needed.

### `index.js` (inside the `screens` folder)

Inside each feature folder, there is a `screens` folder that contains an `index.js` file. This file acts as the entry point for exporting all the React components corresponding to each individual screen within the feature.

```javascript
// Feature1/screens/index.js

export { default as Screen1 } from './Screen1';
export { default as Screen2 } from './Screen2';
// export other screens as needed
```

This `index.js` file exports all the screen components defined in that feature's `screens` folder. The component names can be imported and used in the `routes.js` file for defining the route configurations.

## Summary

The directory and file structure described above help in organizing a mobile application's codebase by dividing it into separate features/modules. Each feature has its own `routes.js` file to define the routes and a `screens` folder to contain all the screen components related to that feature. This structure makes it easier to maintain and scale the application as it grows.