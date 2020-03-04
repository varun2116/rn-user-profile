import React from 'react';
import { Header } from 'react-native-elements';
import { NavigationScreens } from '../Navigation/constants';
import { StyleSheet } from 'react-native';
import { isEqual } from 'lodash';

const styles = StyleSheet.create({
    displayBlock: {
        visibility: 'visible',
    },
    displayNone: {
        visibility: 'hidden',
    },
});

function HeaderBar({ navigation, route }) {
    const { navigate, openDrawer } = navigation;
    const { name } = route;
    let centerName: string = 'John Doe';
    if (!isEqual(name, NavigationScreens.HOME_SCREEN)) {
        centerName += `'s ${name}`;
    }
    return (
        <Header
            leftComponent={{
                icon: 'menu',
                color: '#fff',
                onPress: () => openDrawer(),
            }}
            centerComponent={{ text: centerName, style: { color: '#fff' } }}
            rightComponent={{
                icon: 'home',
                color: '#fff',
                onPress: () => navigate(NavigationScreens.HOME_SCREEN),
            }}
            rightContainerStyle={[
                !isEqual(name, NavigationScreens.HOME_SCREEN)
                    ? styles.displayBlock
                    : styles.displayNone,
            ]}
        />
    );
}

export default HeaderBar;
