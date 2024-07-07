(() => {
    let Password = "";
    let lenght = 50;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i <= lenght; i++) {
        let randomnum = Math.floor(Math.random() * chars.length);
        Password = Password.concat(chars[randomnum]);
    }

    console.log(Password);
})();
