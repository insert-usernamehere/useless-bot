const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

const token = "bot id";


bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", async msg => {
  if (msg.content === "anime") {
    msg.reply("anime sucks");
  }

  if (msg.content === "useless info") {
    let getJoke = async () => {
      let response = await axios.get(
        "https://useless-facts.sameerkumar.website/api"
      );
      let joke = response.data;
      return joke;
    };
    let jokeValue = await getJoke();
    console.log(jokeValue);
    msg.reply(`here a fact: ${jokeValue.data}`);
  }
});

bot.login(token);
