<?php
    require_once("connection.php");
    require_once("headers.php");

    $query = $mysqli->prepare("SELECT * FROM articles");
    $query->execute();
    $array = $query->get_result();

    $response = [];
    
    while($a = $array->fetch_assoc()){
        $response[] = $a;
    }
    echo json_encode($response);
?>