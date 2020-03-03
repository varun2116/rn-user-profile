import { map, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'react-native-material-ui';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Icon from '../common/Icon';
import { SkillsListDefaultProps } from './constants';

const propTypes = {
    skillsList: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function SkillsList(props) {
    const { skillsList } = props;
    return (
        <React.Fragment>
            {map(skillsList, ({ title, iconDetails, value }) => (
                <Card
                    key={uniqueId('skillsList-card-')}
                    style={{ container: styles.container }}
                >
                    <Icon key={uniqueId('skillsList-icon-')} {...iconDetails} />
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
