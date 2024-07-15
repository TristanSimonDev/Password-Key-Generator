import { Settings } from '../../../.vscode/Settings.json' //root json object

//this will go to the chars object in the json
let CharSettings = Settings.PasswordSettings.chars

let S = {
    "AllChars": Object.values(CharSettings).join(''),
    "length": parseInt(Settings.PasswordSettings.length),
    "quantity": parseInt(Settings.PasswordSettings.quantity, 10)
}

let CreatePassword = (AllChars: string, length: number) => {
    let password = ""
    for (let i = 1; i <= length; i++) {
        let randomnum = Math.floor(Math.random() * AllChars.length)
        password = password.concat(AllChars[randomnum])
    }
    console.log(`Strongest: ${password}`)
}

for (let i = 1; i <= S.quantity; i++) {
    CreatePassword(S.AllChars, S.length)
}
