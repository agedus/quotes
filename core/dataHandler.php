<?php
include("database-connection.php");

$quote = $_GET["newQuote"];
$maker = $_GET["newMaker"];

$data = $connection_db->prepare("SELECT quote FROM quotes WHERE quote=?");
$data->execute([$quote]);
$data = $data->rowCount();
//
$data2 = $connection_db->prepare("SELECT quote FROM pending WHERE quote=?");
$data2->execute([$quote]);
$data2 = $data2->rowCount();

if($data !== 1 && $data2 !== 1){
    $upload = $connection_db->prepare("INSERT INTO pending (quote, maker) VALUES (?,?)");
    $upload->execute([$quote, $maker]);
    echo json_encode(["status" => "uploaded"]);
}else{
    echo json_encode(["status" => "failed"]);
}