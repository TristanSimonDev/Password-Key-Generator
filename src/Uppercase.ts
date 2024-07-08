(() => {
    let lenght = 50;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let quantity = 3;

    for (let i = 1; i <= quantity; i++) {
        let Password = "";
        for (let j = 1; j <= lenght; j++) {
            let randomnum = Math.floor(Math.random() * chars.length);
            Password = Password.concat(chars[randomnum]);
        }
        console.log(`Password: ${Password}`);
    }
})();
