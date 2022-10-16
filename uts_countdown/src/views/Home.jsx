import { Component } from 'react';
import {
    StyleSheet, SafeAreaView, FlatList, TouchableOpacity,
} from 'react-native';
import {
    View, Text, Button, Card,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import { btn, typ } from '../styles/index.js';
import { durationHelper, events, countdownHelper } from '../helper/index.js';

class Home extends Component {
    state = {
        list: [],
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this._getCountdownList();

        // Watch events.
        events.on('render:countdown-list', () => this._getCountdownList());

        // Interval.
        setInterval(() => {
            events.emit('render:countdown-list');
        }, 1000);
    }

    async _getCountdownList() {
        const array = await countdownHelper.getValues();
        array.sort((a, b) => a.counter.duration - b.counter.duration);
        array.forEach((item) => {
            const minute10 = 10 * 60 * 1000;
            item.color = '#616161';
            if (item.counter.duration <= minute10) item.color = '#fa983a';
            if (item.counter.duration <= 0) item.color = '#eb2f06';
        });
        await this.setState({ list: array });
    }

    async _clearDoneCountdown() {
        const array = this.state.list.filter((item) => item.status === 'end');
        const promises = [];
        array.forEach((item) => {
            promises.push(countdownHelper.delete(item.id));
        });
        await Promise.all(promises);
        this._getCountdownList();
    }

    render() {
        const display = this.state.list.length ? 'none' : 'flex';
        return (
            <View style={st.container}>

                <View style={st.header}>
                    <View style={st.headerContent}>
                        <Text style={[typ.h2]}>Daftar Hitungan</Text>
                    </View>
                    <TouchableOpacity style={{
                        position: 'absolute', right: 22, bottom: 15, zIndex: 2,
                    }} activeOpacity={0.6} onPress={() => this._clearDoneCountdown()}>
                        <MaterialIcons name='layers-clear' color='#000' size={24} />
                    </TouchableOpacity>
                </View>

                <SafeAreaView style={st.cardListContainer}>
                    <FlatList
                        data={this.state.list}
                        renderItem={(item) => this.renderList(item, this.props)}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>

                <View style={{ paddingHorizontal: 12, marginTop: 32, display }}>
                    <Text style={[typ.span, typ.center, typ.gray]}>Ups... Tidak ada data!</Text>
                    <Text style={[typ.span, typ.center, typ.gray]}>Tambahkan dengan menekan tombol di bawah!</Text>
                </View>

                <View style={st.footer}>
                    <Button style={[btn.dark, btn.lg]} label="Tambah" onPress={() => this.navigation.navigate('Add')}/>
                </View>

            </View>
        );
    }

    renderList({ item }, props) {
        const toShowCountdown = () => {
            props.navigation.navigate('Countdown', { id: item.id });
        };
        const borderColor = item.state.playingSound ? '#eb2f06' : '#fff';

        return (
            <Card style={[st.card, { borderColor }]} onPress={() => toShowCountdown()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign style={{ marginRight: 12 }} name="clockcircle" color='#000' size={20} />
                    <Text style={[typ.h3]}>{ item.title }</Text>
                </View>
                <Text style={{ color: item.color }}>{ durationHelper.parse(item.counter.duration) }</Text>
            </Card>
        );
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        backgroundColor: '#fff',
        paddingTop: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#E3E3E3',
        position: 'relative',
    },
    headerContent: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    cardListContainer: {
        paddingTop: 18,
        paddingHorizontal: 20,
    },
    card: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        marginBottom: 20,
        shadowColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        paddingHorizontal: 24,
        paddingBottom: 32,
        paddingTop: 12,
    },
});

export default Home;
