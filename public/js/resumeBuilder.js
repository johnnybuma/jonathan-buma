var bio = {
	"name": "Jonathan Buma",
	"role": "Front-end Web Developer",
	"contacts": {
		"mobile": "<a href=\"tel:18016737144\">(801) 673-7144</a>",
		"email": "<a href=\"mailto:johnny.buma@gmail.com\">johnny.buma@gmail.com</a>",
		"github": "<a href=\"https://github.com/johnnybuma\">johnnybuma</a>",
		"linkedin": "<a href=\"https://linkedin.com/in/jonathanbuma\">jonathanbuma</a>",
		"location": "West Covina, California 91792"
	},
	"WelcomeMsg": "Master of Front-end development and all things JavaScript",
	"skills": [
		"HTML5", "CSS3", "JavaScript", "jQuery",  "Node.js", "Express.js", "Angular.js", "Bootstrap3", "WordPress", "Ruby on Rails", "Version Control (Git)"
	],
	"bioPic": "images/me.jpg"
};

var work = [
	{
		"employer": "Freelance Developer",
		"title": "Front-end Web Developer",
		"dates": "May 2014 - Present",
		"location": "Los Angeles, California",
		"description": "I have been independently studying programming since 2012. In May of 2014 I was given the opportunity to leave my career as a commercial electrician and return to school full time to obtain a Bachelor of Science in Software Engineering. I will graduate in the spring of 2020."
	},
	{
		"employer": "Accord Electric Corp",
		"title": "Lead Electrician",
		"dates": "August 2012 - June 2014",
		"location": "Huntington Beach, California",
		"description": "I was involved in the installation of large-scale industrial electrical systems. Responsible for supervising small teams on specified installations, planning daily schedule, material inventory/orders, RFI's, QA, and testing. Notable projects: Meggit AeroSpace - Simi Valley, Zodiac AeroSpace - Huntington Beach, Jacobs Engineering - Pasadena"
	}

];

var projects = [
	
	{
		"title": "<a class='a-title' href=\"http://www.foothillconstruction.com\">Foothill Construction</a>",
		"date": "January 2015",
		"description": "Designed local marketing page and custom estimating software for general contractor",
		"image": "/public/img/foothill2.png"
	},
	{
		"title": "<a class='a-title' href=\"http://www.greenlifestyles.org\">Green Lifestyles Network</a>",
		"date": "March 2015",
		"description": "Working on redevelopment of non-profit Green Media orginizations web presence",
		"image": "/public/img/gln-small.png"
	},




];

var education = [

		{
			"Course": "Mathematics",
			"School": "Mt. San Antonio College",
			"Location": "Walnut, CA",
			"Dates": "August 2015 - June 2017",
			"Credential": "Associate of Science"
		},
		{
			"Course": "Software Engineering",
			"School": "University of California, Irvine",
			"Location": "Irvine, CA",
			"Dates": "August 2017 - June 2020",
			"Credential": "Bachelor of Science"
		},


];

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#role").prepend(formattedRole);
$("#title").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMsg);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#topContacts").prepend(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLinkedin);
$("#footerContacts").prepend(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLinkedin);
//$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);


bio.skills.display = function() {

	for (var i = 0; i < bio.skills.length; i++) {

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (var i = 0; i < work.length; i++) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work[i].employer);
		$(".work-entry:last").append(formattedEmployer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work[i].title);
		$(".work-entry:last").append(formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%",work[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%",work[i].description);
		$(".work-entry:last").append(formattedDescription);
	}

}

projects.display = function () {
	$("#projects").append(HTMLprojectStart);

	for (var i = 0; i < projects.length; i++) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects[i].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDate = HTMLprojectDates.replace("%data%",projects[i].date);
		$(".project-entry:last").append(formattedProjectDate);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects[i].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects[i].image);
		$(".project-entry:last").append(formattedProjectImage);
		//TODO: Add code for project images to be displayed if available!!
	}

}

education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var i = 0; i < education.length; i++){
		var formattedSchoolName = HTMLschoolName.replace("%data%",education[i].School);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education[i].Dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolCourse = HTMLschoolMajor.replace("%data%",education[i].Course);
		$(".education-entry:last").append(formattedSchoolCourse);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education[i].Location);
		$(".education-entry:last").append(formattedSchoolLocation);
		
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education[i].Credential);
		$(".education-entry:last").append(formattedSchoolDegree);

	}	
}
bio.skills.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);