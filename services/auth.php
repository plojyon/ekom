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
		echo "prijava uspesna<br>";
		$code = rand(100000, 999999);
		echo $code;
		$statement->close();

		$statement = $conn->prepare("INSERT INTO codes (code,comment) VALUES (?,?)");
		$statement->bind_param('is', $code,$_POST["comment"]);
		$statement->execute();

		exit();
	}
}
echo "ni ok, poglej se enkrt";
$statement->close();

/*1. nardis $conn (include())
2. nardis statement
    $statement = $conn->prepare("SQL ukaz");
3. vstavis parametre
    $statement->bind_param('ss', $address, $receiver);
4. pozenes ukaz
    $statement->execute();
5. shrans rezultat
    $statement->store_result();
6. pogledas st vrstic
    $rows = $statement->num_rows;
7. shranis rezultate
    $statement->bind_result($addr, $bal);
8. obdelava rezultatov
    while ($statement->fetch()) {}
9. zapres ukaz
    $statement->free_result();
    $statement->close();
10. nazaj na 2. (po portebi)
11. disconnect from database
    $conn->close();*/
?>
