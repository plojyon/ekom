function applyTagFilter(tag) {
	alert("Yeah no, you cannot filter by " + tag);
}
function refresh_filters() {
	 submissions.forEach((submission, i) => {
	 	var filter_letnik = document.getElementById("letnik_select").value;
	 	//var filter_verified = document.getElementById("verified_checkbox").value;
	 	var filter_predmet = document.getElementById("predmet_select").value;
	 	var filter_professor = document.getElementById("professor_select").value;
		var submission_letnik = submission ["letnik"];
		//var submission_verified = submission ["verified"];
		var submission_predmet = submission ["predmet"];
		var submission_professor = submission ["professor"];
		var elementname = document.getElementById(submission ["filename"]);
		if ((filter_letnik == submission_letnik || filter_letnik == "") &&
			//filter_verified == submission_verified &&//
			(filter_predmet == submission_predmet || filter_predmet == "") &&
			(filter_professor == submission_professor || filter_professor == "")) {
			elementname.classList.remove("hidden");
		} else {
			elementname.classList.add("hidden");
		}
	 });

	var count = document.querySelectorAll(".hidden").length
	console.log(count);
	if (count != 0) {
		noresult.classList.remove("hidden");
	} else {
		noresult.classList.add("hidden");
	}
}
