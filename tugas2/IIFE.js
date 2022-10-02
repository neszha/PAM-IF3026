/** Deklarasi biasa */
const firstName = 'Fanesa';
const lastName = 'Hadi Pramana';
const getName = () => {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
};

console.log(firstName); // Fanesa
console.log(getName()); // Fanesa Hadi Pramana

/** Immediately Invoked Function Expression */
(() => {
    const firstName = 'Fanesa';
    const lastName = 'Hadi Pramana';
    const getName = () => {
        const fullName = `${firstName} ${lastName}`;
        return fullName;
    };

    console.log(firstName); // Fanesa
    console.log(getName()); // Fanesa Hadi Pramana
})();

console.log(firstName); // undefined
console.log(getName()); // undefined
