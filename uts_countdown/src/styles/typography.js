import { StyleSheet } from 'react-native';

const color = '#212121';

const typography = StyleSheet.create({
    h1: {
        fontFamily: 'Urbanist-Black',
        fontSize: 30,
        color,
    },
    h2: {
        fontFamily: 'Urbanist-Black',
        fontSize: 24,
        color,
    },
    h3: {
        fontFamily: 'Urbanist-Black',
        fontSize: 18,
        color,
    },
    gray: {
        color: '#616161',
    },
});

export default typography;
