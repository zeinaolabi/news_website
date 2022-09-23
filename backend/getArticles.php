<?php
    require_once("connection.php");
    require_once("headers.php");

    $query = $mysqli->prepare("SELECT * FROM articles");
    $query->execute();
    $query->store_result();

    $response = [];

    while($article = $query->fetch_assoc()){
        $response[] = $article;
    }

    echo json_encode($response);
?>