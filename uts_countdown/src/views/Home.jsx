import { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    View, Text, Button, Card,
} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import { btn, typ } from '../styles/index.js';

class Home extends Component {
    render() {
        return (
            <View style={st.container}>

                <View style={st.header}>
                    <View style={st.headerContent}>
                        <Text style={[typ.h2]}>Daftar Hitungan</Text>
                    </View>
                </View>

                <View style={st.cardListContainer}>
                    <Card style={st.card} onPress={() => console.log('pressed')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign style={{ marginRight: 12 }} name="clockcircle" color='#000' size={20} />
                            <Text style={[typ.h3]}>KUIS 1 PAM - RA</Text>
                        </View>
                        <Text style={[typ.gray]}>00.00.00:56</Text>
                    </Card>
                    <Card style={st.card} onPress={() => console.log('pressed')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign style={{ marginRight: 12 }} name="clockcircle" color='#000' size={20} />
                            <Text style={[typ.h3]}>KUIS 1 PAM - RB</Text>
                        </View>
                        <Text style={[typ.gray]}>00.00:56</Text>
                    </Card>
                </View>

                <View style={st.footer}>
                    <Button style={[btn.btnDark, btn.btnLg]} label="Tambah" />
                </View>

            </View>
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
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        paddingHorizontal: 24,
        paddingBottom: 32,
        paddingTop: 12,
    },
});

export default Home;
