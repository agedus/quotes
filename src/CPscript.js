function transfer(status, value) {
        if (window.location.hostname == "agedus.nl") {
            fetch(`${window.location.protocol}//${window.location.hostname}/core/transfer.php?id=${value}&status=${status}`);
            setTimeout(function () {FE(true);}, 200);
        } else {
            fetch(`${window.location.protocol}//${window.location.hostname}/quotes/quotes/core/transfer.php?id=${value}&status=${status}`);
            setTimeout(function () {FE(false);}, 200);
        }
}

if(window.location.hostname == "agedus.nl") {
    FE(true)
} else {
    FE(false);
}

function FE(route) {
    let url ;
    if (route) {
        url = "/core/dataPending.php";
    }else{
        url ="/quotes/quotes/core/dataPending.php";
    }
    let xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    // This code will be executed each time the readyState change
    xmlhttp.onreadystatechange = function(){
        document.getElementById("F_box").innerHTML=xmlhttp.responseText;
    };

    // We'll send any data to the server through our request object
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
