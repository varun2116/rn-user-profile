import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HeaderBar from '../HeaderBar';
import SkillsList from './SkillsList';

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

function Skills(props) {
    return (
        <View style={styles.container}>
            <HeaderBar {...props} />
            <ScrollView>
                <View style={styles.cardContainer}>
                    <SkillsList />
                </View>
            </ScrollView>
        </View>
    );
}

Skills.propTypes = propTypes;
Skills.defaultProps = {};

export default Skills;
