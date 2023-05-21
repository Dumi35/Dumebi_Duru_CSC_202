const logger = output => {
    console.log(output)
}
export const appName = "ES6 Review";

export const dummyFunction = () => {
    let feedback = "I am a dummy function"; //mutable variable
    feedback = "I am still a dummy function";//value changed
    return feedback;
}

export default logger;

export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements
    const [firstLang, secondLang, ...otherLangs] = languages; // we are declaring more than one variable and assign first element in languages array to firstLang and second element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}. Other languages are ${otherLangs}`
}

export const genericFunction2 = () => {
    //declare an object literal
    let personalInformation = {
        firstName : 'Pius',
        lastName : 'Onobhayedo',
        gender : 'Male',
        religion : 'Christianity (Catholic)',
        fathersName : 'John',
        mothersName : 'Patricia'
    }
        //deconstruct into new variables firstName, last name and otherPersonalInfo
    let {firstName, lastName, ...otherPersonalInfo} = personalInformation;
    
    return `The first name is ${firstName} and the lastName is ${lastName}. Others are: gender = ${otherPersonalInfo.gender};
     religion = ${otherPersonalInfo.religion}; etc.`;
}


export const genericFunction3 = () => {
    //declare an object literal with nested objects
    let biodata = {
    personalInformation : {
    firstName : 'Pius',
    lastName : 'Onobhayedo',
    gender : 'Male',
    religion : 'Christianity (Catholic)',
    fathersName : 'John',
    mothersName : 'Patricia'
    },
    education : {
    highestQualificationObtained : 'PhD',
    institution : 'University of Navarra'
    },
    occupation : 'University Lecturer',
    skills : ['Programming', 'Teaching', 'Innovation','Talent management'],
    interestsAndHobbies : ['Tennis', 'Soccer Leagues', 'Tech Innovation News']
    };
    //deconstruct firstName, lastName from the nested personalInformation object as well as occupation.
    let {personalInformation : {firstName, lastName}, occupation} = biodata;//makes firstName, lastName and occupation directly available as variables within our function.
    //deconstruct personalInformation and then the rest using the spread operator
    let {personalInformation, ...otherBiodata} = biodata;/*makes personalInformation object directly available as a
    variable. The rest (using Spread operator) are made available as part of an object named
    otherBiodata*/
    //output data using a multiline string literal. We have embedded <br/> so that the browser will break the lines aswell for us
    return `First name is ${firstName} and lastname is ${lastName}. The occupation is ${occupation}. A lot more data
    are available. For example: 
    Gender: ${personalInformation.gender}
    Religion: ${personalInformation.religion}
    Skills: ${otherBiodata.skills}
    Interests and Hobbies: ${otherBiodata.interestsAndHobbies}
    Education: Highest qualification obtained is ${biodata.education.highestQualificationObtained} 
    from ${biodata.education.institution}`;
}

export const genericFunction4=(...numbers)=>{
    if (numbers.length<2){
        throw new Error("Arguments must be at least two");
    }

    let product = 1;
    for (let i=0; i<numbers.length;i++){
        product*=numbers[i]
    }
    return product;
}

export const genericFunction5 = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed.
    //Map the array of x into an array of {x,y} object, with the y value calculated each time.
    let coordinates = x.map((x) => {
        return {'x': x, 'y' : (m*x) + c};
    })
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the
    //forEach() method of array object or use the for…of loop introduced in ES6 as shown below
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates){
        let xy = `(${coordinate.x},${coordinate.y})`
        output+=xy;
    }
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario)
    //coordinates.forEach((coordinate)=>{
    // let xy = `(${coordinate.x},${coordinate.y})`;
    // output+=xy;
    //})
    return output;
}   

export class Person{
    constructor(firstName, lastName, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
};

export class User extends Person{
    constructor(username, password, firstName, lastName, gender, height){
        super(firstName, lastName, gender, height);
        this.username = username;
        this.password = password;
    }
}


export const promiseAwareTimeout = (milliseconds=1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using
            resolve
            }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}

export const fetchData = (url="https://jsonplaceholder.typicode.com/users/1") => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    fetch(url).then(response => response.json()).then(data => 
        logger(`The Data includes: Id = ${data.id}, Name = ${data.name}`)
    ) //
}
