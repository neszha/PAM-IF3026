import delay from 'delay';
import { Audio } from 'expo-av';
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

    async save(id, data) {
        await AsyncStorage.setItem(`countdown:${id}`, JSON.stringify(data));
    },

    async delete(id) {
        await AsyncStorage.removeItem(`countdown:${id}`);
    },

    async playSound() {
        const { sound } = await Audio.Sound.createAsync(require('../assets/audios/alarm.mp3'));
        await delay(500);
        await sound.playAsync();
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
                    item.state.playingSound = true;
                    this.playSound();
                    setTimeout(() => {
                        item.state.playingSound = false;
                        this.save(item.id, item);
                    }, 10 * 1000);
                }
                this.save(item.id, item);
            });
        }, 1000);
    },
};
