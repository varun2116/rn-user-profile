import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomePage from '../HomePage';
import CustomDrawer from './CustomDrawer';
import Services from '../Services';
import Skills from '../Skills';
import Experience from '../Experience';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={HomePage} />
            <Drawer.Screen name="Services" component={Services} />
            <Drawer.Screen name="Skills" component={Skills} />
            <Drawer.Screen name="Experience" component={Experience} />
        </Drawer.Navigator>
    );
}

export default Navigation;
