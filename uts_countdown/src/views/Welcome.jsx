import { Component } from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { View, Button } from 'react-native-ui-lib';
import { btn, typ } from '../styles/index.js';

import logo from '../assets/logo.png';

class Welcome extends Component {
    render() {
        return (
            <View style={st.container}>

                <View style={st.logoWrapper}>
                    <Image source={logo} style={st.logo} />
                </View>

                <View>
                    <Text style={[typ.h1, st.textBanner]}>Buat hitungan mundur dengan mudah.</Text>
                    <View style={st.btnWrapper}>
                        <Button style={[btn.dark, btn.lg]} label="Mulai" />
                    </View>
                </View>

            </View>
        );
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        transform: [{ scale: 0.7 }],
    },
    textBanner: {
        textAlign: 'center',
        marginBottom: 40,
    },
    btnWrapper: {
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
});

export default Welcome;
