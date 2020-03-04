import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading, registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import Navigation from './components/Navigation';

type Props = {};

type State = {
    isReady: boolean;
};

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isReady: false,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        const { isReady } = this.state;
        if (!isReady) {
            return <AppLoading />;
        }

        return (
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        );
    }
}

export default App;

//this mounts the App component
registerRootComponent(App);
