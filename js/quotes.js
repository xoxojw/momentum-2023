const quotes = [
  {
    quote:
      "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "If you can dream it, you can do it.",
    author: "Walt Disney",
  },
  {
    quote: "Inspiration does exist, but it must find you working.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon.",
  },
  {
    quote:
      "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    author: "Eminem",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
