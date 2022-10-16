import formatDuration from 'format-duration';

export default {
    parse(number) {
        return formatDuration(number);
    },
};
