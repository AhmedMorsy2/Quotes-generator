var quotesList = [
  (author = {
    quote: `“Be yourself; everyone else is already taken.”`,
    name: "Oscar Wilde",
    image: "images/Oscarwilde.jpg",
  }),
  (author = {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    name: "Robert Frost",
    image: "images/Ropertfrost.jpg",
  }),
  (author = {
    quote: `“Two things are infinite: the universe and human stupidity and I'm not sure about the universe.”`,
    name: "Albert Einstein",
    image: "images/Einstein.jpg",
  }),
  (author = {
    quote: `“So many books, so little time.”`,
    name: "Frank Zappa",
    image: "images/Zappa.jpg",
  }),
  (author = {
    quote: "“A room without books is like a body without a soul.”",
    name: "Marcus Tullius Cicero",
    image: "images/Cicero.jpg",
  }),
  (author = {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    name: "Bernard M. Baruch",
    image: "images/Baruch.jpg",
  }),
  (author = {
    quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, 
    And live like it's heaven on earth."`,
    name: "William W. Purkey",
    image: "images/Purkey.jpg",
  }),
  (author = {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    name: "Dr. Seus",
    image: "images/Seuss.jpg",
  }),
  (author = {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    name: "Mae West",
    image: "images/West.jpg",
  }),
  (author = {
    quote: `“Be the change that you wish to see in the world.”`,
    name: "Mahatma Gandhi",
    image: "images/Gandhi.jpg",
  }),
];

function quoteGenerate() {
  var quote = "";
  var quoteImg = document.getElementById("quoteImg");
  var quoteAuthor = "";
  var random = Number.parseInt(Math.floor(Math.random() * quotesList.length));

  quote += quotesList[random].quote;
  quoteAuthor += quotesList[random].name;
  quoteImg.src = quotesList[random].image;

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = quoteAuthor;
}
