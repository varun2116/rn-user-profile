import PropTypes from "prop-types";
import React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";

const propTypes = {
    profileName: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: { height: 250, backgroundColor: "#d2d2d2"},
    imageContainer: {
        height: 200,
        backgroundColor: "#d2d2d2",
        alignItems: "center",
        justifyContent: "center"
    },
    image: { height: 150, width: 150, borderRadius: 60, backgroundColor: "transparent" },
    textContainer: {
        height: 50,
        backgroundColor: "Green",
        alignItems: "center",
        justifyContent: "center"
    }
});

function NavigationHead(props) {
    const { profileName } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/avatar.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>{profileName}</Text>
            </View>
        </View>
    );
}

NavigationHead.propTypes = propTypes;
NavigationHead.defaultProps = {
    profileName: "John Doe"
};

export default NavigationHead;
