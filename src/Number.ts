(() => {
    let Password = "";
    let length = 50;
    let chars = "0123456789";

    for (let i = 1; i <= length; i++) {
        let randomnum = Math.floor(Math.random() * chars.length);
        Password = Password.concat(chars[randomnum]);
    }

    console.log(Password);
})();
