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

async function sendData() {
    let newQuote = document.getElementById("newQuote").value;
    let newMaker = document.getElementById("newMaker").value;
    let request;
    let jsonData;
    newQuote = newQuote.replace(" ", "%20");
    newMaker = newMaker.replace(" ", "%20");

    if(window.location.hostname == "agedus.nl") {
        request = await fetch(`${window.location.protocol}//${window.location.hostname}/core/dataHandler.php?newQuote=${newQuote}&newMaker=${newMaker}`);
        jsonData = await request.json();
        dropboxStatus(jsonData);
    }else{
        request = await fetch(`${window.location.protocol}//${window.location.hostname}/quotes/quotes/core/dataHandler.php?newQuote=${newQuote}&newMaker=${newMaker}`);
        jsonData = await request.json();
        dropboxStatus(jsonData);
    }
}

function dropboxStatus(data) {
    //popupbox animation//
    let dropbox = document.getElementById("dropbox");
    let dropboxStatus = document.getElementById("dropboxStatus");
    dropbox.classList.add("dropbox");
    dropbox.disabled = true;
    setTimeout(function () { dropbox.classList.remove("dropbox"); dropbox.disabled = false;}, 6000);
    dropboxStatus.innerHTML = data["status"];

    //close
    if (data["status"] == "uploaded") {
        document.getElementById("popup").style = "visibility: hidden;";
        document.getElementById("newQuote").value = "";
        document.getElementById("newMaker").value = "";

    }
}


function transfer(status, value){
    if(status){
        if(window.location.hostname == "agedus.nl") {
            fetch()
        }else{

        }

    }
    else if (!status){

    }else{
        throw new Error("hij doet nie");
    }
}
