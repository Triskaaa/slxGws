module.exports = [{
 name: "gstart",
 aliases: ["gcreate"],
     code: `
 $setTimeout[gw;$get[sc]s;{
 "cid":"$channelID",
 "date":"$dateStamp",
 "time":"$message[1]",
 "host":"$authorID",
 "win":"$message[2]",
 "mid":"$get[id]",
 "prize":"$messageSlice[2]"
 }]
 $setMessageVar[host;$authorID;$get[id]]
 $setMessageVar[win;$message[2];$get[id]]
 $setMessageVar[time;$message[1];$get[id]]
 $setMessageVar[date;$dateStamp;$get[id]]
 $setMessageVar[prize;$messageSlice[2];$get[id]]
 $let[sc;$splitText[1]$textSplit[$math[$get[p]/1000];.]]
 $let[id;$sendMessage[GIVEAWAY STARTED!  {reactions:🎉} {newEmbed:{title:$messageSlice[2]} {description:**Ends in:** <t:$splitText[1]$textSplit[$math[($datestamp+$parseTime[$message[1]])/1000];.]:R>
 **Host:** <@!$authorID>
 **Winner:** $message[2]} {color:#ffd2cd}};yes]]
 $onlyIf[$messageSlice[2]!=;:x: - Please enter a prize.]
 $onlyIf[$isNumber[$message[2]]==true;:x: - Please enter a number of winners.]
 $onlyIf[$get[p]!=-1;:x: - Please enter a valide time (\`1s, 1m, 1d, 1w...\`)]
 $let[p;$parseTime[$if[$message[1]!=;$message[1];1s10ms]]]
 $onlyPerms[managemessages;:x: - You can't do this.]
 `
 
 },
  {
   name: "w",
      type: "timeout",
      code: `
 $editMessage[$timeoutData[mid];Giveaway Ended!{newEmbed:{title:$timeoutData[prize]} {description:
 **Host:** <@!$timeoutData[host]>
 **Winer(s):** $if[$get[random]==;No winers (not enough participants);$get[random]]} {color:RED}};$timeoutData[cid]]
 $channelSendMessage[$timeoutData[cid];$if[$get[random]!=;:tada: **Congratulations** $get[random] **!** You won **$timeoutData[prize]**;Not enough participants]]
 $let[random;$djsEval[
 var arrayy = "$getReactions[$timeoutData[cid];$timeoutData[mid];🎉;yes;id]".split(",")
 arrayy.splice(arrayy.indexOf("$clientId"),1)
 var array = arrayy
 var win = ""
 let u = $timeoutData[win]
 while (u != 0 && array!==[]) {
 let r = Math.floor(Math.random()*array.length);
 win += "<@!"+array[r]+">" + " "
 array.splice(array.indexOf(array[r]), 1)
 u = u - 1
 }
 win.split(" ").filter(function(a) {
 return a!='<@!undefined>' && a != ''
 }).join(", ")
 ;yes]]
 $onlyIf[$getMessage[$timeoutData[cid];$timeoutData[mid]]!=Giveaway Ended!;]
 `
     
 },
 {
     name: "gend",
     code: `
 $editMessage[$message[1];Giveaway Ended!{newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:
 **Host:** <@!$getMessageVar[host;$message[1]]>
 **Winner(s):** $if[$get[random]==;No winners (not enough participants);$get[random]]} {color:RED}};$channelID]
 $SendMessage[$if[$get[random]!=;:tada: **Congratulations** $get[random] **!** You won **$getMessageVar[prize;$message[1]]**;Not enough participants.]]
 $let[random;$djsEval[
 var arrayy = "$getReactions[$channelID;$message[1];🎉;yes;id]".split(",")
 arrayy.splice(arrayy.indexOf("$clientId"),1)
 var array = arrayy
 var win = ""
 let u = $getMessageVar[win;$message[1]]
 while (u != 0 && array!==[]) {
 let r = Math.floor(Math.random()*array.length);
 win += "<@!"+array[r]+">" + " "
 array.splice(array.indexOf(array[r]), 1)
 u = u - 1
 }
 win.split(" ").filter(function(a) {
 return a!='<@!undefined>' && a != ''
 }).join(", ")
 ;yes]]
 $onlyIf[$getMessage[$channelID;$message[1]]!=Giveaway Ended!;:x: - Le giveaway avec cet ID a déja été terminée.]
 $onlyIf[$message[1]!=;:x: - Invalid ID.]
 $onlyPerms[managemessages;:x: - You can't do that.]
 `
     },
  {
     name: "greroll",
     code: `
 $editMessage[$message[1];Giveaway Ended!{newEmbed:{title:$getMessageVar[prize;$message[1]]} {description:
 **Host:** <@!$getMessageVar[host;$message[1]]>
 **Winner(s):** $if[$get[random]==;No winners (not enough participants);$get[random]]} {color:RED}};$channelID]
 $SendMessage[$if[$get[random]!=;:tada: **Congrats** $get[random] **!** You won **$getMessageVar[prize;$message[1]]**;No participant]]
 $let[random;$djsEval[
 var arrayy = "$getReactions[$channelID;$message[1];🎉;yes;id]".split(",")
 arrayy.splice(arrayy.indexOf("$clientId"),1)
 var array = arrayy
 var win = ""
 let u = $getMessageVar[win;$message[1]]
 while (u != 0 && array!==[]) {
 let r = Math.floor(Math.random()*array.length);
 win += "<@!"+array[r]+">" + " "
 array.splice(array.indexOf(array[r]), 1)
 u = u - 1
 }
 win.split(" ").filter(function(a) {
 return a!='<@!undefined>' && a != '' && a != 'undefined'
 }).join(", ")
 ;yes]]

$suppressErrors
$onlyIf[$getMessage[$channelID;$message[1]]==Giveaway Ended!;:x: - Giveaway with this ID hasn't ended.]
$onlyIf[$message[1]!=;:x: - Please enter a valid giveaway ID.]
 $onlyPerms[managemessages;:x: - You can't do this.]
 `
     }]
