const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

const token = "bot id";


bot.on("ready", () => {
  console.log(
    "bot is up and running if its not, start an issue plz give it 5 mins"
  );
});


  bot.on("message", async msg => {
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
    msg.channel.send(`here a fact: ${jokeValue.data}`);
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
    msg.channel.send(`here a fact: ${factValue.text}`);
  }


  if (msg.content === "location") {
    msg.channel.send("you're on the moon duh");
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
    msg.channel.send(
      `here the word of the day ${wordValue.word} and heres its definition ${
        wordValue.meaning}`
    );
  }


  if (msg.content === "pure gibberish") {
    let getGib = async () => {
      let response = await axios.get(
        "http://www.randomtext.me/api/gibberish/p-7/25-50"
      );
      let gib = response.data;
      return gib;
    };
    let gibValue = await getGib();
    console.log(gibValue);
    msg.channel.send(
      `${gibValue.text_out}`
    );
  }

  if (msg.content === "story") {
    let getStory = async () => {
      let response = await axios.get(
        "https://litipsum.com/api/json"
      );
      let story = response.data;
      return story;
    };
    let storyValue = await getStory();
    console.log(storyValue);
    msg.channel.send(
      `${storyValue.text}`
    );
  }

});

bot.login(token);
