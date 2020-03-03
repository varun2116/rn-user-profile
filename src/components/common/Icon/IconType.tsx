import React from 'react';
import PropTypes from 'prop-types';
import * as Material from 'react-native-vector-icons/MaterialCommunityIcons';
import * as FontAwesome from 'react-native-vector-icons/FontAwesome';
import { IconTypes } from '../../../utils/constants';

const MaterialIcon = Material.default;
const FontAwesomeIcon = FontAwesome.default;

const propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.number,
    color: PropTypes.string,
};

function IconType(props) {
    const { name, type, ...remainingProps } = props;
    switch (type) {
        case IconTypes.MATERIAL_COMMUNITY:
            return <MaterialIcon name={name} {...remainingProps} />;

        case IconTypes.FONT_AWESOME:
            return <FontAwesomeIcon name={name} {...remainingProps} />;

        default:
            break;
    }
}

IconType.propTypes = propTypes;
IconType.defaultProps = {
    name: 'person',
    type: IconTypes.FONT_AWESOME,
};

export default IconType;
