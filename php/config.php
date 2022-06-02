<?php 

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');

define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('DB','bible_db');
$con = mysqli_connect(HOST,USER,PASS,DB);

if (!$con) {

    die ("Error in Connection" . mysqli_connect_error());

}


?>