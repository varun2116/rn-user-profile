import React from 'react';
import { Header } from 'react-native-elements';

function HeaderBar({ navigation }) {
    return (
        <Header
            leftComponent={{
                icon: 'menu',
                color: '#fff',
                onPress: () => navigation.openDrawer(),
            }}
            centerComponent={{ text: 'John Doe', style: { color: '#fff' } }}
            // rightComponent={{ icon: "home", color: "#fff" }}
        />
    );
}

export default HeaderBar;
