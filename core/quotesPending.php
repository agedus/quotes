<?php
include("database-connection.php");

$sql = "SELECT * FROM pending;";
$quote = $connection_db->prepare($sql);
$quote->execute();
$quotes = $quote->fetchAll();