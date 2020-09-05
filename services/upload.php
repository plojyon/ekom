<?php

$filename = "upploaddd"; // TODO: set up non-conflicting naming scheme

$file = $_FILES['file_upload'];
$extension = pathinfo($file['name'])["extension"];
$temp = $file['tmp_name'];
move_uploaded_file($temp, "../files/".$filename.".".$extension);
?>

<!-- Redirect back to index.html -->
<meta http-equiv = "refresh" content = "0; url=../index.html" />
<p>Preusmerjanje ...</p>
<p>Če se ne zgodi nič, kliknite <a href="../index.html">tukaj</a>.</p>
