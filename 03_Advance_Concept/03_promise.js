// callback

/*
  1. Register
  2. send welcome email
  3. Login
  4. get user data
  5. display user data
*/

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms){}
// }

function register() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // return reject("Error while registering");
            console.log("Register End");
            resolve();
          }, 1000);
    });


  }
  
  function sendEmail() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Email end");
            resolve();
          }, 2000);
    })

  }
  
  function login() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("login End");
            resolve();
          }, 1000);
    })

  }
  
  function getUserData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("got User Data");
            resolve();
          }, 1000);
    })

  }
  
  function displayUserData() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("user data displayed");
            resolve();
          }, 1000);
    })

  }
  
  // callback hell
  
//   register(function () {
//       sendEmail(function () {
//               login(function () {
//                       getUserData(function () {
//                                   displayUserData();
//                       });
//               });
//       });
//   });


//   method chainging in promises

  register()
        .then(sendEmail)
        .then(login)
        .then(getUserData)
        .then(displayUserData)
        .catch((err) => {
            console.log(err);
        })






  
  console.log("other application work");
  