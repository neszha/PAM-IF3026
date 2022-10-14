import { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Search extends Component {
    render() {
        return (
            <View>
                <View style={styles.background}>
                    <View style={styles.backgroundBanner} />
                    <Text style={styles.textBold}>Halama Home</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0F0F0',
        height: '100vh',
    },
    backgroundBanner: {
        backgroundColor: '#6FB23E',
        minHeight: 350,
        height: '50vh',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    textBold: {
        fontWeight: 'bold',
    },
});

export default Search;
