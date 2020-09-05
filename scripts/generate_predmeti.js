function addPredmet(abbr) {
	opt = document.createElement("option");
	opt.value = abbr;
	opt.innerText = predmeti[abbr].name;

	document.getElementById("predmet_select").appendChild(opt);
}

predmeti = {
	"": {
		"name": "Vseeno mi je",
		"icon": "fas fa-graduation-cap"
	},
	"ang": {
		"name": "Angleščina",
		"icon": "fa fa-language"
	},
	"bio": {
		"name": "Biologija",
		"icon": "fa fa-leaf"
	},
	"fil": {
		"name": "Filozofija",
		"icon": "far fa-lightbulb"
	},
	"fiz": {
		"name": "Fizika",
		"icon": "fas fa-atom"
	},
	"fra": {
		"name": "Francoščina",
		"icon": "fa fa-language"
	},
	"geo": {
		"name": "Geografija",
		"icon": "fa fa-globe"
	},
	"gla": {
		"name": "Glasba",
		"icon": "fa fa-music"
	},
	"inf": {
		"name": "Informatika",
		"icon": "fa fa-code"
	},
	"ita": {
		"name": "Italijanščina",
		"icon": "fa fa-language"
	},
	"kem": {
		"name": "Kemija",
		"icon": "fa fa-flask"
	},
	"lum": {
		"name": "Likovna umetnost",
		"icon": "fa fa-paint-brush"
	},
	"mat": {
		"name": "Matematika",
		"icon": "fas fa-square-root-alt"
	},
	"nem": {
		"name": "Nemščina",
		"icon": "fa fa-language"
	},
	"ped": {
		"name": "Pedagogika",
		"icon": "fas fa-chalkboard-teacher"
	},
	"psh": {
		"name": "Psihologija",
		"icon": "fas fa-brain"
	},
	"rus": {
		"name": "Ruščina",
		"icon": "fa fa-language"
	},
	"slo": {
		"name": "Slovenščina",
		"icon": "fas fa-book"
	},
	"soc": {
		"name": "Sociologija",
		"icon": "fas fa-user-friends"
	},
	"spa": {
		"name": "Španščina",
		"icon": "fa fa-language"
	},
	"svz": {
		"name": "Športna vzgoja",
		"icon": "fa fa-futbol"
	},
	"uzg": {
		"name": "Umetnostna zgodovina",
		"icon": "fa fa-landmark"
	},
	"zgo": {
		"name": "Zgodovina",
		"icon": "fas fa-history"
	}
};
