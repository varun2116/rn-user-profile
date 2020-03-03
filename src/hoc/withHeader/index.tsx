import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderBar from '../../components/HeaderBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

function withHeader(Component) {
    return class WithHeader extends React.Component {
        render() {
            const { navigation, route } = this.props;
            return (
                <View style={styles.container}>
                    <HeaderBar navigation={navigation} route={route} />
                    <Component {...this.props} />
                </View>
            );
        }
    };
}

export default withHeader;
