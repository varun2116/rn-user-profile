import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomePage from "../HomePage";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomePage} />
    </Drawer.Navigator>
  );
}

export default Navigation;
