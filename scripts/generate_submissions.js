icon_link = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png";
submissions = [
	{
		"title": "Deutsche grammatik oder wendische Sprache",
		"tags": ["Grammatik", "Prateritum", "Lehrbuch"],
		"author": "yon.je.ploj",
		"predmet": "nem",
		"professor": "Prof. Vojsk"
	},
	{
		"title": "Kuharske bukve",
		"tags": ["kuharski vuk", "bukve", "hrana"],
		"author": "vodnik.valentin",
		"predmet": "psh",
		"professor": "Prof. Ceklin"
	},
	{
		"title": "Programiranje z Javo ali Zakaj so moje ocene slabe",
		"tags": ["Ta nesrecni dan", "Maticek se zeni", "C/C++"],
		"author": "spontana geneza datoteke",
		"predmet": "inf",
		"professor": "Prof. Burger"
	},
	{
		"title": "Kemija v 1. letniku",
		"tags": ["Kisline, baze in soli", "Poimenovanje", "Periodni sistem"],
		"author": "masa.kovac",
		"predmet": "kem",
		"professor": "Prof. Cebin"
	},
	{
		"title": "Moj zvezk",
		"tags": [],
		"author": "yon.ploj",
		"predmet": "ped",
		"professor": "Prof. Levstek"
	},
	{
		"title": "Tvoj zvezk",
		"tags": ["lep in urejen"],
		"author": "yon.ploj",
		"predmet": "mat",
		"professor": "Prof. Levstek"
	},
	{
		"title": "Recept za palacinke",
		"tags": ["moka", "jajca", "mleko", "sladkor", "nutella"],
		"author": "namazes z Nutello",
		"predmet": "mat",
		"professor": "speces u ponvi"
	},
	{
		"title": "Kaj vse mam na mizi?",
		"tags": ["zvezke", "cokolado", "racunalnik", "kozarce", "kroznike", "slusalke", "pisala", "domaco nalogo", "drobtine", "umazano zlico", "smeti", "vodko"],
		"author": "sej bom pospravu",
		"predmet": "svz",
		"professor": "untidy geng"
	},
];


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

	title = document.createElement("a");
	title.classList.add("submission_title");
	title.href = "http://google.com";
	title.innerText = sub.title;

	tags = document.createElement("p");
	tags.classList.add("tags");
	for (tag in sub.tags) {
		t = document.createElement("a");
		t.classList.add("tag");
		t.innerText = sub.tags[tag];
		t.onclick = ((self) => { applyTagFilter(self.target.text); });
		tags.appendChild(t);
		tags.appendChild(document.createTextNode(" "));
	}

	prof_icon = document.createElement("i");
	prof_icon.classList.add("fas");
	prof_icon.classList.add("fa-chalkboard-teacher");
	professor = document.createElement("p");
	professor.classList.add("professor");
	professor.appendChild(prof_icon);
	professor.appendChild(document.createTextNode(" "+sub.professor));

	auth_icon = document.createElement("i");
	auth_icon.classList.add("fas");
	auth_icon.classList.add("fa-pencil-alt");
	author = document.createElement("p");
	author.classList.add("author");
	author.appendChild(auth_icon);
	author.appendChild(document.createTextNode(" "+sub.author));

	text_div = document.createElement("div");
	text_div.classList.add("submission_text");
	text_div.appendChild(title);
	text_div.appendChild(tags);
	text_div.appendChild(professor);
	text_div.appendChild(author);

	submission = document.createElement("div");
	submission.classList.add("submission");
	submission.classList.add(sub.predmet);
	submission.appendChild(icon_div);
	submission.appendChild(text_div);

	document.getElementById("submissions_list").appendChild(submission);
}
