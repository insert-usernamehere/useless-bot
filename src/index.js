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

  if (msg.content === "developer role") {
    msg.reply("can I get developer role?");
  }

  if (msg.content === "location") {
    msg.reply("you're on the moon duh");
  }

  if (msg.content === "( ͡° ͜ʖ ͡°)") {
    msg.reply("ew how dare you ( ͡° ͜ʖ ͡°)");
  }

  if (msg.content === "word of the day") {
    let getWord = async () => {
      let response = await axios.get(
        "http://urban-word-of-the-day.herokuapp.com/today"
      );
      let word = response.data;
      return word;
    };
    let wordValue = await getWord();
    console.log(wordValue);
    msg.reply(`here the word of the day ${wordValue.word} and heres its definition ${wordValue.meaning}`);
  }


});

bot.login(token);
