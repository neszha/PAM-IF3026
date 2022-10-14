import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js';
import Footer from '../_components/Footer.js';

class SearchResult extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Header />

                <View style={styles.head}>
                    <Text style={[styles.textWhite]}>Hasil Pencarian Keberangkatan</Text>
                    <Text style={[styles.textWhite]}>(12-13-2002)</Text>
                </View>

                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        backgroundColor: '#F0F0F0',
        height: '100vh',
        paddingTop: 48,
    },
    head: {
        textAlign: 'center',
        backgroundColor: '#6FB23E',
        paddingVertical: 18,
        marginTop: -2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    textWhite: {
        color: '#fff',
    },
});

export default SearchResult;
