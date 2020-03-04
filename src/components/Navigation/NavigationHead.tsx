import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

type Props = {
    profileName: string;
};

const propTypes = {
    profileName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: { height: 200, backgroundColor: '#d2d2d2' },
    imageContainer: {
        height: 150,
        backgroundColor: '#d2d2d2',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    textContainer: {
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function NavigationHead(props: Props) {
    const { profileName } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg',
                    }}
                    size="large"
                />
            </View>
            <View style={styles.textContainer}>
                <Text>{profileName}</Text>
            </View>
        </View>
    );
}

NavigationHead.propTypes = propTypes;
NavigationHead.defaultProps = {
    profileName: 'John Doe',
};

export default NavigationHead;
