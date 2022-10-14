import { Component } from 'react';
import {
    StyleSheet, Text, View, TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5.js';

class FormTextInput extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.label}>{ this.props.label }</Text>
                <View style={styles.inputWrapper}>
                    <View style={styles.iconWrapper}>
                        <FontAwesome style={styles.icon} name={this.props.icon} size={18} />
                    </View>
                    <TextInput
                        style={styles.input}
                        onChangeText={() => {}}
                        placeholder={this.props.placeholder}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        //
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
    },
    iconWrapper: {
        position: 'absolute',
        width: 40,
        alignItems: 'center',
    },
    icon: {
        color: '#6FB23E',
    },
    input: {
        flex: 1,
        height: 40,
        padding: 10,
        paddingLeft: 38,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#7a7a7a',
    },
});

export default FormTextInput;
