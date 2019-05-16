<?php
include("database-connection.php");

$sql = "SELECT * FROM quotes;";
$quote = $connection_db->prepare($sql);
$quote->execute();
$quotes = $quote->fetchAll();

header('Content-Type: application/json');
print_r(json_encode($quotes));