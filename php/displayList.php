<?php

include "config.php"; 

$sql = "SELECT topicTitle, subtopic, chapter_verse FROM `gospel`";

$result = mysqli_query($con, $sql); 

$response = array(); 

while ($row = mysqli_fetch_array($result)) 

{ 
    array_push ($response, array("topicTitle" => $row [0], 
                                 "subtopic" => $row [1],
                                 "chapter_verse" => $row [2]
                                )); 
}

echo json_encode($response);
mysqli_close ($con);

?>