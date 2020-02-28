import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderBar from "../HeaderBar";

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function HomePage(props) {
    return (
        <View style={styles.container}>
            <HeaderBar {...props} />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Page</Text>
            </View>
        </View>
    );
}

export default HomePage;
