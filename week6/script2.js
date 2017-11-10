let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {
	"Kazakhstan":["Uralsk","Atyrau","Aktobe","Aktau"],
	"Russia":["Moscow","NewSibir'","Saint-Petersburg","Kazan"],
	"England":["London","EastBorn","Manchester","Liverpool"],
	"France":["Paris","Nicca","Lyon","Marseille"]
};
let first = document.querySelector("#countries"); 
for(var i=0;i<countries.length;i++){
	var option_i = document.createElement('option');
	option_i.innerHTML = String(countries[i]);
	first.appendChild(option_i);
};

document.querySelector("#countries").onchange = function(){
	var val = document.getElementById('countries').value;
	document.querySelector("#cities").options.length = 1;
	for(var i=0;i<cities_by_country[String(val)].length;i++){
		var city = document.createElement('option');
		city.innerHTML=String(cities_by_country[String(val)][i]);
		cities.appendChild(city);
	};
};