import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import HeaderBar from '../HeaderBar';
import { ExperienceListDefaultProps } from './constants';

const propTypes = {
    experienceList: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timeLineContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function Experience(props) {
    const { experienceList } = props;
    return (
        <View style={styles.container}>
            <HeaderBar {...props} />
            <Timeline
                data={experienceList}
                circleSize={20}
                circleColor="rgb(45,156,219)"
                columnFormat="two-column"
                innerCircle={'dot'}
                lineColor="rgb(45,156,219)"
                timeContainerStyle={{ minWidth: 52 }}
                timeStyle={{
                    textAlign: 'center',
                    backgroundColor: '#ff9797',
                    color: 'white',
                    padding: 5,
                    borderRadius: 13,
                }}
                descriptionStyle={{ color: 'gray' }}
                options={{
                    style: { paddingTop: 15 },
                }}
                style={{ marginLeft: 10 }}
            />
        </View>
    );
}

Experience.propTypes = propTypes;
Experience.defaultProps = {
    ...ExperienceListDefaultProps,
};
export default Experience;
