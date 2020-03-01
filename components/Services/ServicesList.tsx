import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Icon, Text } from 'react-native-elements';
import { ServiceListDefaultProps } from './constants';

const propTypes = {
    servicesList: PropTypes.array.isRequired,
};

function ServicesList(props) {
    const { servicesList } = props;
    return (
        <React.Fragment>
            {map(servicesList, ({ title, iconName, description }) => (
                <Card>
                    <Icon
                        reverse
                        name={iconName}
                        type="font-awesome"
                        color="#f50"
                    />
                    <Text h3>{title}</Text>
                    <Text>{description}</Text>
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
