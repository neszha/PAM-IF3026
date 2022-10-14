import { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import FormTextInput from './FormTextInput.js';

class CardForms extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <View style={[styles.mb3]}>
                        <FormTextInput label="Lokasi Keberangkatan" placeholder="Masukan lokasi keberangkatan" icon="plane-departure" />
                    </View>
                    <View style={[styles.mb3]}>
                        <FormTextInput label="Lokasi Tujuan" placeholder="Masukan lokasi tujuan" icon="plane-arrival" />
                    </View>
                    <View style={[styles.mb3]}>
                        <FormTextInput label="Tanggal Keberangkatan" placeholder="Masukan tanggal keberangkatan" icon="calendar" />
                    </View>
                    <View style={[styles.mb3]}>
                        <Button title="CARI" color="#E47D24" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 34,
        marginTop: -260,
    },
    mb3: {
        marginBottom: 24,
    },
    card: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 8,
    },
});

export default CardForms;
