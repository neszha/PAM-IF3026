import { Component } from 'react';
import {
    StyleSheet, Text, View, FlatList, SafeAreaView,
} from 'react-native';
import Header from './Header.js';
import CardItem from './CardItem.js';
import Footer from '../_components/Footer.js';
import NotificationScreen from '../_components/NotificationScreen.js';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jadwal: [
                {
                    id: 'J-01', bandaraKodeKeberangkatan: 'B-01', bandaraKodeTujuan: 'B-02', maskapaiId: 'M-03', berangkat: '10-11-2022 10:10 WIB',
                },
                {
                    id: 'J-02', bandaraKodeKeberangkatan: 'B-03', bandaraKodeTujuan: 'B-02', maskapaiId: 'M-02', berangkat: '10-11-2022 12:20 WIB',
                },
                {
                    id: 'J-03', bandaraKodeKeberangkatan: 'B-02', bandaraKodeTujuan: 'B-01', maskapaiId: 'M-04', berangkat: '10-11-2022 17:50 WIB',
                },
            ],
            maskapai: [
                { id: 'M-01', nama: 'Garuda Indonesia', logo: null },
                { id: 'M-02', nama: 'Pelita Air', logo: null },
                { id: 'M-03', nama: 'Lion Air', logo: null },
                { id: 'M-04', nama: 'AirAsia', logo: null },
            ],
            bandara: [
                { kode: 'B-01', nama: 'Soekarno-Hatta' },
                { kode: 'B-02', nama: 'Radin Inten II' },
                { kode: 'B-03', nama: 'Kualanamu' },
            ],
        };
    }

    getDaftarKeberangakatan() {
        const daftarKeberangkatan = [];
        const { jadwal, maskapai, bandara } = this.state;
        jadwal.forEach((dataJadwal) => {
            const data = { ...dataJadwal };
            data.keberangkatan = bandara.find((item) => item.kode === data.bandaraKodeKeberangkatan);
            data.tujuan = bandara.find((item) => item.kode === data.bandaraKodeTujuan);
            data.maskapai = maskapai.find((item) => item.id === data.maskapaiId);
            daftarKeberangkatan.push(data);
        });
        return daftarKeberangkatan;
    }

    renderList({ item }) {
        return <CardItem data={item}/>;
    }

    render() {
        const daftarKeberangkatan = this.getDaftarKeberangakatan();

        return (
            <View style={styles.wrapper}>
                <NotificationScreen />
                <Header navigation={this.props.navigation}/>

                <View style={styles.head}>
                    <Text style={[styles.textWhite, styles.textCenter]}>Hasil Pencarian Keberangkatan</Text>
                    <Text style={[styles.textWhite, styles.textCenter]}>(10-11-2022)</Text>
                </View>

                <SafeAreaView style={{ padding: 12 }}>
                    <FlatList
                        data={daftarKeberangkatan}
                        renderItem={this.renderList}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>

                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#F0F0F0',
    },
    head: {
        textAlign: 'center',
        backgroundColor: '#6FB23E',
        paddingVertical: 18,
        marginTop: 46,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    textWhite: {
        color: '#fff',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default SearchResult;
