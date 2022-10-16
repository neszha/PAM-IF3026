import { Component } from 'react';
import { View, Text } from 'react-native-ui-lib';
import Feather from 'react-native-vector-icons/Feather.js';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { btn, typ } from '../styles/index.js';
import { events, durationHelper, countdownHelper } from '../helper/index.js';

class Countdown extends Component {
    interval = null;

    state = {
        data: {
            id: null,
            status: 'play',
            title: '-',
            duration: 0,
            counter: {
                duration: 0,
            },
            color: '#616161',
        },
    };

    constructor(props) {
        super(props);
        const { params } = props.route;
        this.navigation = props.navigation;
        this._loadCountdownData(params.id);

        this.interval = setInterval(() => {
            this._loadCountdownData(params.id);
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval);
    }

    async _loadCountdownData(id) {
        const dataString = await AsyncStorage.getItem(`countdown:${id}`);
        const data = JSON.parse(dataString);
        const minute10 = 10 * 60 * 1000;
        if (data.counter.duration <= minute10) data.color = '#fa983a';
        if (data.counter.duration <= 0) data.color = '#eb2f06';
        if (data) this.setState({ data });
    }

    _toHome() {
        this.navigation.navigate('Home');
    }

    async _playToggle(status = 'play') {
        const data = { ...this.state.data };
        if (data.counter.duration <= 0) return;
        data.status = status;
        await countdownHelper.save(data.id, data);
        this._loadCountdownData(data.id);
    }

    async _reset() {
        const data = JSON.parse(JSON.stringify(this.state.data));
        data.counter.duration = data.duration;
        await countdownHelper.save(data.id, data);
        this._loadCountdownData(data.id);
    }

    async _delete() {
        await AsyncStorage.removeItem(`countdown:${this.state.data.id}`);
        events.emit('render:countdown-list');
        this._toHome();
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
                        <Text style={[typ.h2, typ.center, { flex: 1 }]}>{ this.state.data.title }</Text>
                    </View>
                </View>

                <View>
                    <Text style={[typ.h1, typ.center, st.counter, { color: this.state.data.color }]}>
                        { durationHelper.parseMaster(this.state.data.counter.duration) }
                    </Text>
                </View>

                <View style={st.footer}>
                    <View style={st.controlWrapper}>

                        <TouchableOpacity style={{ padding: 12 }} onPress={() => this._reset()}>
                            <Feather name='refresh-cw' size={30} />
                        </TouchableOpacity>

                        { this.renderPlayButton() }

                        <TouchableOpacity style={{ padding: 12 }} onPress={() => this._delete()}>
                            <Feather name='trash' size={30} />
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        );
    }

    renderPlayButton() {
        if (this.state.data.status === 'play') {
            return (
                <TouchableOpacity activeOpacity={0.8} onPress={() => this._playToggle('pause')}>
                    <View style={[btn.dark, st.btnPlay]}>
                        <FontAwesome5 style={{ color: '#fff' }} name="pause" size={30} />
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this._playToggle('play')}>
                <View style={[btn.dark, st.btnPlay]}>
                    <FontAwesome5 style={{ color: '#fff', marginLeft: 8 }} name="play" size={30} />
                </View>
            </TouchableOpacity>
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
    // btnPlayIcon: {
    //     color: '#fff',
    //     marginLeft: 8,
    // },
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
