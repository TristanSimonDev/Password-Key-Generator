import { Settings } from '../../../.vscode/Settings.json' //root json object

//this will go to the chars in the json
let CharSettings = Settings.PasswordSettings.chars

let AllChars = Object.values(CharSettings).join('');
const quantity = parseInt(Settings.PasswordSettings.quantity, 10)
const length = parseInt(Settings.PasswordSettings.length)

let CreatePassword = (AllChars: string, length: number) => {
    let password = ""
    for (let i = 1; i <= length; i++) {
        let randomnum = Math.floor(Math.random() * AllChars.length)
        password = password.concat(AllChars[randomnum])
    }
    console.log(password)
}

CreatePassword(AllChars, length)