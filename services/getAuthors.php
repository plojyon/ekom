<?php
	include("../../credentials.php");

	if (isset($_GET["verified"])) {
		if ($_GET["verified"] == "1") {
			$ukaz = "SELECT name, verified WHERE verified == True";
		} else {
			$ukaz = "SELECT name, verified WHERE verified == False"
		}
	} else {
		$ukaz = "SELECT name, verified FROM authors";
	}

	$statement = $conn->prepare($ukaz);
	$statement->execute();
	$statement->store_result();
	$rows = $statement->num_rows;
	$statement->bind_result($name, $verified);
	$data = array()
	while ($statement->fetch()) {
		$data[$i]= array("name" => $name, "verified" => $verified);
	}
	echo json_encode($data);
	$conn->close();
?>
