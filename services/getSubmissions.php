<?php
	include("../../credentials.php");

	$ukaz = "SELECT author, professor, predmet, letnik, tags, title, filename, type FROM submissions";

	$statement = $conn->prepare($ukaz);
	$statement->execute();
	$statement->store_result();
	$rows = $statement->num_rows;
	$statement->bind_result($author, $professor, $predmet, $letnik, $tags, $title, $filename, $type);
	$data = array();
	$i = 0;
	while ($statement->fetch()) {
		$data[$i]= array("author" => $author,
						 "professor" => $professor,
						 "predmet" => $predmet,
						 "letnik" => $letnik,
						 "tags" => explode(",", $tags),
						 "title" => $title,
						 "filename" => $filename,
						 "type" => $type);
		$i++;
	}
	echo json_encode($data);
	$conn->close();

?>
