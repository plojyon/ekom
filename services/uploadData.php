<?php
	include("../../credentials.php");

	$ukaz = "INSERT INTO submissions (AUTHOR, PROFESSOR, PREDMET, LETNIK, TAGS, DATE, TITLE, FILENAME)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

	$statement = $conn->prepare($ukaz);
	$statement->bind_param('sssissss', $_POST[author],
									   $_POST[professor],
									   $_POST[predmet],
									   $_POST[letnik],
									   $_POST[tags],
									   $_POST[date],
									   $_POST[title],
									   $_POST[filename]);
	$statement->execute();
	echo json_encode($data);
	$conn->close();

?>
