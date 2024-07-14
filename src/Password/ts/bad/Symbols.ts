import { Settings } from '../../../../.vscode/Settings.json' //root json object

let length= parseInt(Settings.PasswordSettings.length, 10);
let chars= Settings.PasswordSettings.chars.sym;
let quantity = parseInt(Settings.PasswordSettings.quantity, 10);

let CreatePassword = (chars: string, length: number) => {
    let password = "";
    for (let i: number = 1; i <= length; i++) {
        let randomnum = Math.floor(Math.random() * chars.length);
        password = password.concat(chars[randomnum]);
    }
    console.log(`Password: ${password}`);
};

for (let i = 1; i <= quantity; i++) {
    CreatePassword(chars, length);
}
