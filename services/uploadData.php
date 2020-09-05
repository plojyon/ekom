<?php
	include("../../credentials.php");

	$ukaz = "INSERT INTO submissions (AUTHOR, PROFESSOR, PREDMET, LETNIK, TAGS, DATE, TITLE, FILENAME)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

	$statement = $conn->prepare($ukaz);
	$statement->execute();
	echo json_encode($data);
	$conn->close();

?>
