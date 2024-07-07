let Password = ""

let lenght = 10;
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (let i = 1; i <= lenght; i++) {
    let randomnum = Math.floor(Math.random() * chars.length) 
    Password = Password.concat(chars[randomnum])
}

console.log(Password)