const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

const token = "NzA2MzQwNzIzNzAzNjc2OTY5.Xq41Dw.WWZbuMtVoztBnmPQsYjP6IbeAJk";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


bot.on("ready", () => {
  console.log(
    "bot is up and running"
  );
});


  bot.on("message", async msg => {
    if (msg.content === "useless fact") {
      const randomnumber = (getRandomInt(1001));
      if (randomnumber < 500) {
        let getJoke = async () => {
          let response = await axios.get(
            "https://useless-facts.sameerkumar.website/api"
          );
          let joke = response.data;
          return joke;
        };
        let jokeValue = await getJoke();
        console.log(jokeValue);
        msg.channel.send(`here's a fact: ${jokeValue.data}`);
      } else {
        let getFact = async () => {
          let response = await axios.get(
            "https://uselessfacts.jsph.pl/random.json?language=en"
          );
          let fact = response.data;
          return fact;
        };
        let factValue = await getFact();
        console.log(factValue);
        msg.channel.send(`here's a fact: ${factValue.text}`);
      }
    
    }


  if (msg.content === "useless ping") {
    msg.reply("heh");
  }

  if (msg.content === "useless random number") {
    msg.channel.send((getRandomInt(10000)));
  }

      if (msg.content === "useless help") {
    msg.channel.send("hello there my name is useless bot and my prefix is useless my commands are: fact, help, ping (note it will ping you), story, urban word of the day, random number, and pure giberish");
  }
  

  if (msg.content === "creator") {
    if(msg.author.id != 666378959184855042) return;
    msg.channel.send("hey look its my creator insert username here");
  }

  if (msg.content === "useless urban word of the day") {
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


  if (msg.content === "useless pure gibberish") {
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

  if (msg.content === "useless story") {
    let getStory = async () => {
      let response = await axios.get(
        "https://litipsum.com/api/6/json"
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

  if (msg.content === "emergency destroy") {
    if(msg.author.id != 666378959184855042) return;
    msg.channel.send("activateing emergency destory protocol");
    bot.destroy();
	bot.login(token);
  }

});

bot.login(token);
