import { map, uniqueId } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native-elements';
import { Card } from 'react-native-material-ui';
import { ServiceListDefaultProps } from './constants';
import Icon from '../common/Icon';
import { StyleSheet } from 'react-native';

const propTypes = {
    servicesList: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});

function ServicesList(props) {
    const { servicesList } = props;
    return (
        <React.Fragment>
            {map(servicesList, ({ title, iconDetails, description }) => (
                <Card
                    key={uniqueId('servicesList-card-')}
                    style={{ container: styles.container }}
                >
                    <Icon
                        key={uniqueId('servicesList-icon-')}
                        {...iconDetails}
                    />
                    <Text key={uniqueId('servicesList-title-')} h3>
                        {title}
                    </Text>
                    <Text key={uniqueId('servicesList-desc-')}>
                        {description}
                    </Text>
                </Card>
            ))}
        </React.Fragment>
    );
}

ServicesList.propTypes = propTypes;
ServicesList.defaultProps = {
    ...ServiceListDefaultProps,
};

export default ServicesList;
