import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import info from '../../store/info.js';

class Footer extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Copyright {info.author.name} - {info.author.nim}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 12,
    },
});

export default Footer;
