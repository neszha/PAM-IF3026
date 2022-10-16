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
    span: {
        fontFamily: 'Urbanist-Regular',
        fontSize: 14,
        marginBottom: 4,
    },
    gray: {
        color: '#616161',
    },
    light: {
        color: '#fff',
    },
    center: {
        textAlign: 'center',
    },
});

export default typography;
