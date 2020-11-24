const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready",function () {
    console.log("Ready..");
})
client.login("TOKEN")

client.on("message",function (msg) {
if (msg.content == "t!ping") {
    msg.channel.send("Pong!")
    console.log("Pong!")
}
})
