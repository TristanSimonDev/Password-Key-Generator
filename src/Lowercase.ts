(() => {
    let Password = "";
    let length = 10;
    let chars = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 1; i <= length; i++) {
        let randomnum = Math.floor(Math.random() * chars.length);
        Password = Password.concat(chars[randomnum]);
    }

    console.log(Password);
})();
