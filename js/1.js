// document.write("Hello World") // document

// alert("Hello World") // alert

// console.log("Hello World") //console: for testing mostly

let number1 = "11";
console.log("number1: ", parseInt(number1), typeof number1); // convert string to int

let number2 = 55;
number2 = number2.toString();
console.log(number2, typeof number2); // convert int to string

let usernamee = "can";
const DOMAIN = "google.com";

let email = usernamee + "@" + DOMAIN;

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Hello ${usernamee} welcome to our website.. 
e-mail: ${email}
e-mail length: ${email.length}
payment: ${(2 + 3) * 10} TL
hour of the day : ${new Date().getHours()}
short name: ${usernamee[0]}.
`;
console.log(info);

let mail = "can@google.com";
let firstName = "can";
let lastName = "BİLDİREN";

// string length
console.log(mail.length);

// first char
console.log(firstName[0]);
console.log(firstName.charAt(0));

// upper - lower case
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// search inside of a string
console.log(mail.search("@"));
console.log(mail[15]);

mail.search("not"); // -1

// slice
let domain = mail.slice(mail.search("@") + 1);
console.log(domain);

console.log(
  domain.slice(0, domain.indexOf(".")) // get gmail part only
);

// replace
mail = mail.replace("gmail.com", "google.com");
console.log(mail);

//  includes boolean
mail.includes("dkfhsd"); // false
mail.includes("@"); // true

// startsWidth, endsWidth :
console.log(mail.endsWith("google.com"));

// first letters uppercase
firstName = "FIRST";
lastName = "LAST";
let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;

// document object model

document.body.style.backgroundColor = "grey";

let title = document.getElementById("test");
title.innerHTML = "test2";
console.log(title.innerHTML);

let link = document.querySelector("#linkinfo");
link.innerHTML += " has changed";
link.style.color = "red";
console.log(link.innerHTML);

// prompt: take input from user

//let fullNamee = prompt("Please Enter Name: ");

// let intro = document.querySelector("#intro");
// intro.innerHTML = ` ${intro.innerHTML}<small style="color:red">${fullNamee}`

// lists and list elements

let lastChild = document.querySelector("ul#list2>li:last-child");
lastChild.innerHTML = "last child has changed";

let firstChild = document.querySelector("ul#list2>li:first-child");
firstChild.innerHTML = "first child has changed";

// adding element
let ulDOM = document.querySelector("ul#list2");
let liDOM = document.createElement("li");

liDOM.innerHTML = "qweqwe";
ulDOM.append(liDOM); // adds to end of the list
ulDOM.prepend(liDOM); // adds to start of the list

// adding css class

let intro = document.querySelector("#intro");

intro.classList.add("text-primary");
intro.classList.add("title");
intro.classList.add("new-info", "second-class", "third-class"); // add more than one

intro.classList.remove("new-info"); // can delete more than one

console.log(intro.classList);

// logic - if else

let price = "100";
let user = "can";

// is it equal?
console.log(price == 1);
console.log(price == 100);

// is it equal and same type?
console.log(price === 1);
console.log(price === 100);

// is it not equal?
console.log(price != 1);

// is it less than
console.log(price < 100);
console.log(price <= 100);

// is it bigger
console.log(price > 100);
console.log(price >= 100);

// && and
console.log(price > 0 && user != "guest");

// || or
console.log(price > 0 || user != "guest");

// ! not
console.log(price > 0 && !user != "guest");

// if
//let username = prompt("Enter username: ");

// if (username.length > 3) {
//   console.log(`Username: ${username}`);
// } else {
//   console.log("no info");
// }

// ternary
// let username = prompt("Enter username: ");

// let info2 = document.querySelector("#info")
// info2.innerHTML = `${username.length > 0 ? username: "Could not find info"}`