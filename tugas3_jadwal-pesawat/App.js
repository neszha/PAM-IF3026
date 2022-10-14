import { View } from 'react-native';
import Search from './src/pages/Search/index.js';
import SearchResult from './src/pages/SearchResult/index.js';

export default function App() {
    return (
        <View>
            <Search />
            <SearchResult />
        </View>
    );
}
