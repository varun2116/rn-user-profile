import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import withHeader from '../../hoc/withHeader';
import Experience from '../Experience';
import HomePage from '../HomePage';
import Services from '../Services';
import Skills from '../Skills';
import CustomDrawer from './CustomDrawer';
import { NavigationScreens } from './constants';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen
                name={NavigationScreens.HOME_SCREEN}
                component={withHeader(HomePage)}
            />
            <Drawer.Screen
                name={NavigationScreens.SERVICES_SCREEN}
                component={withHeader(Services)}
            />
            <Drawer.Screen
                name={NavigationScreens.SKILLS_SCREEN}
                component={withHeader(Skills)}
            />
            <Drawer.Screen
                name={NavigationScreens.EXPERIENCE_SCREEN}
                component={withHeader(Experience)}
            />
        </Drawer.Navigator>
    );
}

export default Navigation;
