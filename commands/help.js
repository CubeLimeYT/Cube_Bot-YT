const config = require("../config.json");

module.exports.run = async (message, args, bot){
	console.log(args[0]);
}

module.exports.help = {
	name: "help"
}
