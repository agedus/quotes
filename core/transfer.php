<?php
include("database-connection.php");

$id = $_GET["id"];
$value = $_GET["status"];

if($value){
    $transfer = $connection_db->prepare("SELECT * FROM pending WHERE id=?");
    $transfer->execute([$id]);
    $transfer = $transfer->fetchAll();
    //
    $upload = $connection_db->prepare("INSERT INTO quotes (quote, maker) VALUES (?, ?)");
    $upload->execute([$transfer[0]['quote'],$transfer[0]['maker']]);
    //
    $drop = $connection_db->prepare("DELETE FROM pending WHERE id = ?");
    $drop->execute([$id]);
    echo ("<pre>");
    print_r($transfer);
    echo ("</pre>");
}
