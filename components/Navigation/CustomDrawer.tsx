import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavigationHead from './NavigationHead';

const propTypes = {
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function CustomDrawer(props) {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationHead {...props} />
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

CustomDrawer.propTypes = propTypes;
CustomDrawer.defaultProps = {
    navigation: {
        closeDrawer: () => {},
        toggleDrawer: () => {},
    },
};

export default CustomDrawer;
