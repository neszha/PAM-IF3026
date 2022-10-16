import AsyncStorage from '@react-native-async-storage/async-storage';

export default {

    async getKeys() {
        const allKeys = await AsyncStorage.getAllKeys();
        const keys = allKeys.filter((item) => item.includes('countdown:'));
        return keys;
    },

    async getValues() {
        const keys = await this.getKeys();
        const values = await AsyncStorage.multiGet(keys);
        const array = values.map((item) => JSON.parse(item[1]));
        return array;
    },

    runtime() {
        return setInterval(async () => {
            const array = await this.getValues();
            const countdowns = array.filter((item) => item.status === 'play');
            countdowns.forEach((item) => {
                item.counter.duration -= 1000;
                if (item.counter.duration <= 0) {
                    item.status = 'end';
                    item.counter.duration = 0;
                }
                AsyncStorage.setItem(`countdown:${item.id}`, JSON.stringify(item));
            });
        }, 1000);
    },
};
