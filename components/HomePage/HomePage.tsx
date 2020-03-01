import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import HeaderBar from '../HeaderBar';

const propTypes = {
    pageHead: PropTypes.string.isRequired,
    pageSummary: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    buttonStyle: {
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 0,
    },
});

function HomePage(props) {
    const { pageHead, pageSummary } = props;
    return (
        <View style={styles.container}>
            <HeaderBar {...props} />
            <View style={styles.textContainer}>
                <Text h1>{pageHead}</Text>
                <Text>{pageSummary}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="PortFolio"
                    type="solid"
                    buttonStyle={styles.buttonStyle}
                />
                <Button
                    title="Hire Me"
                    type="outline"
                    buttonStyle={styles.buttonStyle}
                />
            </View>
        </View>
    );
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = {
    pageHead: 'Hello,',
    pageSummary:
        'I am John Doe, web developer from Melbourne, Australia. I have rich experience in web site design and building and customization, also I am good at wordpress.',
};

export default HomePage;
