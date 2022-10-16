import { Component } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/Navigator.jsx';
import { countdownHelper } from './src/helper/index.js';

countdownHelper.runtime();
class App extends Component {
    state = {
        fontLoaded: false,
    };

    async _loadFonts() {
        const fonts = {
            'Urbanist-Black': require('./src/assets/fonts/urbanist/Urbanist-Black.ttf'),
            'Urbanist-Regular': require('./src/assets/fonts/urbanist/Urbanist-Regular.ttf'),
        };
        await Font.loadAsync(fonts);
        this.setState({ fontLoaded: true });
    }

    componentDidMount() {
        this._loadFonts();
    }

    render() {
        if (!this.state.fontLoaded) return null;
        return (
            <View style={st.container}>
                <StatusBar style="auto" />
                <Navigator />
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
