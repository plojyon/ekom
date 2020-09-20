var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		//document.getElementById("demo").innerHTML = this.responseText;
		console.log(this.responseText);
		submissions = JSON.parse(this.responseText);
		submissions.forEach(createSubmission);
	}
};
xhttp.open("GET", "services/getSubmissions.php", true);
xhttp.send();

/*
submissions = [
	{
		"author": "yon.je.ploj",
		"professor": "Prof. Vojsk",
		"predmet": "nem",
		"letnik": 1,
		"tags": ["Grammatik", "Prateritum", "Lehrbuch"],
		"title": "Deutsche grammatik oder wendische Sprache",
		"filename": "zapiski_kem_1.pdf"
	},
*/


function createSubmission(sub, index, arr) {
	//img = document.createElement("img");
	//img.src = icon_link;
	//img_div = document.createElement("div");
	//img_div.appendChild(img);

	icon = document.createElement("i");
	// icon is an <i> with classes fa and fa-flask (first determines style, second determines icon type)
	if (!(sub.predmet in predmeti)) sub.predmet = "all";
	icon_classes = predmeti[sub.predmet].icon.split(" ");
	icon.classList.add(icon_classes[0]);
	icon.classList.add(icon_classes[1]);
	icon_div = document.createElement("div");
	icon_div.classList.add("subject_icon");
	icon_div.appendChild(icon);

	icon_label = document.createElement("p");
	icon_label.innerText = predmeti[sub.predmet].name;
	icon_label.classList.add("subject_name");

	subject_indicator = document.createElement("div");
	subject_indicator.appendChild(icon_div);
	subject_indicator.appendChild(icon_label);


	title = document.createElement("span");
	title.classList.add("submission_title");
	title.innerText = sub.title;

	tags = document.createElement("p");
	tags.classList.add("tags");
	for (tag in sub.tags) {
		t = document.createElement("a");
		t.classList.add("tag");
		t.innerText = sub.tags[tag];
		tags.appendChild(t);
		tags.appendChild(document.createTextNode(" "));
	}

	spacer = document.createElement("div");
	spacer.classList.add("spacer");

	letnik_icon = document.createElement("i");
	letnik_icon.classList.add("fas");
	if (sub.letnik == 1)
		letnik_icon.classList.add("fa-dice-one");
	else if (sub.letnik == 2)
		letnik_icon.classList.add("fa-dice-two");
	else if (sub.letnik == 3)
		letnik_icon.classList.add("fa-dice-three");
	else if (sub.letnik == 4)
		letnik_icon.classList.add("fa-dice-four");
	else
		letnik_icon.classList.add("fa-dice");
	letnik = document.createElement("p");
	letnik.classList.add("letnik");
	letnik.appendChild(letnik_icon);
	if (sub.letnik == 0)
		letnik.appendChild(document.createTextNode("Vsi letniki"))
	else
		letnik.appendChild(document.createTextNode(sub.letnik+". letnik"));

	prof_icon = document.createElement("i");
	prof_icon.classList.add("fas");
	prof_icon.classList.add("fa-chalkboard-teacher");
	professor = document.createElement("p");
	professor.classList.add("professor");
	professor.appendChild(prof_icon);
	professor.appendChild(document.createTextNode(sub.professor));

	auth_icon = document.createElement("i");
	auth_icon.classList.add("fas");
	auth_icon.classList.add("fa-pencil-alt");
	author = document.createElement("p");
	author.classList.add("author");
	author.appendChild(auth_icon);
	author.appendChild(document.createTextNode(sub.author));

	submission_info = document.createElement("div");
	submission_info.classList.add("submission_info");
	submission_info.appendChild(letnik);
	submission_info.appendChild(professor);
	submission_info.appendChild(author);

	text_div = document.createElement("div");
	text_div.classList.add("submission_text");
	text_div.appendChild(title);
	text_div.appendChild(tags);
	text_div.appendChild(spacer);
	text_div.appendChild(submission_info);

	submission = document.createElement("a");
	submission.id = sub.filename;
	submission.href = "files/"+sub.filename;
	submission.classList.add("submission");
	submission.classList.add(sub.predmet);
	submission.appendChild(subject_indicator);
	submission.appendChild(text_div);

	document.getElementById("submissions_list").appendChild(submission);
}
