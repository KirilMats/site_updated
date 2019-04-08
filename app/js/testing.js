// class Cat{
// 	constructor(length, age){
// 		this.length = length;
// 		this.age = age;
// 	}
// 	eat(b){
// 		this.a = console.log(b);
// 	}
// }
// class BobCat extends Cat{
// 	constructor(length, age, color){
// 		super(length, age);
// 		this.color = color;
// 	}
// 	eat2(){

// 	}
// }
// var cat1 = new Cat(20, 5);
// var bobcat1 = new BobCat(15, 4, 'red');
// console.log(cat1);
// bobcat1.eat('snack');
// function Cat(length, age){
// 	this.length = length;
// 	this.age = age;

// 	this.getAge = function(){
// 		return this.age;
// 	}
// }
// function BobCat(color){
// 	this.color = color;
// 	this.getColor = function(){
// 		return this.color;
// 	}
// }
// var cat1 = new Cat(20, 5);
// BobCat.prototype = cat1;
// var bobcat1 = new BobCat(15, 4, 'red');
// console.log(cat1);
// console.log(bobcat1);
// console.log(cat1.getAge());
// console.log(bobcat1.getAge());
// console.log(bobcat1.getColor());

// class Cat{

// 	constructor(catName){
// 		this.catName = catName;
// 	}

// 	getName(){
// 		return this.catName;
// 	}
// };

// class BobCat extends Cat{

// 	constructor(weight ,catName){
// 		super(catName);
// 		this.weight = weight;
// 	}

// };

// let newBobCat = new BobCat(10, "sir");
// let cat1 = new Cat('murchick');

// console.log(cat1);
// console.log(cat1.getName());

// function Student(firstName, lastName, dob){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = dob;
// }

// Student.prototype.getAge = function(){
// 	let now = new Date();

// 	return now.getFullYear() - this.dob;
// }

// let student1 = new Student('Alex', 'Depp', 1997);

// console.log(student1);
// console.log(student1.getAge());

