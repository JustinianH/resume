/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio ={
 "name": "Justin Hanson",
 "role": "Web Developer",

 "contacts": {
  "email": "jnhanson.75@gmail.com",
  "github": "JustinianH"
},

"location": "Columbus, OH",
"image": "images/fry.jpg",
"welcomeMessage": "string" ,
"skills": ["HTML ", "CSS ", "Javascript ", "PHP "],
"biopic": "url",
"display": "function"

}

var schools = {

 "schools": [{
  "name": "University of Illinois, Urbana-Champaign",
  "location": "Urbana-Champaign, Illinois",
  "degree": "Master of Arts",
  "majors": "English Language and Literature",
  "dates": "2012-2014",
  "url": "string"
},

{
  "name": "The Ohio State University",
  "location": "Columbus, Ohio",
  "degree": "Bachelor of Arts",
  "majors": "English Language and Literature",
  "dates": "2007-2011",
  "url": "string"
}
],

"onlineCourses": [{
  "title": "Front-end Developer"
}, {
  "school": "Udacity"
}, {
  "date": "2016"
}, {
  "url": "string"
}],

"display": "function"
}

var work = {
 "jobs": [
 {
  "employer": "The Shipyard",
  "title": "Content Strategist",
  "location": "Columbus, Ohio",
  "datesWorked": "October 2014 - Present",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
},
{
  "employer": "University of Illinois, Urbana-Champaign",
  "title": "Graduate Assitant",
  "location": "Urbana-Champaign",
  "datesWorked": "August 2012 - May 2014",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
},
{
  "employer": "Tangoe., Inc",
  "title": "Fullfillment Representative",
  "location": "Columbus, Ohio",
  "datesWorked": "November 2011 - August 2012",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
}]

}

var projects = {

  "projects": [
  {
    "title": "Online Portfolio",
    "datesWorked": "January 2015",
    "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer.",
    "images": ["images/197x148.gif"],
    "url": "http://www.justinnhanson.com"
  },
  {
    "title": "Tortilla Recipes Website",
    "datesWorked": "Winter 2016",
    "description": "Created a comphrehensive tortilla recipe website for beginner cooks.",
    "images": ["images/197x148.gif"],
    "url": "http://www.tortillasrecipes.com"
  }]

}


if (bio.skills.length != 0 ){

  $("#header").append(HTMLskillsStart);
  
  for (i in bio.skills) {

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);

  }

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedImage = HTMLbioPic.replace("%data%", bio.image);
  
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedImage);

}



/*Append Contact Info*/


//$("#header").prepend(bio.contacts.email);

var formattedContactInfo = [];

formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));

for (i in formattedContactInfo) {
 $("#topContacts").append(formattedContactInfo[i]);
 $("#footerContacts").append(formattedContactInfo[i]);
}

/*Append Schools*/

$("#education").append(HTMLschoolStart);


schools.schools.forEach(function(school) { 

	HTMLschoolName = '<a href="#">%data%';
	HTMLschoolName = HTMLschoolName.replace("%data%", school.name);
	$("#education").append(HTMLschoolName);
} ) ;

/*Append Work*/

function displayJobs (){

  $("#workExperience").append(HTMLworkStart);

  for (i in work.jobs){

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer)+HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

    $("#workExperience").append(formattedEmployer);
    $("#workExperience").append(formattedDates);
    $("#workExperience").append(formattedLocation);
    $("#workExperience").append(formattedDescription);


  }
}

displayJobs(); 

/* Append Projects */

function displayProjects () {

  $("#projects").append(HTMLprojectStart);

  for (i in projects.projects) {

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

    $("#projects").append(formattedProjectTitle);
    $("#projects").append(formattedProjectDate);
    $("#projects").append(formattedProjectDescription);
    $("#projects").append(formattedProjectImage);

  }
}

displayProjects();

/* Display Map */

  $("#mapDiv").append(map);













