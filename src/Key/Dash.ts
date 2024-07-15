import { Settings } from "../../.vscode/Settings.json";

let dash = Settings.KeySettings.TrimmSymbols.dash
let Segments = parseInt(Settings.KeySettings.Segments);
let chatsbetweentrimm = parseInt(Settings.KeySettings.Charsbetweentrimm)
let chars = Settings.KeySettings.chars.upper + parseInt(Settings.KeySettings.chars.num, 10);
let quantity = parseInt(Settings.KeySettings.quantity)


let CreateKey = (chars: string, Segments: number) => {
    let key = ""
    for (let i = 1; i <= Segments; i++) {   
        for (let j = 1; j <= chatsbetweentrimm + 1; j++) {
            let randomnum = Math.floor(Math.random() * chars.length);
            j <= chatsbetweentrimm ? key = key.concat(chars[randomnum]) : key = key.concat(dash)
        }          
    }
    key.endsWith(dash) ? key = key.slice(0, -1) : null;
    console.log(`Key: ${key}`)   
};

for (let i = 1; i <= quantity; i++) {
    CreateKey(chars, Segments)
}
