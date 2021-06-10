
function one1()
{
  return {
      bar: "hello"
  };
}

function two2()
{
  return
  {
      bar: "hello"
  };
}

// THis function can not run unless we call the function. If we have called the function
// The out but will be The first hello because function  one has printed out so it won't print second 
// function since it not even colleback function

//  To craete an object in javascript
//  first have the list of name: name="Jeannine" inside {}
//  Have keyworld new to create new valiable
//  define object contractor
//  create object using object.create()

const person = {
    country: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Iam from? ${this.country}`);
    }
  };

  const names = Object.create(person);

  names.name = 'Jeannine';
  names.country = true;

  names.printIntroduction();

// there are two scope in JS

//    Local scope :  They are valiable to the function that occurs when a variable is defined “inside of a function”. Means they can be 
//     Global scope : accesed within only that function(scope) While Global scope they are variuables that 
// can be accesible everywhere in the scope because it's global.
// Glob
// global scope variable
let a = "hello";

function greet() {
    a = 3;
}


console.log(a);

greet();
console.log(a);

// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // This will give you error cause variable a is not global so function greet can not access.


function quiz()
{
   var userName = document.booking.userName.value;
   var userSubject = document.booking.Subject.value;
   var userClass = document.booking.Class.value;
   var userDate = document.booking.date.value;

   document.writeln("Thank you! You have just entered the following:");
   document.writeln("<pre>");
   document.writeln("Name: " + userName);
   document.writeln("Date: " + userSubject);
   document.writeln("Time: " + userDate);

}






