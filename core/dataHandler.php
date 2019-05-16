<?php
include("database-connection.php");

$quote = $_GET["newQuote"];
$maker = $_GET["newMaker"];
$sql = "SELECT quote FROM quotes WHERE quote=?";

$data = $connection_db->prepare($sql);
$data->execute([$quote]);
$data = $data->rowCount();

print_r("\n". $data);