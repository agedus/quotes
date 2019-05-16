let quotes;
if(window.location.hostname == "agedus.nl") {
    fetch(window.location.protocol + "//" + window.location.hostname + "/core/quotes.php").then(data => data.json()).then(data => quotes = data);
}else{
    fetch(window.location.protocol + "//" + window.location.hostname + "/quotes/quotes/core/quotes.php").then(data => data.json()).then(data => quotes = data);

}

const quotebtn = document.querySelector("#quotebtn");
const quoteauthor = document.querySelector("#quoteauthor");
const quote = document.querySelector("#quote");
const popupbtn = document.querySelector("#popupbtn");
const sendbtn = document.querySelector("#sendbtn");

quotebtn.addEventListener("click", displayquote);

function displayquote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteauthor.innerHTML = quotes[number].maker;
    quote.innerHTML = quotes[number].quote;
}

popupbtn.addEventListener("click", displaypopup);

function displaypopup() {
    document.getElementById("popup").style = "visibility: visible;";
    setTimeout(function() {
        document.addEventListener("click", function (e) {
            if (document.getElementById("popup").contains(e.target)){
            }
            else {
                document.getElementById("popup").style = "visibility: hidden;";
            }
        }, 500)
    })
}

sendbtn.addEventListener("click", sendData);

function sendData() {
    let newQuote = document.getElementById("newQuote").innerHTML;
    let newMaker = document.getElementById("newMaker").innerHTML;
    newQuote = newQuote.replace(" ", "%20");
    newMaker = newMaker.replace(" ", "%20");

    if(window.location.hostname == "agedus.nl") {
        fetch(`${window.location.protocol}//${window.location.hostname}/core/dataHandler.php?newQuote=${newQuote}&newMaker=${newMaker}`)
    }else{
        fetch(`${window.location.protocol}//${window.location.hostname}/quote/quote/core/dataHandler.php?newQuote=${newQuote}&newMaker=${newMaker}`)
    }

}