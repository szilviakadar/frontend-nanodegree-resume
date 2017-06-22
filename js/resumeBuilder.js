/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* var awesomeThoughts;
awesomeThoughts = "I am Szilvi and I am awesome!"
console.log(awesomeThoughts);

var email = "cameron@udacity.com"
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("awesome", "fun");
console.log(funThoughts);

var name = "Szilvia Kádár";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var role = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
*/

/*
$("#main").prepend(bio.welcome_message);
$("#main").prepend(bio.picture);
$("#main").prepend(bio.name);
$("#main").prepend(bio.role);
$("#main").prepend(bio.skills);
$("#main").prepend(bio.contact_info);


var skills = 
["awesomeness", "programming", "JS"];

var formName = HTMLheaderName.replace("%data%", bio.name);
var formRole = HTMLheaderRole.replace("%data%", bio.role);
var formContact = HTMLmobile.replace("%data%", bio.contact_info);
var formSkills = HTMLskills.replace("%data%", bio.skills);
var formWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
var formPic = HTMLbioPic.replace("%data%", bio.picture);

$("#main").append(formName);
$("#main").append(formRole);
$("#main").append(formPic);
$("#main").append(formWelcome);
$("#main").append(formSkills);
$("#main").append(formContact);
$("#main").append(bio.city);
$("#main").append(work["job"]);
$("#main").append(education.school);
*/

var bio = {
	"name": "Szilvia Kádár",
	"role": "software engineer",
	"contact_info": "+36306889306",
	"skills": skills,
	"welcome_message": "Hi! Nice to meet you.",
	"picture": "http://bit.ly/2nKlaXq"
};

bio.city = "Budapest";
bio["email"] = "kadarszilvi@gmail.com";

var work = {
	"job": "software engineer",
	"employer": "Liferay",
	"years": 1,
	"city": "Budapest"
};

var education = {
 	"schools": [
		{
			"name": "Budapest Corvinus University",
			"city": "Budapest",
			"degree": "MA",
			"major": ["marketing", "OD"]
		}
	],
	"online_courses": [
		{
			"name": "Coursera",
			"city": "N/A",
			"degree": "online degree",
			"major": ["project management"]
		}
	]
};

var project = {
	"name": "Django Girls Budapest",
	"years": 3,
	"goal": "Bringing girls to the world of IT"
};
