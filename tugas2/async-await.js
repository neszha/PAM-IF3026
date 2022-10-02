/** Asynchronous process */
const process = (status) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 'running') resolve();
            else reject();
        }, 5000);
    });
    return promise;
};

/** Handdle with callback */
process('running').then(() => {
    console.log('done');
}).catch(() => {
    console.log('error');
}); // done

/** Handdle with async/await */
(async () => {
    try {
        await process('end');
        console.log('done');
    } catch (error) {
        console.log('error');
    }
})(); // error
