<?php

	include("../../credentials.php");

	$ukaz = "SELECT * FROM prof_credentials WHERE username = ?";

	$statement = $conn->prepare($ukaz);
	$statement->bind_param('s', $_POST["uname"]);
	$statement->execute();
	$statement->store_result();
	$statement->bind_result($username, $password);
	while ($statement->fetch()) {
		if ($username == $_POST["uname"] && $password == $_POST["pword"]) {
			echo "Prijava uspešna.<br>";
			$code = rand(100000, 999999);
			echo "Ustvarjena koda: " . $code;
			$statement->close();

			$statement = $conn->prepare("INSERT INTO codes (code,comment) VALUES (?,?)");
			$statement->bind_param('is', $code,$_POST["comment"]);
			$statement->execute();

			echo '<br><br><a href="../index.html">Domov</a>';
			exit();
		}
	}
	echo "Neveljavno uporabniško ime ali geslo.";
	$statement->close();

?>
<br>
<a href="../index.html">Domov</a>
