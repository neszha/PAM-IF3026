import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class NotificationScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}></View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#6FB23E',
        height: 28,
    },
});

export default NotificationScreen;
