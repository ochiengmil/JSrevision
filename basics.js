//1.Variables
//1. Defining  Variables
//1.2.1 using the var keyword

var firstName;

//without using the var keyword
lastName = 'Mburugu';

//Basic Math
//Javascript Math operators follow the BODMAS convention
problemOne = (5+2)-4/2*2;
console.log(problemOne);

//If statements
//If else if else if
//This type of if statement allows us to check for multiple truth values.
//PLEASE NOTE: The first expression that evaluates to true, is the only one that gets executed.
age = 18;

if (age<18){
  console.log('Not an adult');

} else if (age===18) {
  console.log('Is an adult');
} else if (age>18) {
  console.log('Over adult age');
} else if (age%2===0) {
  console.log('Age is an even number');

}


//Switch statement
//This is similar to the if else if, else if statement
switch(age){
	case 20:
		console.log('case: You are an adult');
		break;
		case 17:
		console.log('case: You are not an adult');
		break;
		case 19:
		console.log('case: You are above the adult age');
		break;
		default:
		console.log('case: Your age is not accounted for');

}


//Arrays
//Arrays in Javascript belong to the Object data type
//They are used to store lists and have zero indexed keys.
years = [];

//Populated with array 
names = ['Vincent', 'Munene', 'George', 'Harrison'];

//Exercise
carModels = ['BMW', 'Mercedes', 'Toyota', 'Nissan', 'SCANIA', 'OPEL'];

//Common operations on arrays 
//Retrieving elements
//using the index
//indexing from 0
console.log (carModels[2]);
//Adding elements
//Using concatenation
newCarModels = carModels.concat(['Subaru', 'Honda']);
console.log('New Car Models', newCarModels);

//Using the push method
//Push is a destructive method. It manipulates the original array

carModels.push('Escallade');
console.log('Car models after push: ', carModels);
//Removing elements
//To remove the last element of an array
//Using the pop method
carModels.pop();
console.log('Car models after pop: ', carModels);

//Finding length of an array
numberOfCarModels = carModels.length
console.log('Number of Car Models: ', numberOfCarModels);

//Adding and Removing elements at a particular index
//Using the splice method
//Removing
carModels = ['BMW', 'Mercedes', 'Toyota', 'Nissan', 'SCANIA', 'OPEL'];
carModels.splice(2, 1);
console.log('Car Models after removing using splice:', carModels);
//Adding
carModels.splice(2, 0, 'Vitz');
console.log('Car Models after adding using splice', carModels);

//Objects
//Definition and initialization
//Empty object 
person = {};
//Populated object
customer = {
	name: 'Dennis',
	age: 100,
	loyalty_points: 50 
};

car = {
	model: 'Isuzu',
	yearOfManufacture: '2005',
	numberPlate: 'KBD',
	color: 'silver',
	type: 'saloon'

};
car['counry_of_origin'] = 'Germany';
console.log(car);

//Common operations on Objects
//Accessing values
//using the 'dot' notation

console.log('Car Model', car.model);

//Using brackets
yearOfManufacture = car['yearOfManufacture'];
console.log('Using brackets: yearOfManufacture');

//Changing values
car.yearOfManufacture = '2010'
car['name'] = 'Prado';
console.log('Updated object', car);
//Functions
//Exercise:
//Define a function called createContact that takes in the arguments, name and phoneNumber
//Named fumctions
function createContact(name,phoneNumber){

}

// function makeTea(){

// }
//Anonymous functions
//This function should buy coffee
// function(){

// }

//Using functions
//To use or run a function you have to call it
//Calling named functions
makeTea();

//Naming anonymous functions
buyCoffee = function(){

}
buyCoffee();
//to make tea we need tea leaves, milk, water, sugar
function makeTea(teaLeaves,milk,water){
	console.log(teaLeaves,milk,water);
}

makeTea('Fresha','City council','ketepa');

function orderFood(restaurantName, price, foodName){
	order = {};
	order.restaurantName = restaurantName
	order.price = price
	order.foodName = foodName 

}

orderFood = {}