import { Component } from 'react';
// import * as Font from 'expo-font';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
// import Navigator from './src/Navigator.jsx';
// import { countdownHelper } from './src/helper/index.js';

class App extends Component {
    state = {
        fontLoaded: false,
    };

    componentDidMount() {
        this._loadFonts();
    }

    async _loadFonts() {
        // const fonts = {
        //     'Urbanist-Black': require('./src/assets/fonts/urbanist/Urbanist-Black.ttf'),
        //     'Urbanist-Regular': require('./src/assets/fonts/urbanist/Urbanist-Regular.ttf'),
        // };
        // await Font.loadAsync(fonts);
        this.setState({ fontLoaded: true });
        // countdownHelper.runtime();
    }

    render() {
        if (!this.state.fontLoaded) return null;
        return (
            <View style={st.container}>
                {/* <StatusBar style="auto" /> */}
                {/* <Navigator /> */}
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
                <Text>Haiii</Text>
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
