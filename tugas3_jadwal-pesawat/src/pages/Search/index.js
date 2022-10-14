import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header.js';
import CardForms from './CardForms.js';
import Footer from '../_components/Footer.js';

class Search extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.backgroundBanner} />
                <Header />
                <CardForms />
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
    backgroundBanner: {
        backgroundColor: '#6FB23E',
        height: 320,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginTop: -48,
    },
    textBold: {
        fontWeight: 'bold',
    },
});

export default Search;
