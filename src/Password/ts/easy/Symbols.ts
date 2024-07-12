import { Settings } from "../../../../Settings.json";

let length: number = <number>parseInt(Settings.PasswordSettings.length, 10);
let chars: string = <string>Settings.PasswordSettings.chars.sym;
let quantity: number = <number>parseInt(Settings.PasswordSettings.quantity, 10);

let CreatePassword = (chars: string, length: number) => {
    let password = <string>"";
    for (let i: number = <number>1; i <= length; i++) {
        let randomnum = <number>Math.floor(Math.random() * chars.length);
        password = <string>password.concat(chars[randomnum]);
    }
    console.log(`Password: ${password}`);
};

for (let i: number = <number>1; i <= quantity; i++) {
    CreatePassword(chars, length);
}
