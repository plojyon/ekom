function addPredmet(abbr) {
	opt = document.createElement("option");
	opt.value = abbr;
	opt.innerText = predmeti[abbr].name;

	document.getElementById("predmet_select").appendChild(opt);
}

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

predmeti = {
	"ang": {
		"name": "Angleščina",
		"icon": "fa fa-language",
		"prof": [
			"Matejka Kuhar",
			"Maja Lebar Bajec",
			"Ana Likar",
			"Helena Osterman",
			"Irena Škulj",
			"Ksenija Terglav Jakopin",
			"Sandra Uranič",
		]
	},
	"bio": {
		"name": "Biologija",
		"icon": "fa fa-leaf",
		"prof": [
			"Veronika Babič",
			"Sonja Kačar",
			"Ina Kretič",
		]
	},
	"fil": {
		"name": "Filozofija",
		"icon": "far fa-lightbulb",
		"prof": [
			"Gorazd Jurman",
		]
	},
	"fiz": {
		"name": "Fizika",
		"icon": "fas fa-atom",
		"prof": [
			"Ruben Belina",
			"Aleš Iršič",
			"Natalija Novak",
			"Nataša Ranđelović",
		]
	},
	"fra": {
		"name": "Francoščina",
		"icon": "fa fa-language",
		"prof": [
			"Neža Umek Podgornik",
		]
	},
	"geo": {
		"name": "Geografija",
		"icon": "fa fa-globe",
		"prof": [
			"Tatjana Ferder Brunšek",
			"Ingrid Florjanc",
			"Lea Nemec",
		]
	},
	"gla": {
		"name": "Glasba",
		"icon": "fa fa-music",
		"prof": [
			"Marjeta Kozmus",
		]
	},
	"inf": {
		"name": "Informatika",
		"icon": "fa fa-code",
		"prof": [
			"Betka Burger",
			"Žan Ternik",
		]
	},
	"ita": {
		"name": "Italijanščina",
		"icon": "fa fa-language",
		"prof": [
			"Klara Antoni Jančič",
		]
	},
	"kem": {
		"name": "Kemija",
		"icon": "fa fa-flask",
		"prof": [
			"Nika Cebin",
			"Darko Košič",
			"Špela Tršek",
		]
	},
	"lum": {
		"name": "Likovna umetnost",
		"icon": "fa fa-paint-brush",
		"prof": [
			"Mihaela Gregorc",
		]
	},
	"mat": {
		"name": "Matematika",
		"icon": "fas fa-square-root-alt",
		"prof": [
			"Uroš Cotman",
			"Maruša Dobljekar",
			"Tatjana Levstek",
			"Tamara Možina Artač",
			"Rok Škufca",
		]
	},
	"nem": {
		"name": "Nemščina",
		"icon": "fa fa-language",
		"prof": [
			"Nadja Gliha Olenik",
			"Matejka Kuhar",
			"Matejka Kuhar",
			"Helena Osterman",
			"Alenka Vojsk",
		]
	},
	"ped": {
		"name": "Pedagogika",
		"icon": "fas fa-chalkboard-teacher",
		"prof": [
			"Nina Levstik",
		]
	},
	"psh": {
		"name": "Psihologija",
		"icon": "fas fa-brain",
		"prof": [
			"Peter Prhavc",
			"Lidija Srša",
		]
	},
	"rus": {
		"name": "Ruščina",
		"icon": "fa fa-language",
		"prof": [
			"Bojana Petrin",
		]
	},
	"slo": {
		"name": "Slovenščina",
		"icon": "fas fa-book",
		"prof": [
			"Irena Ceklin Bačar",
			"Tatjana Cvetko",
			"Nina Levstik",
			"Andreja Pavle Jurman",
			"Bojana Petrin",
			"Nina Prešern",
			"Petra Špiletič Latin",
		]
	},
	"soc": {
		"name": "Sociologija",
		"icon": "fas fa-user-friends",
		"prof": [
			"Erika Berlan",
		]
	},
	"spa": {
		"name": "Španščina",
		"icon": "fa fa-language",
		"prof": [
			"Tomaž Šmid",
		]
	},
	"svz": {
		"name": "Športna vzgoja",
		"icon": "fa fa-futbol",
		"prof": [
			"Bojana Bizjan",
			"Tomaž Karče",
			"Miha Kobe",
			"Nataša Korošec",
			"Nataša Korošec",
			"Urša Šilc Trček",
			"Blanka Tomac",
		]
	},
	"uzg": {
		"name": "Umetnostna zgodovina",
		"icon": "fa fa-landmark",
		"prof": [
			"Boris Bovha",
		]
	},
	"zgo": {
		"name": "Zgodovina",
		"icon": "fas fa-history",
		"prof": [
			"Boris Bovha",
			"Arjana Marinič",
			"Lea Nemec",
			"Boris Pavliha",
			"Roman Vogrinc",
		]
	}
};
