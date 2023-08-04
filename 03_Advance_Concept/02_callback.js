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

function register(cb) {
  setTimeout(() => {
    console.log("Register End");
    cb();
  }, 1000);
}

function sendEmail(cb) {
  setTimeout(() => {
    console.log("Email end");
    cb();
  }, 2000);
}

function login(cb) {
  setTimeout(() => {
    console.log("login End");
    cb();
  }, 3000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log("got User Data");
    cb();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("user data displayed");
  }, 1000);
}

// callback hell

register(function () {
    sendEmail(function () {
            login(function () {
                    getUserData(function () {
                                displayUserData();
                    });
            });
    });
});

console.log("other application work");
