import { Settings } from '../../../Settings.json' //root json object

//this will go to the chars in the json
let CharSettings = Settings.PasswordSettings.chars

let AllChars = Object.values(CharSettings).join('');
const quantity = parseInt(Settings.PasswordSettings.quantity, 10)
const length = parseInt(Settings.PasswordSettings.length)

let CreatePassword = (AllChars: string, length: number) => {
    
}