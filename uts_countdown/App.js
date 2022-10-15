import { Component } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import Welcome from './src/views/Welcome.jsx';
import Home from './src/views/Home.jsx';

class App extends Component {
    state = {
        fontLoaded: false,
    };

    async _loadFonts() {
        const fonts = {
            'Urbanist-Black': require('./src/assets/fonts/urbanist/Urbanist-Black.ttf'),
        };
        await Font.loadAsync(fonts);
        this.setState({ fontLoaded: true });
    }

    componentDidMount() {
        this._loadFonts();
    }

    render() {
        // Waiting font loaded.
        if (!this.state.fontLoaded) return null;

        return (
            <View style={st.container}>
                <StatusBar style="auto" />
                <Home />
            </View>
        );
    }
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
    },
});

export default App;
