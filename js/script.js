"use strict";

const button = {
    name: 'mainButton',
    bgColor: 'red',
    border: 'black',
    borderRadius: '10px',
    sizes: {
        width: '50px',
        height: '15px'
    },
    makeTest: function() {
        console.log('Test');
    }
};

button.makeTest();

const {width, height} = button.sizes;
console.log(width);

// console.log(Object.keys(button).length);
// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in button) {
    if (typeof(button[key]) === 'object') {
        for (let i in button[key]) {
            console.log(`Свойство ${i} имеет значение ${button[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${button[key]}`);
        counter++;
    } 
}

console.log(counter);