import { map, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Icon, Text, Slider } from 'react-native-elements';
import { SkillsListDefaultProps } from './constants';
import { ScrollView, StyleSheet, View } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const propTypes = {
    servicesList: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function SkillsList(props) {
    const { skillsList } = props;
    return (
        <React.Fragment>
            {map(skillsList, ({ title, iconName, value }) => (
                <Card
                    key={uniqueId('skillsList-card-')}
                    wrapperStyle={styles.container}
                >
                    <Icon
                        key={uniqueId('skillsList-icon-')}
                        reverse
                        name={iconName}
                        type="font-awesome"
                        color="#f50"
                    />
                    <Text key={uniqueId('skillsList-title-')} h3>
                        {title}
                    </Text>
                    <ProgressBarAnimated
                        key={uniqueId('skillsList-progress-')}
                        width={200}
                        value={value}
                        backgroundColorOnComplete="#6CC644"
                    />
                </Card>
            ))}
        </React.Fragment>
    );
}

SkillsList.propTypes = propTypes;
SkillsList.defaultProps = { ...SkillsListDefaultProps };

export default SkillsList;
