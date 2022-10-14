import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './pages/Search/index.js';
import SearchResult from './pages/SearchResult/index.js';

const Stack = createNativeStackNavigator();
const options = { headerShown: false };

class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Search" screenOptions={options}>
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="SearchResult" component={SearchResult} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigator;
