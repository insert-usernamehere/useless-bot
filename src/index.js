const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

const token = "bot token";

bot.on("ready", () => {
  console.log("bot is up and running if its not, start an issue plz give it 5 mins");
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

  if (msg.content === "useless fact") {
    let getFact = async () => {
      let response = await axios.get(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      let fact = response.data;
      return fact;
    };
    let factValue = await getFact();
    console.log(factValue);
    msg.reply(`here a fact: ${factValue.text}`);
  }

  if (msg.content === "skawo") {
    msg.reply("skawo is an amazing youtuber that does text comentary heres his channel: https://www.youtube.com/channel/UColqqqGEOAuzeD8Zt5Y67FQ ");
  }

});

bot.login(token);
