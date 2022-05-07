function hello(){
    console.log("Hello!")
    helloWorld()
}

function helloWorld(){
    console.log("world")
}

hello()

let firstName = "Lorem"

function greetings(firstName=""){
    console.log(`Hello ${firstName}`)
}

greetings() // Hello
greetings("apple") // Hello apple
greetings(firstName) // Hello Lorem

function greetings2(firstName,lastName){
    let info =`Hello ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("First Name","Last Name")
console.log(greetingsInfo) // Hello First Name Last Name

function domIdWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">Color Red</span>`

domIdWriteInfo('test', htmlInfo)
domIdWriteInfo('intro',greetings2("Lorem","Ipsum"))