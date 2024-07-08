import * as json from "../Settings.json";

(() => {
    let length = parseInt(json.Settings.length, 10);
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let quantity = parseInt(json.Settings.quantity, 10);

    for (let i = 1; i <= quantity; i++) {
        let Password = "";
        for (let j = 1; j <= length; j++) {
            let randomnum = Math.floor(Math.random() * chars.length);
            Password = Password.concat(chars[randomnum]);
        }
        console.log(`Password: ${Password}`);
    }
})();
