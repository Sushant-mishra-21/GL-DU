function test(){
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Accord", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2005 },
  { make: "Chevrolet", model: "Camaro", year: 2020 },
  { make: "Nissan", model: "Altima", year: 2012 }
];

//ascending order
cars.sort((a,b)=>a.year-b.year);
console.log(cars);
//descending order
cars.sort((a,b)=>b.year-a.year)
console.log(cars);
//sorting based on alphabets
cars.sort((a, b) => a.make.localeCompare(b.make));
console.log(cars);
}
test();


