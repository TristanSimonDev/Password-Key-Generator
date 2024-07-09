"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings_json_1 = require("../../Settings.json");
(function () {
    var length = parseInt(Settings_json_1.Settings.length, 10);
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var quantity = parseInt(Settings_json_1.Settings.quantity, 10);
    for (var i = 1; i <= quantity; i++) {
        var Password = "";
        for (var j = 1; j <= length; j++) {
            var randomnum = Math.floor(Math.random() * chars.length);
            Password = Password.concat(chars[randomnum]);
        }
        console.log("Password: ".concat(Password));
    }
})();
