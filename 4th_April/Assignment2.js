function test(inp){
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { title: "1984", author: "George Orwell" },
  { title: "Animal Farm", author: "George Orwell" }
];
const result = books.filter(item =>  item.author === inp);
/* console.log(result) */
const res = result.map((item)=>{
	return item.title;
})
console.log(res);
}

test("George Orwell");
