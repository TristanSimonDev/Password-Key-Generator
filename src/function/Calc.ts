
/*
Create the function that need to takes the arguments of: 
    Chars        : a string that conatains letters or nummbers or other things for example ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    Length       : a number that says how long the Password is for example [50]
    Quantity     : a number that says how manny Passwords should be generated for example [3]
    CreationCall : a string that says what the output should look like for example i call it "Test" it will outout [Created Password [Test]: r48etzr8tezteghfg849]

    You can find all Settings in [src/.vscode/Settings.json]
*/

export function CreatePassword(Chars : string, length : number, quantity : number, CreationCall : string) {
    for (let i = 1; i <= quantity; i++) {
        let password = ""
        for (let j = 1; j <= Chars.length; j++) {
            let randomnum = Math.floor(Math.random() * Chars.length)
            password = password.concat(Chars[randomnum])
        }
        console.log(`Created Password [${CreationCall}]: ${password}`)
    }
}