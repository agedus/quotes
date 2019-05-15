const quotes = [
    {
        name: "Damian Puister",
        quote: "1 bier is geen bier."
    },
    {
        name: "Pascal Huberts",
        quote: "Gepenetreerde kanker moeder."
    },
    {
        name: "Jurrie Piek",
        quote: "Ik word genomen in me achterste door mijn eerste biertje."
    },
    {
        name: "Jurrie Piek",
        quote: "Dronken ben ik nooit geweest."
    },
    {
        name: "Bas Top",
        quote: "Huub huub motherfucker."
    },
    {
        name: "Pascal Huberts",
        quote:
            "Een wijze diabeet zij eens 1 bier is geen bier daarom tanken wij bier."
    },
    {
        name: "Pascal Huberts",
        quote: "liever een kater dan een glasje water."
    },
    {
        name: "Joey Roeters",
        quote: "beter goed gejat dan slecht bedacht."
    }
];

const quotebtn = document.querySelector("#quotebtn");
const quoteauthor = document.querySelector("#quoteauthor");
const quote = document.querySelector("#quote");

quotebtn.addEventListener("click", displayquote);

function displayquote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteauthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}