import { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
    View, Text, Button,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import { btn, typ, form } from '../styles/index.js';

class Add extends Component {
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
                        <TouchableOpacity activeOpacity={0.6} onPress={() => this._toHome()}>
                            <AntDesign style={{ marginRight: 10, marginTop: 2 }} name='arrowleft' color='#000' size={24} />
                        </TouchableOpacity>
                        <Text style={[typ.h2]}>Tambah</Text>
                    </View>
                </View>

                <View style={st.formWrapper}>
                    <View style={[form.wrapper]}>
                        <Text style={form.label}>Judul</Text>
                        <TextInput
                            style={[form.input, form.lg]}
                            placeholder="Masukan Judul"
                            onChangeText={() => {}}
                        />
                    </View>
                    <View style={[form.wrapper]}>
                        <Text style={form.label}>Durasi</Text>
                        <TextInput
                            style={[form.input, form.lg]}
                            keyboardType='numeric'
                            placeholder="Masukan durasi (menit)l"
                            onChangeText={() => {}}
                        />
                    </View>
                </View>

                <View style={st.footer}>
                    <Button style={[btn.dark, btn.lg]} label="Tambah & Mulai" />
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
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
    },
    headerContent: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    formWrapper: {
        paddingTop: 18,
        paddingHorizontal: 20,
    },
    footer: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        paddingHorizontal: 24,
        paddingBottom: 32,
        paddingTop: 12,
    },
});

export default Add;
