function test(){
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
var total = 0;
people.map((item)=>{
	total +=item.age;
})
console.log(total/people.length)

}
test();
