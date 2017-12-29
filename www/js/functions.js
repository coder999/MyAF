/*
FlatIcons.net offers more than 2,500 royalty free flat icons. Customize and download your icons now!
Free for personal & commercial use. Please share us with your friends if you like our flat icon maker!
*/

var providerDB = new Array;
providerDB[0] = {firstName: "Elad", lastName: "Anter", type: "MD", preferredPhone: "617-667-8800"}
providerDB[1] = {firstName: "Evan", lastName: "Appelbaum", type: "MD", preferredPhone: "617-667-8800"}
providerDB[2] = {firstName: "Al", lastName: "Buxton", type: "MD", preferredPhone: "617-667-8800"}
providerDB[3] = {firstName: "Jim", lastName: "Chang", type: "MD", preferredPhone: "617-667-8800"}
providerDB[4] = {firstName: "Fernando", lastName: "Contreras", type: "MD", preferredPhone: "617-667-8800"}
providerDB[5] = {firstName: "Don", lastName: "Cutlip", type: "MD", preferredPhone: "617-667-8800"}
providerDB[6] = {firstName: "Loryn", lastName: "Feinberg", type: "MD", preferredPhone: "617-667-8800"}
providerDB[7] = {firstName: "Airley", lastName: "Fish", type: "MD", preferredPhone: "617-667-8800"}
providerDB[9] = {firstName: "Lisa", lastName: "Fleming", type: "MD", preferredPhone: "617-667-8800"}
providerDB[10] = {firstName: "Mike", lastName: "Gavin", type: "MD", preferredPhone: "617-667-8800"}
providerDB[11] = {firstName: "Eli", lastName: "Gelfand", type: "MD", preferredPhone: "617-632-7712"}
providerDB[12] = {firstName: "Will", lastName: "Grandin", type: "MD", preferredPhone: "617-667-8800"}
providerDB[13] = {firstName: "Charles", lastName: "Haffajee", type: "MD", preferredPhone: "617-667-8800"}
providerDB[14] = {firstName: "Tom", lastName: "Hauser", type: "MD", preferredPhone: "617-667-8800"}
providerDB[15] = {firstName: "Peter", lastName: "Kang", type: "MD", preferredPhone: "617-667-8800"}
providerDB[16] = {firstName: "Joe", lastName: "Kannam", type: "MD", preferredPhone: "617-667-8800"}
providerDB[17] = {firstName: "Robb", lastName: "Kociol", type: "MD", preferredPhone: "617-667-8800"}
providerDB[18] = {firstName: "Dan", lastName: "Kramer", type: "MD", preferredPhone: "617-667-8800"}
providerDB[19] = {firstName: "Roger", lastName: "Laham", type: "MD", preferredPhone: "617-667-8800"}
providerDB[20] = {firstName: "David", lastName: "Leeman", type: "MD", preferredPhone: "617-667-8800"}
providerDB[21] = {firstName: "Warren", lastName: "Manning", type: "MD", preferredPhone: "617-667-8800"}
providerDB[22] = {firstName: "Murray", lastName: "Mittleman", type: "MD", preferredPhone: "617-667-8800"}
providerDB[23] = {firstName: "Peter", lastName: "Oettgen", type: "MD", preferredPhone: "617-667-8800"}
providerDB[24] = {firstName: "Eric", lastName: "Osborn", type: "MD", preferredPhone: "617-667-8800"}
providerDB[25] = {firstName: "Panos", lastName: "Papageorgiou", type: "MD", preferredPhone: "617-667-8800"}
providerDB[26] = {firstName: "Duane", lastName: "Pinto", type: "MD", preferredPhone: "617-667-8800"}
providerDB[27] = {firstName: "Jeff", lastName: "Anter", type: "MD", preferredPhone: "617-667-8800"}
providerDB[28] = {firstName: "Pablo", lastName: "Quintero", type: "MD", preferredPhone: "617-667-8800"}
providerDB[29] = {firstName: "Carl", lastName: "Rasmussen", type: "MD", preferredPhone: "617-667-8800"}
providerDB[30] = {firstName: "Anne", lastName: "Riley", type: "MD", preferredPhone: "617-667-8800"}
providerDB[31] = {firstName: "Marwa", lastName: "Sabe", type: "MD", preferredPhone: "617-667-8800"}
providerDB[32] = {firstName: "Sam", lastName: "Shubrooks", type: "MD", preferredPhone: "617-667-8800"}
providerDB[33] = {firstName: "Jon", lastName: "Waks", type: "MD", preferredPhone: "617-667-8800"}
providerDB[34] = {firstName: "Francine", lastName: "Welty", type: "MD", preferredPhone: "617-667-8800"}
providerDB[35] = {firstName: "Robert", lastName: "Yeh", type: "MD", preferredPhone: "617-667-8800"}
providerDB[36] = {firstName: "Megan", lastName: "York", type: "MD", preferredPhone: "617-667-8800"}
providerDB[37] = {firstName: "Peter", lastName: "Zimetbaum", type: "MD", preferredPhone: "617-667-8800"}

//Midlevels
var midLevelDB = new Array;
midLevelDB[0] = {firstName: "None", lastName: "Selected", type: "NP", preferredPhone: "617-667-8800"}
midLevelDB[1] = {firstName: "Jaqueline", lastName: "Chasse", type: "NP", preferredPhone: "617-667-8800"}
midLevelDB[2] = {firstName: "Cindy", lastName: "Cunningham", type: "NP", preferredPhone: "617-667-8800"}
midLevelDB[3] = {firstName: "Monique", lastName: "Nestor", type: "NP", preferredPhone: "617-667-8800"}

//After Hours settings

function isItAfterHours() {
	var open = 8; //hour in 24 hour format
	var close = 17; //hour in 24 hour format
	
	currentHours = new Date().getHours();
	
	if (currentHours < open || currentHours > close) {
		return true;
	} else {
		return false;
	}
}

function currentTime() {
	currentTime = new Date().toLocaleString();
	currentTime = currentTime.substr(currentTime.indexOf(", ")+2);
	return currentTime;
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	vars[key] = value;
	});
	return vars;
}
//var first = getUrlVars()["id"];

//$('#sel option:contains(' + val + ')').prop({selected: true});

function checkMyMD(URL) {
	if (localStorage.getItem('md') != null) {
		window.location.href=URL;
	} else {
		alert ('Your MD is not set yet.  Please enter this information now.');
		window.location.href="myinfo.html";
	}
	return false;
	
}


$( document ).ready(function() {
	
	
//$('#sel option:contains(' + val + ')').prop({selected: true});
	
	

});