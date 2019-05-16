let quotes;
fetch(window.location.protocol + "//" + window.location.hostname + "/quotes/quotes/core/quotes.php").then(data => data.json()).then(data => quotes = data);


const quotebtn = document.querySelector("#quotebtn");
const quoteauthor = document.querySelector("#quoteauthor");
const quote = document.querySelector("#quote");

quotebtn.addEventListener("click", displayquote);

function displayquote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteauthor.innerHTML = quotes[number].maker;
    quote.innerHTML = quotes[number].quote;
}