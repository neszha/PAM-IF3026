/** Contoh closure 1 */
const car = (merek, year) => {
    const productionYear = year;
    return (type) => `${merek} ${type} ${productionYear}`;
};

const sedan = car('Honda', 2001);
const minivan = car('Mitsubisi', 1998);

sedan('Civic'); // Output: Honda Civic 2001
minivan('Pajero'); // Output: Mitsubisi Pajero 1998

/** Contoh closure 2 */
const setCounter = (number) => {
    let counter = number;
    const increment = () => {
        counter += 1;
        return counter;
    };
    const decrement = () => {
        counter -= 1;
        return counter;
    };
    return { increment, decrement };
};

const counter1 = setCounter(10);
const counter2 = setCounter(20);

counter1.increment(); // Output: 11
counter1.increment(); // Output: 12
counter2.decrement(); // Output: 19
counter2.decrement(); // Output: 18
