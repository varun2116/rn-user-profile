import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderBar from '../HeaderBar';
import { ServicesDefaultProps } from './constants';
import ServicesList from './ServicesList';
import { Text } from 'react-native-elements';

const propTypes = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
});

function Services(props) {
    return (
        <View style={styles.container}>
            <HeaderBar {...props} />
            <ScrollView>
                <View style={styles.cardContainer}>
                    <ServicesList />
                </View>
            </ScrollView>
        </View>
    );
}

Services.propTypes = propTypes;
Services.defaultProps = {
    ...ServicesDefaultProps,
};

export default Services;
