/** Assign ke variabel */
const sayHay = () => {
    console.log('Hay, Fanesa Hadi Pramana');
};
const sayHello = () => {
    console.log('Hello, Fanesa Hadi Pramana');
};
sayHay(); // Hay, Fanesa Hadi Pramana
sayHello(); // Helo, Fanesa Hadi Pramana

/** Assing ke object */
const objs = { sayHay, sayHello };
objs.sayHay(); // Hay, Fanesa Hadi Pramana
objs.sayHello(); // Helo, Fanesa Hadi Pramana

/** Assign ke array */
const array = [sayHay, sayHello];
array[0](); // Hay, Fanesa Hadi Pramana
array[1](); // Helo, Fanesa Hadi Pramana

/** Parsing ke dalam argument */
const say = (method) => {
    method();
};
say(sayHay); // Hay, Fanesa Hadi Pramana
say(sayHello); // Helo, Fanesa Hadi Pramana
