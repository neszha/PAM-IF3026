import formatDuration from 'format-duration';

export default {
    parse(number) {
        const string = formatDuration(number);
        const array = string.split(':');
        if (array[0].length === 1) array[0] = `0${array[0]}`;
        return array.join(':');
    },

    parseMaster(number) {
        const string = this.parse(number);
        const len = string.split(':').length;
        if (len === 2) return `00:00:${string}`;
        if (len > 2) return `00:${string}`;
        return string;
    },
};
