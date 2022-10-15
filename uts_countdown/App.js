import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-ui-lib';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Open up App.js to start working on your app!</Text>
            <Button
                backgroundColor="orange"
                label="Haii....."
                borderRadius={7}
                style={{ height: 45, marginBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
