
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kushal Chordiya",
  title: "Hi, I'm Kushal",
  subTitle: emoji("A Software Developer, passionate about Machine Learning, Data Science & Distributed Systems, with experience building Web applications and microservices with Nodejs, Golang, Python, Java as well as Machine Learning application using Tensorflow, Pytorch, Keras, Scikit-learn and some other cool libraries and frameworks. I'm also interested in Finance, Algorithmic Trading & Big Data Analysis. "),
  resumeLink: "https://drive.google.com/file/d/1ohJHZtbXBrIuaTZYBxQEGhmtDXR_0mYe/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/kushalchordiya216",
  linkedin: "https://www.linkedin.com/in/kushal-chordiya/",
  gmail: "chordiyakushal@gmail.com",
  gitlab: "https://gitlab.com/kushalchordiya216",
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "THE KIND OF DEVELOPER THAT WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly scalable, performant and fault tolerant backend services for your applications"),
    emoji("⚡ Data driven, robust, modular microservices with modern best practices"),
    emoji("⚡ Machine Learning and Data Sceince pipelines, from research to production"),
    emoji("⚡ Integration of third party services & platforms such as AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "devicon-go-plain"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "NGINX",
      fontAwesomeClassname: "devicon-nginx-original"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain" 
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "devicon-django-plain"
    },
    {
      skillName:"Express",
      fontAwesomeClassname: "devicon-express-original"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  MLSkills : [
    {
      skillName: "Tensorflow",
    },
    {
      skillName: "PyTorch",
    },
    {
      skillName: "Keras",
    },
    {
      skillName: "Scikit-learn",
    },
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Structures & Algorithms",
      progressPercentage: "75%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "40%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "30%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",  
      company: "Zubi Infotech Pvt. Ltd.",
      companylogo: require("./assets/images/zubi.jpeg"),
      date: "April 2020 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Machine Learning Intern",   
      company: "C-DAC, Pune",
      companylogo: require("./assets/images/cdac.jpeg"),
      date: "Januray 2020 – April 2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS I'VE DONE TO HONE MY TECHNICAL SKILLS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "SIH 2019, Finalist",
      subtitle: "One of five selected teams in the nationwide Smart India Hackathon, 2019, to present a Deep Learning based vocoder for Accent Translation, to convert accent patterns in speech",
      image: require("./assets/images/SIH.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Project Link", url: "https://github.com/kushalchordiya216/Accent-Translation" }
      ]
    },
    {
      title: "Publishes an Academic paper",
      subtitle: "Published a paper entitled Big Data Analysis for Sustainable Cities, at the 11th International Conference on Computing,Communication and Networking Technology",
      image: require("./assets/images/ICCNT.png"),
      footerLink: [{name:"Paper", url:""},{name:"Code", url:""}]
    },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9022149921",
  email_address: "chordiyakushal@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
