import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header.js';
import Footer from '../_components/Footer.js';
import NotificationScreen from '../_components/NotificationScreen.js';

class SearchResult extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <NotificationScreen />
                <Header navigation={this.props.navigation}/>

                <View style={styles.head}>
                    <Text style={[styles.textWhite, styles.textCenter]}>Hasil Pencarian Keberangkatan</Text>
                    <Text style={[styles.textWhite, styles.textCenter]}>(12-13-2002)</Text>
                </View>

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
