let passArea = document.getElementById("password")
let length = 12

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let speChar = "!@#$%^&*()_/|}{[]?/><"

const allChar = upperCase + lowerCase + number + speChar

function generatePassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += speChar[Math.floor(Math.random() * speChar.length)]

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passArea.value = password

}

function copyInputValueByIcon(){
    passArea.select();
    document.execCommand("copy")
}