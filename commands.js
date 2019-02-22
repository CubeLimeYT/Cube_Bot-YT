const commandHelp = require("./help.js");
const config = require("./config.json");

module.exports = {
   'help': help
}

function help(msg){
	let args = msg.content.split(/\s+/).slice(1);

	let helpStr;
	if(args.length == 1){
		if(args[0].charAt(0) == config.prefix) //['L', 'efjofefe']
			args[0] = args[0].slice(1);
		helpStr = commandHelp[args[0]];
	    
	}
	if(helpStr){
		helpStr(msg);
  }
	else {
		msg.channel.send();
   }
}
