module.exports = {
  name: "setavatar",
  code: `$setBotAvatar[$message]


 ✅ - Bots avatar was changed to : \`$message\`

 $onlyIf[$message[1]!=;:x: - Please enter a image URL.]

  $onlyForIDs[$getVar[owner];:x: - You can't do this.]
  `
}