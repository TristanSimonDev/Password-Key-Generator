

export async function CreatePassword(Chars : string, length : number, quantity : number) {
    for (let i = 1; i <= quantity; i++) {
        let password = ""
        for (let j = 1; j <= Chars.length; j++) {
            let randomnum = Math.floor(Math.random() * Chars.length)
            password = password.concat(Chars[randomnum])
        }
        console.log(password)
    }
}