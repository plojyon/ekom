<?php

include("../../credentials.php");

$statement = $conn->prepare("SELECT * FROM submissions");
$statement->execute();
$statement->store_result();
$rows = $statement->num_rows;
$statement->close();

$file = $_FILES['file'];
$extension = pathinfo($file['name'])["extension"];
$temp = $file['tmp_name'];
$filename = "zapiski_".$_POST["predmet"]."_".($rows+1).".".$extension;
move_uploaded_file($temp, "../files/".$filename);

$ukaz = "INSERT INTO submissions (author, professor, predmet, letnik, tags, datum, title, filename)
		 VALUES (?, ?, ?, ?, ?, NOW(), ?, ?)";

$statement = $conn->prepare($ukaz);

$statement->bind_param('sssisss', $_POST["author"],
								   $_POST["professor"],
								   $_POST["predmet"],
								   $_POST["letnik"],
								   $_POST["tags"],
								   $_POST["title"],
								   $filename);
echo $_POST["author"]."<br>". $_POST["professor"]."<br>".$_POST["predmet"]."<br>".$_POST["letnik"]."<br>".$_POST["tags"]."<br>".$_POST["title"]."<br>";

$statement->execute();
$conn->close();


?>

<!-- Redirect back to index.html -->
<!--<meta http-equiv = "refresh" content = "0; url=../index.html" />
<p>Preusmerjanje ...</p>
<p>Če se ne zgodi nič, kliknite <a href="../index.html">tukaj</a>.</p>-->
