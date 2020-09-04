<?php
	include("../../credentials.php");

	$ukaz = "SELECT * FROM submissions";

	$statement = $conn->prepare($ukaz);
	$statement->execute();
	$statement->store_result();
	$rows = $statement->num_rows;
	$statement->bind_result($author, $professor, $predmet, $letnik, $tags, $date, $title, $filename);
	$data = array();
	$i = 0;
	while ($statement->fetch()) {
		$data[$i]= array("author" => $author,
						 "professor" => $professor,
						 "predmet" => $predmet,
						 "letnik" => $letnik,
						 "tags" => explode(",", $tags),
						 "date" => $date,
						 "title" => $title,
						 "filename" => $filename);
		$i++;
	}
	echo json_encode($data);
	$conn->close();

?>
