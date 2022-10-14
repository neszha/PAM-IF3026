import { Component } from 'react';
import {
    StyleSheet, Text, TouchableHighlight, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import info from '../../store/info.js';

class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableHighlight style={styles.iconWrapper} onPress={() => {}} underlayColor="#5e9833">
                    <Ionicons style={styles.icon} size={30} name="menu" />
                </TouchableHighlight>
                <View>
                    <Text style={styles.title}>{info.title}</Text>
                </View>
                <TouchableHighlight style={styles.iconWrapper} onPress={() => {}} underlayColor="#5e9833">
                    <FontAwesome style={styles.icon} size={26} name="user" />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 0,
        position: 'absolute',
        zIndex: 2,
        marginTop: 28,
        top: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#6FB23E',
    },
    iconWrapper: {
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#FFF',
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Header;
