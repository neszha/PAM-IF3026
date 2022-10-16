import { Component } from 'react';
import * as Random from 'expo-random';
// import * as TaskManager from 'expo-task-manager';
// import * as BackgroundFetch from 'expo-background-fetch';
import { View, Text, Button } from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { btn, typ, form } from '../styles/index.js';
import { events } from '../helper/index.js';

class Add extends Component {
    state = {
        data: {
            title: 'Fanesa Hadi P.',
            duration: 0.1, // minute -> ms
        },
        disabled: false,
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    _toHome() {
        this.navigation.navigate('Home');
    }

    async _addCountdown() {
        const key = Random.getRandomBytes(10).join('');
        const body = {
            id: key,
            status: 'play', // [play|pause|end]
            ...this.state.data,
            createdAt: new Date().getTime(),
        };
        body.duration *= (60 * 1000);
        body.counter = {
            duration: body.duration,
        };
        body.state = {
            playingSound: false,
        };
        const storegKey = `countdown:${key}`;
        await AsyncStorage.setItem(storegKey, JSON.stringify(body));
        events.emit('render:countdown-list');
        this._toHome();
    }

    _validateFormData() { // Validate button disabled.
        const { data } = this.state;
        if (data.title && data.duration > 0) this.setState({ disabled: false });
        else this.setState({ disabled: true });
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
                            defaultValue={this.state.data.title}
                            onChangeText={async (text) => {
                                await this.setState({ data: { ...this.state.data, title: text } });
                                this._validateFormData();
                            }}
                        />
                    </View>
                    <View style={[form.wrapper]}>
                        <Text style={form.label}>Durasi</Text>
                        <TextInput
                            style={[form.input, form.lg]}
                            keyboardType='numeric'
                            placeholder="Masukan durasi (menit)"
                            defaultValue={this.state.data.duration.toString()}
                            onChangeText={async (num) => {
                                await this.setState({ data: { ...this.state.data, duration: Number(num) || 0 } });
                                this._validateFormData();
                            }}
                        />
                    </View>
                </View>

                <View style={st.footer}>
                    { this.renderAddButton() }
                </View>

            </View>
        );
    }

    renderAddButton() {
        if (!this.state.disabled) return <Button style={[btn.dark, btn.lg]} label="Tambah & Mulai" onPress={() => this._addCountdown()} />;
        return <Button disabled style={[btn.dark, btn.lg, { opacity: 0.7 }]} label="Tambah & Mulai" />;
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 700,
        position: 'relative',
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
