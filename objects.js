let car = [
    {make: 'Maruti', model: 'Ertiga', year: 2018, describe: console.log(`This cars are from ${this.make} in year ${this.year}`)},
    {make: 'Toyota', model: 'corolla', year: 2020, describe: console.log(`This cars are from ${this.make} in year ${this.year}`)},
    {make: 'cheverlette', model: 'chenzen', year: 2029, describe: console.log(`This cars are from ${this.make} in year ${this.year}`)}
];
car.model = 'modify';
console.log(car.describe);
let carmodel = car.model;
console.log(carmodel);
car.forEach(car => {console.log(`Make: ${ this.make }, Model: ${ this.model }, Year: ${ this.year }`);})
let person = {
    name: 'Alice',
    age: 30,
    address: {
        street: '123 street',
        city: 'new york',
        zipcode: '12345'
    }
};
console.log(`Address: ${ person.address.street }, ${ person.address.city }, ${ person.address.zipcode }`);
delete car.year;
console.log(car);
delete person.age;
console.log(person);
let pluto = {
    planet: true,
    distance: 1300,
}
console.log(pluto);
delete pluto.distance;
console.log(pluto);





// console.log(car);
// console.log(car.year);

function CompareObjects(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }
    for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Creating two objects for comparison
let car1 = { make: "Toyota", model: "Corolla", year: 2021 };
let car2 = { make: "Toyota", model: "Corolla", year: 2021 };

// Comparing the two objects
console.log("Are car1 and car2 equal?", CompareObjects(car1, car2));

