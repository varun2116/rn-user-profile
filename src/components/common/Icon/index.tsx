import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import IconStyles from './IconStyles';
import IconType from './IconType';
import { IconTypes } from '../../../utils/constants';

const propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    materialDesign: PropTypes.bool,
    backgroundType: PropTypes.string,
    backgroundSize: PropTypes.number,
    backgroundColor: PropTypes.string,
};

function Icon(props) {
    const {
        name,
        type,
        color,
        size,
        materialDesign,
        backgroundType,
        backgroundSize,
        backgroundColor,
    } = props;

    let viewStyle = IconStyles.getStyles(
        materialDesign,
        backgroundType,
        backgroundSize,
        backgroundColor,
    );

    return (
        <View style={viewStyle.container}>
            <IconType type={type} name={name} color={color} size={size} />
        </View>
    );
}

Icon.propTypes = propTypes;
Icon.defaultProps = {
    name: 'person',
    type: IconTypes.FONT_AWESOME,
};

export default Icon;
