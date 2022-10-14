import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header.js';
import CardForms from './CardForms.js';
import Footer from '../_components/Footer.js';
import NotificationScreen from '../_components/NotificationScreen.js';

class Search extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.backgroundBanner} />
                <NotificationScreen />
                <Header />
                <CardForms navigation={this.props.navigation}/>
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
    backgroundBanner: {
        height: 330,
        width: '100%',
        backgroundColor: '#6FB23E',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: -48,
        position: 'absolute',

    },
    textBold: {
        fontWeight: 'bold',
    },
});

export default Search;
