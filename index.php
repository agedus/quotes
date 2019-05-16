<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php require("core/head.php");?>
</head>
<body>
    <div class="container">
        <h2>quotes van sukkels</h2>
        <button type="button" id="quotebtn">druk om quote te zien</button>
        <blockquote>
            <h2 id="quote">quote</h2>
        </blockquote>
        <h3 id="quoteauthor">spreker van de quote</h3>
        <button type="button" id="popupbtn">Zelf een quote insturen</button>
        <div class="container" id="popup">
            <h1>Stuur je eigen quote in</h1>
            <form method="post">
                <textarea id="newQuote" rows="4" maxlength="100" type="text" placeholder="Quote"></textarea>
                <input id="newMaker" type="text" maxlength="30" placeholder="Maker">
            </form>
            <button type="button" id="sendbtn">Stuur</button>
        </div>
    </div>


<script src="src/script.js"></script>
</body>
</html>
