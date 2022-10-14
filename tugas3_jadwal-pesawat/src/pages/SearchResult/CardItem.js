import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5.js';

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.jadwal = props.data;
    }

    render() {
        return (
            <View style={styles.wrapper}>

                <View style={{ flexDirection: 'row', marginBottom: 28 }}>
                    <Text style={{ fontWeight: 'bold' }}>({ this.jadwal.keberangkatan.nama })</Text>
                    <Text style={{ marginHorizontal: 12 }}>-</Text>
                    <Text style={{ fontWeight: 'bold' }}>({ this.jadwal.tujuan.nama })</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                    <View style={styles.iconWrapper}>
                        <FontAwesome name='plane' size={26} color='#6FB23E' />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ this.jadwal.maskapai.nama }</Text>
                </View>

                <View>
                    <Text style={{ textAlign: 'right', color: '#51519D', fontWeight: 'bold' }}>({ this.jadwal.berangkat })</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 22,
        borderRadius: 8,
        marginBottom: 12,
    },
    iconWrapper: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotateZ: '-90deg' }],
        marginRight: 12,
    },
});

export default CardItem;
