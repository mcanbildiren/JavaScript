// local storage 5mb chrome
// key-value
localStorage.setItem("can", "bildiren");

localStorage.getItem("can");

let user = { userName: "mcanbildiren", isActive: true };

// for complex data, convert to string using JSON
localStorage.setItem("userInfo", JSON.stringify(user));

// to convert back
let userInfo = localStorage.getItem("userInfo");
userInfo = JSON.parse(userInfo);

console.log(userInfo);
