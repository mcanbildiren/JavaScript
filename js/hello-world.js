// document.write("Hello World") // document

// alert("Hello World") // alert

// console.log("Hello World") //console: for testing mostly

let number1 = "11";
console.log("number1: ", parseInt(number1),typeof(number1)); // convert string to int

let number2 = 55;
number2 = number2.toString();
console.log(number2,typeof(number2)); // convert int to string

let username = "can"
const DOMAIN = "google.com"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}
kisa isminiz: ${username[0]}.
`
console.log(info)


let mail = "can@google.com"
let firstName = "can"
let lastName = "BİLDİREN"

// string length
console.log( mail.length )

// first char
console.log(firstName[0])
console.log(firstName.charAt(0))

// upper - lower case
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// search inside of a string
console.log(mail.search("@"))
console.log( mail[15] )

mail.search('olmayan') // -1

// slice
let domain = mail.slice( mail.search("@") + 1)
console.log(domain)

console.log(
    domain.slice(0, domain.indexOf('.') )  // get gmail part only
)

// replace 
mail = mail.replace('gmail.com', 'kodluyoruz.org')
console.log(mail)

//  includes boolean
mail.includes('dkfhsd') // false
mail.includes('@') // true

// startsWidth, endsWidth :
console.log(
    mail.endsWith('kodluyoruz.org')
)

// first letters uppercase
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

