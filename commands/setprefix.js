module.exports = {
  name: "setprefix",
  code: `$setServerVar[prefix;$message]

 ✅ - The bot's prefix was changed to : \`$message\`

 $onlyIf[$message[1]!=;:x: - Please enter a prefix.]

  $onlyPerms[admin;:x: - You can't do this.]
  `
}