import { Settings } from '../../../../.vscode/Settings.json' //root json object
import * as Function from '../../../function/Calc'

let length= parseInt(Settings.PasswordSettings.length, 10);
let chars= Settings.PasswordSettings.chars.lower;
let quantity = parseInt(Settings.PasswordSettings.quantity, 10);


Function.CreatePassword(chars, length, quantity, "test");
