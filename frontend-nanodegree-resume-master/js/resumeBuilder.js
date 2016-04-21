var bio = {
    "name": "Justin Hanson",
    "role": "Web Developer",

    "contacts": {
        "mobile": "614-732-6422",
        "email": "jnhanson.75@gmail.com",
        "location": "Columbus, OH",
        "github": "JustinianH"
    },

    "image": "images/me_suit.jpg",
    "welcomeMessage": "Hi! Thanks for visiting my resume page!",
    "skills": ["HTML ", "CSS ", "Javascript ", "PHP "],
    "biopic": "www.justinnhanson.com",
    display: function() {

        //if (bio.skills.length != 0 )

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedImage = HTMLbioPic.replace("%data%", bio.image);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").prepend(formattedImage);
        $("#header").append(formattedMessage);


        var formattedContactInfo = [];

        formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
        formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
        formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
        formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

        //$("#header").append(HTMLcontactGeneric);

        for (i in formattedContactInfo) {
            $("#topContacts").append(formattedContactInfo[i]);
            $("#footerContacts").append(formattedContactInfo[i]);

        }

        $("#header").append(HTMLskillsStart);

        for (i in bio.skills) {

            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            
            $("#skills").append(formattedSkill);

        }



    }

}

var education = {

    "schools": [{
        "name": "University of Illinois, Urbana-Champaign",
        "location": "Urbana-Champaign, Illinois",
        "degree": "Master of Arts",
        "majors": ["English Language and Literature"],
        "dates": "2012-2014",
        "url": "www.illinois.edu"
    },

    {
        "name": "The Ohio State University",
        "location": "Columbus, Ohio",
        "degree": "Bachelor of Arts",
        "majors": ["English Language and Literature"],
        "dates": "2007-2011",
        "url": "www.osu.edu"
    }
    ],

    "onlineCourses": [{
        "title": "Front-end Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
    }],

    display: function () {

        $("#education").append(HTMLschoolStart);



        for (i in education.schools) {


            var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedHTMLschoolName+formattedHTMLschoolDegree);
            $(".education-entry:last").append(formattedHTMLschoolDates);
            $(".education-entry:last").append(formattedHTMLschoolLocation);
            $(".education-entry:last").append(formattedHTMLschoolMajor);
        };
    },

    displayOnlineCourses: function () {

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        for (i in education.onlineCourses) {

            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            
            $(".education-entry:last").append(formattedHTMLonlineTitle+formattedHTMLonlineSchool);
            $(".education-entry:last").append(formattedHTMLonlineDates);
            $(".education-entry:last").append(formattedHTMLonlineURL);

        }

    }
}    

var work = {
    "jobs": [{
        "employer": "The Shipyard",
        "title": "Content Strategist",
        "location": "Columbus, Ohio",
        "dates": "October 2014 - Present",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    }, {
        "employer": "University of Illinois, Urbana-Champaign",
        "title": "Graduate Assitant",
        "location": "Urbana-Champaign",
        "dates": "August 2012 - May 2014",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
    }, {
        "employer": "Tangoe., Inc",
        "title": "Fullfillment Representative",
        "location": "Columbus, Ohio",
        "dates": "November 2011 - August 2012",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in aliquet ex, vitae efficitur felis. In vulputate placerat pulvinar. Nulla imperdiet ac purus eget sagittis. Nullam lacinia quam at dolor tempor molestie. Proin consequat a urna id facilisis. Vestibulum leo nunc, varius a dui eget, gravida tempor turpis. Duis euismod vel nisl at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }],

    display: function () {


        $("#workExperience").append(HTMLworkStart);

        for (i in work.jobs) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);


            $("#workExperience").append(formattedEmployer);
            $("#workExperience").append(formattedDates);
            $("#workExperience").append(formattedLocation);
            $("#workExperience").append(formattedDescription);


        }


    }

}

var projects = {

    "projects": [{
        "title": "Online Portfolio",
        "dates": "January 2015",
        "description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer.",
        "images": ["images/197x148.gif"],
        "url": "http://www.justinnhanson.com"
    }, {
        "title": "Tortilla Recipes Website",
        "dates": "Winter 2016",
        "description": "Created a comphrehensive tortilla recipe website for beginner cooks.",
        "images": ["images/197x148.gif"],
        "url": "http://www.tortillasrecipes.com"
    }], 

    display: function () {

     $("#projects").append(HTMLprojectStart);

     for (i in projects.projects) {

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

        $("#projects").append(formattedProjectTitle);
        $("#projects").append(formattedProjectDate);
        $("#projects").append(formattedProjectDescription);
        $("#projects").append(formattedProjectImage);

    }

}

}



work.display();
projects.display();
education.display();
education.displayOnlineCourses();
bio.display();


/* Display Map */

$("#mapDiv").append(googleMap);








