import { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import {
    View, Text, Button, Card,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
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
        await this.setState({ list: array });
    }

    render() {
        return (
            <View style={st.container}>

                <View style={st.header}>
                    <View style={st.headerContent}>
                        <Text style={[typ.h2]}>Daftar Hitungan</Text>
                    </View>
                </View>

                <SafeAreaView style={st.cardListContainer}>
                    <FlatList
                        data={this.state.list}
                        renderItem={(item) => this.renderList(item, this.props)}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>

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

        return (
            <Card style={st.card} onPress={() => toShowCountdown()}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign style={{ marginRight: 12 }} name="clockcircle" color='#000' size={20} />
                    <Text style={[typ.h3]}>{ item.title }</Text>
                </View>
                <Text style={[typ.gray]}>{ durationHelper.parse(item.counter.duration) }</Text>
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
