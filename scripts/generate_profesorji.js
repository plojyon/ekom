function addProfessors(abbr) {
	var optgroup = document.createElement("optgroup");
	optgroup.label = predmeti[abbr].name;

	var profesorji = predmeti[abbr]["prof"];
	profesorji.forEach((prof, i) => {
		var opt = document.createElement("option");
		//opt.value = predmeti[abbr]["prof"][i];
		opt.innerText = prof;
		optgroup.appendChild(opt);
	});

	document.getElementById("professor_select").appendChild(optgroup);
}

/*
<option value="" selected>Vseeno mi je",
<optgroup label="Angleščina">
</optgroup>
<optgroup label="Biologija">
</optgroup>
<optgroup label="Filozofija">
</optgroup>
<optgroup label="Fizika">

</optgroup>
<optgroup label="Francoščina">

</optgroup>
<optgroup label="Geografija">

</optgroup>
<optgroup label="Glasba">

</optgroup>
<optgroup label="Informatika">

</optgroup>
<optgroup label="Italijanščina">

</optgroup>
<optgroup label="Kemija">

</optgroup>
<optgroup label="Likovna umetnost">

</optgroup>
<optgroup label="Matematika">

</optgroup>
<optgroup label="Nemščina">

</optgroup>
<optgroup label="Pedagogika">

</optgroup>
<optgroup label="Psihologija">

</optgroup>
<optgroup label="Ruščina">

</optgroup>
<optgroup label="Slovenščina">

</optgroup>
<optgroup label="Sociologija">

</optgroup>
<optgroup label="Španščina">

</optgroup>
<optgroup label="Športna vzgoja">

</optgroup>
<optgroup label="Umetnostna zgodovina">

</optgroup>
<optgroup label="Zgodovina">

</optgroup>
*/
