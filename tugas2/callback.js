const finish = () => {
    console.log('Finish');
};
const process = (callback) => {
    console.log('Run process');
    setTimeout(() => callback(), 5000);
};

process(finish);
/**
 * Output:
 * Run process
 * Finish
 */
