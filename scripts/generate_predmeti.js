predmeti = [
	{
		"abbr": "all",
		"name": "Vsi predmeti",
	},
	{
		"abbr": "ang",
		"name": "Angleščina",
	},
	{
		"abbr": "bio",
		"name": "Biologija",
	},
	{
		"abbr": "fil",
		"name": "Filozofija",
	},
	{
		"abbr": "fiz",
		"name": "Fizika",
	},
	{
		"abbr": "fra",
		"name": "Francoščina",
	},
	{
		"abbr": "geo",
		"name": "Geografija",
	},
	{
		"abbr": "gla",
		"name": "Glasba",
	},
	{
		"abbr": "inf",
		"name": "Informatika",
	},
	{
		"abbr": "ita",
		"name": "Italijanščina",
	},
	{
		"abbr": "kem",
		"name": "Kemija",
	},
	{
		"abbr": "lum",
		"name": "Likovna umetnost",
	},
	{
		"abbr": "mat",
		"name": "Matematika",
	},
	{
		"abbr": "nem",
		"name": "Nemščina",
	},
	{
		"abbr": "ped",
		"name": "Pedagogika",
	},
	{
		"abbr": "psh",
		"name": "Psihologija",
	},
	{
		"abbr": "rus",
		"name": "Ruščina",
	},
	{
		"abbr": "slo",
		"name": "Slovenščina",
	},
	{
		"abbr": "soc",
		"name": "Sociologija",
	},
	{
		"abbr": "spa",
		"name": "Španščina",
	},
	{
		"abbr": "svz",
		"name": "Športna vzgoja",
	},
	{
		"abbr": "uzg",
		"name": "Umetnostna zgodovina",
	},
	{
		"abbr": "zgo",
		"name": "Zgodovina",
	}
];

function addPredmet(sub, index, arr) {
	opt = document.createElement("option");
	opt.value = sub.abbr;
	opt.innerText = sub.name;

	document.getElementById("predmet_select").appendChild(opt);
}
