<?php

include "config.php"; 

$sql = "SELECT topicTitle, subTitle, chapter_verse FROM `subtopic` INNER JOIN `topic` ON subtopic.topicID = topic.topicID;";

$result = mysqli_query($con, $sql); 

$response = array(); 

while ($row = mysqli_fetch_array($result)) 

{ 
    array_push ($response, array("topicTitle" => $row [0], 
                                 "subTitle" => $row [1],
                                 "chapter_verse" => $row [2]
                                )); 
}

echo json_encode($response);
mysqli_close ($con);

?>