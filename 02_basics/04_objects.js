// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email:"someUser@gmail.com",
    fullName:{
        userfullname:{
            firstname:'hitesh',
            lastname:'choudhary'
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    1:"c",
    2:"d"
}

const obj3 = {obj1,obj2}
// console.log(obj3)

const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4)

// spread operator
const obj5 = {...obj1,...obj2} 


// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));



const course = {
    courseName : "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}


// destructuring in objects

const {courseInstructor} = course


console.log(courseInstructor);

const {courseInstructor:instructor} = course;

console.log(instructor);
