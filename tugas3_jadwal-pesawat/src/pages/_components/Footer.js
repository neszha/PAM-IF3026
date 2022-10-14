import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import info from '../../store/info.js';

class Footer extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={{ textAlign: 'center' }}>Copyright {info.author.name} - {info.author.nim}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        bottom: 8,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 12,
    },
});

export default Footer;
