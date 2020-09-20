<?php

	include("../../credentials.php");

	$predmeti = [
		"ang",
		"bio",
		"fil",
		"fiz",
		"fra",
		"geo",
		"gla",
		"inf",
		"ita",
		"kem",
		"lum",
		"mat",
		"nem",
		"ped",
		"psh",
		"rus",
		"slo",
		"soc",
		"spa",
		"svz",
		"uzg",
		"zgo"
	];

	if (!in_array($_POST['predmet'], $predmeti)) {
		echo "Predmet ne obstaja. Preizkušaš varnost sistema? Incident je zabeležen.";
		// https://xkcd.com/838/
		echo '<br><br><a href="../index.html">Domov</a>';
		exit();
	}

	$statement = $conn->prepare("SELECT code,used FROM codes WHERE code = ?");
	$statement->bind_param('i', $_POST["code"]);
	$statement->execute();
	$statement->store_result();
	$rows = $statement->num_rows;
	if ($rows == 0) {
		echo "Koda ne obstaja.";
		echo '<br><br><a href="../index.html">Domov</a>';
		exit();
	}
	$statement->bind_result($code,$used);
	while ($statement->fetch()) {
		if ($used == true) {
			echo "Koda je že bila uporabljena.";
			echo '<br><br><a href="../index.html">Domov</a>';
			exit();
		}
	}

	$directory = "../files/";
	$filecount = 0;
	$files = glob($directory . "*");
	if ($files){
		$filecount = count($files);
	}

	$file = $_FILES['file'];
	$extension = pathinfo($file['name'])["extension"];
	$temp = $file['tmp_name'];
	$filename = "LedinskiZapiski_" . $_POST["predmet"]."_".($filecount+1).".".$extension;
	move_uploaded_file($temp, "../files/".$filename);

	$ukaz = "INSERT INTO submissions (author, professor, predmet, letnik, tags, datum, title, filename, type, code)
			 VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?)";

	$statement = $conn->prepare($ukaz);

	$statement->bind_param('sssisssi', $_POST["author"],
									   $_POST["professor"],
									   $_POST["predmet"],
									   $_POST["letnik"],
									   $_POST["tags"],
									   $_POST["title"],
									   $filename,
									   $_POST["type"],
								  	   $_POST["code"]);

	$statement->execute();

	$statement = $conn->prepare("UPDATE codes SET used = true WHERE code = ?");
	$statement->bind_param('i', $_POST["code"]);
	$statement->execute();

	$conn->close();

	// only redirect on success
	echo('<!-- Redirect back to index.html -->
	<meta http-equiv = "refresh" content = "0; url=../index.html" />
	<p>Oddaja uspešna. Preusmerjanje ...</p>
	<p>Če se ne zgodi nič, kliknite <a href="../index.html">tukaj</a>.</p>');
?>
