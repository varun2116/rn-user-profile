# React native Development

## Getting Started

Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility:
```
    npm install -g expo-cli
```

Then run the following commands to create a new React Native project called "helloWorld":
```
    expo init AwesomeProject

    cd AwesomeProject
    npm start # you can also use: expo start
```

installed application with *typescript(.tsx)*

<hr />

## Navigation

### Installation

```
    npm install @react-navigation/native --save
```

The libraries we will install now are `react-native-gesture-handler`, `react-native-reanimated`, `react-native-screens` and `react-native-safe-area-context`. If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.

### Installing dependencies into an Expo managed project

In your project directory, run:
```
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

### Installing dependencies into a bare React Native project

In your project directory, run:

```
    npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
```

### Using Drawer

```
    npm install @react-navigation/drawer
```

Please look into the [documentation](https://reactnavigation.org/docs/drawer-navigator/)
