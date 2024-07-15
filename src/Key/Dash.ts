import { Settings } from "../../.vscode/Settings.json";

let Lengthbetweensymbols = parseInt(Settings.KeySettings.Lengthbetweensymbols);
let chars = Settings.KeySettings.chars.upper + parseInt(Settings.KeySettings.chars.num, 10);

let CreateKey = (chars: string, Lengthbetweensymbols: number) => {
    let key = ""
    for (let i = 1; i <= Lengthbetweensymbols; i++) {   
        for (let j = 1; j <= Lengthbetweensymbols + 1; j++) {
            let randomnum = Math.floor(Math.random() * chars.length);
            j <= Lengthbetweensymbols ? key = key.concat(chars[randomnum]) : key = key.concat("-")
        }          
    }
    key.endsWith("-") ? key = key.slice(0, -1) : null;
    console.log(`Key: ${key}`)   
};

for (let i = 1; i <= 150; i++) {
    CreateKey(chars, Lengthbetweensymbols)
}
