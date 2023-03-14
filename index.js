const cowsay = require("cowsay");
const userInfo = require("./information");

console.log(cowsay.say({
    text: `Hello I'm ${userInfo.userInfo.name} from ${userInfo.userInfo.campus} Campus !`,
    e: "oO",
    T: "U "
}));