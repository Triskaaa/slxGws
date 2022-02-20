const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "YOUR TOKEN HERE", //Discord Bot Token
prefix: "$getServerVar[prefix]", //Discord Bot Prefix
intents: "all" //Discord Intents
})

//Events
bot.onMessage()

//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

bot.variables({
  prefix: "gw.",
owner: "921093686148886619"
})

bot.variables({
	
  host: "",
	
  win: "",
	
  date: "",
	
  time: "",
	
  prize: ""
	
  })

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
  text: "gw.help",
  type: "PLAYING",
  time: 12
})

 const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

