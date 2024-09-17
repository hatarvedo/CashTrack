<?php

$host="localhost";
$user="root";
$pass="";
$db="login"; /* mettyunal: cashtrack ; apunal (martin): login */
$conn=new mysqli($host,$user,$pass,$db);
if($conn->connect_error){
    echo "Nem sikerült csatlakozni az adatbázishoz".$conn->connect_error;
}
?>