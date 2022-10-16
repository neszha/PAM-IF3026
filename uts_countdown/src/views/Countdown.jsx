import { Component } from 'react';
import { View, Text } from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather.js';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import { btn, typ } from '../styles/index.js';

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    _toHome() {
        this.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={st.container}>

                <View style={st.header}>
                    <View style={[st.headerContent, { flexDirection: 'row', alignItems: 'center' }]}>
                        <TouchableOpacity style={{
                            position: 'absolute', left: 20, top: 15, zIndex: 2,
                        }} activeOpacity={0.6} onPress={() => this._toHome()}>
                            <AntDesign name='arrowleft' color='#000' size={24} />
                        </TouchableOpacity>
                        <Text style={[typ.h2, typ.center, { flex: 1 }]}>UIS PAM - RA</Text>
                    </View>
                </View>

                <View>
                    <Text style={[typ.h1, typ.center, st.counter]}>00.01.15.05</Text>
                </View>

                <View style={st.footer}>
                    <View style={st.controlWrapper}>

                        <TouchableOpacity style={{ padding: 12 }} onPress={() => console.log('Pressed!')}>
                            <Feather name='refresh-cw' size={30} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => console.log('Pressed!')}>
                            <View style={[btn.dark, st.btnPlay]}>
                                <FontAwesome5 style={st.btnPlayIcon} name="play" size={30} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 12 }} onPress={() => console.log('Pressed!')}>
                            <MaterialIcons name='fullscreen' size={30} />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        minHeight: 700,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: 32,
    },
    headerContent: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    counter: {
        fontSize: 55,
    },
    btnPlay: {
        width: 75,
        height: 75,
        borderRadius: 75,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    btnPlayIcon: {
        color: '#fff',
        marginLeft: 8,
    },
    footer: {
        paddingBottom: 32,
        alignItems: 'center',
    },
    controlWrapper: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Countdown;
