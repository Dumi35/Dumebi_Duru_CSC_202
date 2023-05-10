import logger,{appName,dummyFunction,genericFunction,genericFunction2, genericFunction3,genericFunction4,genericFunction5} from './tools.js'

logger(`Welcome! The application name is "${appName}". There is
a function that returns "${dummyFunction()}" "${genericFunction2()}" .`); 

logger(`${genericFunction4(2,6)}`)

try{
    logger(genericFunction4(5,11,23,45,5.5));
}catch(error){
    logger(error.message)
} 

logger(`${genericFunction5(2,3,4,5,6,7)}`) 

logger(" ")

import {Person,User} from './tools.js';
let person1 = new Person("Pius", "Onobhayedo", "Male",1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);

logger(`Person 1 is ${person1.firstName} whose height is ${person1.height}. Person 2 is ${person2.firstName} whose
    height is ${person2.height}`); 


new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(`Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am
        sending a <em>reject</em> instead of a <em>resolve</em>!`); //send out a reject feedback
    }, 3000)
}).then((data) => {
        //This should output "Timeout is over" if resolve("Timeout is over") is invoked
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
        logger(`Error message received: ${error}`);
    })
    //Let us still maintain the last logger statement so that we can illustrate better how the asynchronous call that returns
    //after the timeout does not stop the main execution thread.

logger(" ")

let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined);
    
logger(`The username of ${user1.firstName} is ${user1.username}`)



new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(`Timeout is over but I am upset. Don't be a babash girl. Ok boss.`); //send out a reject feedback
    }, 3000)
}).then(
        (data) => {
            //This should output "Timeout is over" if resolve("Timeout is over") is invoked
        },
        (error)=>{
            logger("This is fun")
        }
    
    )

logger(" ")
//fetch

let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1
fetch(url)
.then(response => response.json()) //convert data returned to json
.then(data => logger(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data
.catch(error => logger(`Error: ${error}`));

logger(" ")

let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())

Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array.
    .then((data)=>{
    logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
    logger(" ")
    })


