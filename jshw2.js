//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function faveFoods(){
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
}

console.log(faveFoods())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name;
    this.age = age;
    
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        return "Returned name and age"
    }
    this.birthday = () => {
        let counter = this.age++; 
        console.log('Happy Birthday!');
        // console.log(counter)
        return counter
    } 
}

let james = new Person('James', 30)
let jane = new Person('Jane', 29) 

console.log(james.printInfo())
console.log(jane.printInfo())

james.birthday.call(this.age)
james.birthday.call(this.age)
james.birthday.call(this.age)





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringSize = (aString) => {
    return new Promise( (reslove,reject) => {
        if(aString.length > 10){
            reslove(true)
        } else {
            reject(false)
        }
    })
}

let stringOne = "antidisestablishmentarianism"
stringSize(stringOne)

let stringTwo = "small"
stringSize(stringTwo)

.then( (result) => {
    console.log("Big word")
})
.catch( (error) => {
    console.log("Small number")
})




