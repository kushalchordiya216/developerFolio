
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Kushal Chordiya",
  title: "Hi, I'm Kushal",
  subTitle: emoji("A Software Developer, passionate about Machine Learning, Data Science & Distributed Systems, with experience building Web applications and microservices with Node.js, Golang, Python, Java along with Machine Learning pipelines using Tensorflow, Pytorch, Keras, Scikit-learn and some other cool libraries and frameworks. I'm also interested in Finance, Algorithmic Trading & Big Data Analysis. "),
  resumeLink: "https://drive.google.com/file/d/1ohJHZtbXBrIuaTZYBxQEGhmtDXR_0mYe/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/kushalchordiya216",
  linkedin: "https://www.linkedin.com/in/kushal-chordiya/",
  gmail: "chordiyakushal@gmail.com",
  gitlab: "https://gitlab.com/kushalchordiya216",
  phone: "+91-9022149921"
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "THE KIND OF DEVELOPER THAT WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly scalable, performant and fault tolerant backend services for your applications"),
    emoji("⚡ Data driven, robust, modular microservices with modern best practices"),
    emoji("⚡ Machine Learning and Data Science pipelines, from research to production"),
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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  MLSkills : [
    {
      skillName: "Tensorflow",
      iconName: "cib:tensorflow"
    },
    {
      skillName: "PyTorch",
      iconName: "cib:pytorch"
    },
    {
      skillName: "Keras",
      iconName: "cib:keras"
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
      desc: "Developing infrasturcture for backend applications using the MERN stack & Golang, for educational services offered by the company",
      descBullets: [
        "Created an intelligent Adaptive testing platform, which lead to 40% increase in onboarded clients",
        "An AI-based prcotor system, created with Tensorflow, to detect and flag suspicious behaviour, with a response time of 13ms",
        "A service for monitoring, benchmarking and metrics collection written in Golang, which improved performance and reduced latency by 2x"
      ]
    },
    {
      role: "Machine Learning Intern",   
      company: "C-DAC, Pune",
      companylogo: require("./assets/images/cdac.jpeg"),
      date: "Januray 2020 – April 2020",
      desc: "Researching & implementation Novel Neural Network Architectures for security and surveillance",
      descBullets: [
        "Did extensive research on modern state-of-the-art Neural Networks for facial tracking and recognition",
        "Created a novel architecture, focused on speed, which beat previous benchmarks by 12%, capable of 200 FPS",
        "Model was created from scratch using the PyTorch Framework, along with OpenCV library for image preprocessing"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "kushalchordiya216", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const Projects = {
  title: "Projects",
  subtitle: "Some Personal projects I've worked on to explore my Interests",
  projects: [
    {
      title: "WallStreet Simulator",
      subtitle:"A Stock Market Simulator,written as a set of modular microservices using the MERN stack, complete with it's own Index and Stock Exchange, where users can buy, sell & trade stocks, futures and other securities. Designed to imitate actual stock exchanges, the project boasts millisecond latencies even at high loads",
      footerLink: [
        {name:"Link to Code", url:"https://github.com/kushalchordiya216/Wallstreet"}
      ]
    },
    {
      title:"Single Image Super Resolution",
      subtitle:emoji("A Deep Generative Adversarial Network, which accepts low resolution images and extrpolates them into 'super-resolved' high resolution counterparts. Created using the Keras DL framework, the model is capable of perfectly upscaling a given image by upto 8x (Now all the detectives in crime TV shows can truly 'enhance' their evidence 😁)"),
      footerLink: [
        {name:"Link to Code", url:"https://github.com/kushalchordiya216/Wallstreet"}
      ]
    },
    {
      title:"Decentralized Peer-to-Peer Network",
      subtitle: "A cross-platform application to facilitate peer-to-peer networking for messaging and sharing data, without any centrlized administration. Completely free from censorship & spying. Written in Java, the platform becomes more performant as more uers are added, scaling almost linearly",
      footerLink: [
        {name:"Link to Code", url:"https://github.com/kushalchordiya216/Wallstreet"}
      ]
    },
    {
      title: "Network Threat Monitoring using Machine Learning",
      subtitle: "A machine learning approach towards network security and threat monitoring. Using ensemble models fine tuned for detecting specific kinds of threats, along with real time alerts and logs, the models achieved an accuracy of 99.6% on benchmark datasets. Created with the scikit-learn framework and exposed as an API using a Django Backend",
      footerLink: [
        {name:"Link to Code", url:"https://github.com/kushalchordiya216/Wallstreet"}
      ]
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
      title: "Academic Publications",
      subtitle: "Published a paper entitled Big Data Analysis for Sustainable Cities, at the 11th International Conference on Computing,Communication and Networking Technology",
      image: require("./assets/images/ICCNT.png"),
      footerLink: [{name:"Paper", url:""},{name:"Link to Code", url:""}]
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

const educationInfo = {
  title: emoji("Education 🎓"),
  subtitle: "My Academic journey so far",
  education : [
    {
      program: "B.E, Computer Engineering",
      school: "Pune Institute Of Computer Technology",
      score: "CGPA 9.01",
      date: "August 2017-Present"
    },
    {
      program: "Higher Secondary Education",
      school: "P.Jog Junior College",
      score: "86.7%",
      date: "June 2015-June 2017"
    }
  ]
}

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
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, Projects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails, educationInfo};
