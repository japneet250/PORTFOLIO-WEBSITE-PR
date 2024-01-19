let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('header nav');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });

      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('header nav');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  const projectsBoxes = document.querySelectorAll(".projects-box");
  const mainContent = document.querySelector(".main");

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
        });

        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      }
    });
  };

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  projectsBoxes.forEach((box, index) => {
    box.addEventListener("click", (event) => openModal(index, event));
  });
  
  
});

function openModal(index, event) {
  // Stop the click event from propagating to the .main element
  event.stopPropagation();

  const modalContainer = document.getElementById("modalContainer");
  const blurredBackground = document.getElementById("blurredBackground");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const mainContent = document.querySelector(".main");
  const Fbody = document.body;

  // Example data, replace with your actual project information
  const projectsData = [
    {
        title: "Mindfulness Pulse",
        description: "Hackathon Project: MINDFULLNESS HUB : https://mindfullness-pulse.onrender.com\n\n" +
            "• Developed a comprehensive mental health portal at Western University hackathon for Sunlife Canada.\n " +
            "• Designed and implemented features including a dedicated breathing section, personalized health plan\n" +
            "  questionnaire, mood tracker, and an anonymous feeling sharing tab.\n" +
            "• Admin/Manager login provides visual analytics through pie charts and access to anonymous employee thoughts.\n" +
            "• Integrated PayPal API for a payment portal offering a premium version with additional features like an Open AI powered Chatbot and a dedicated mental relief music listening tab.\n" +
            "• Tech Stack: HTML, CSS, JS, PHP, Node JS.\n\n" +
            "This project demonstrates my ability to address real-world challenges, leveraging a range of technologies to create a holistic solution for improving employee mental health."
    },
    {
        title: "Portfolio Website Development ",
        description: "• Designed and developed a professional personal portfolio website using HTML, CSS, and JavaScript.\n" +
        "• Showcased comprehensive work experience, skills, and project details in a visually appealing and user-friendly format.\n" +
        "• Implemented interactive elements for enhanced user engagement.",
    },
    {
      title: "Vector Mentor ",
      description: "• Created Vector Mentor, a web-based vector math visualizer in elm graphics (a functional programming language) for high school and first-year university students struggling with vector concepts.\n" +
      "• Featured a fully customisable vector graph in which user could enter values and visualize the same on graph grid.\n" +
      "• Features vector visualization, interactive quizzes, and learning materials for effective learning.\n"+
      "• Developed user-friendly interface and responsive design.\n" +
      "• Demonstrated skills in web development, UI/UX design, and educational technology.\n"
  },
  {
    title: "Among Us Replica ",
    description: "• Led the development of Elm-Among Us, an Elm-based web application replicating the popular game Among Us.\n"+
    "• Implemented core gameplay mechanics, player interactions, and real-time communication features.\n"+
    "• Utilized Elm for front-end, integrating controls for real-time multiplayer functionality.\n"+
    "• Demonstrated expertise in game development, real-time networking, and Elm programming.",
},

{
  title: "Youtube Clone ",
  description: "• Made a clone for YouTube by just using HTML and CSS.\n" +
  "• Used different types of HTML and CSS features to make it look alike original YouTube.\n" +
  "• Looking to make it dynamic using Java-Script in Future.",
},

// {
//   title: "Work Experience/Clubs ",
//   description: 
//   "Rogers - Chatr Mobile – Tech Solutionist and Sales Associate /Representative \t\t June 2023 -- Present\t   Hamilton, ON |\n"+
// "• Demonstrated ability to effectively engage customers, identify their needs, and provide tailored solutions. Proven track record in achieving sales targets and maximizing revenue through cross-selling and upselling.\n"+
// "• Increased Auto-Pay activation rate from 4% to 20% in the first month.\n"+
// "• Data Analytics and Tech Portal Management: Skilled in data analytics and managing tech portals for informed decision making.\n" +
// "• Demonstrated strong communication skills to resolve over 100+ concerns, and issues while answering 1000+ queries of customers conscientiously with a positive attitude.\n"+
// "• Telecom Activation and Data Entry Proficiency: Efficient in new telecom activations and accurate data entry\n"+
// "• Assisted the Customer Service Manager, ensuring all the products and services are quality checked with attention to detail.\n"+
// "• Strong Multitasking and Organizational Skills: Effective multitasker with excellent organizational abilities for seamless workflow\n\n\n"


// // "McMaster Housing Services — Residence Orientation Representative (ROR) May 2023 – Sept 2023 Hamilton, ON | McMaster University
// // • Organizing and Hosting Large events and making reservations for incoming first year students.
// // • Handling Expenses for all the Events and submitting a Budget Plan to Higher Manager.
// // Coding Tutor — McMaster Outreach Jan 2022 – Present Hamilton, ON | Canada
// // • Taught school students functional programming language ELM to make mini games and helped them to make visual shapes using code
// },
    
];

const formattedDescription = projectsData[index].description.replace(/\n/g, '<br>');


modalTitle.textContent = projectsData[index].title;
modalDescription.innerHTML = formattedDescription; // Use innerHTML to interpret HTML tags
Fbody.style.overflow = "hidden";

  modalContainer.style.display = "flex";
  blurredBackground.style.display = "block";
  mainContent.style.filter = "blur(5px)";
  Fbody.addEventListener("click", closeModal);
}

function closeModal() {
  const modalContainer = document.getElementById("modalContainer");
  const blurredBackground = document.getElementById("blurredBackground");
  const mainContent = document.querySelector(".main");
  const Fbody = document.body;
  

  mainContent.style.filter = "none";

  modalContainer.style.display = "none";
  blurredBackground.style.display = "none";
  mainContent.style.filter = "none";
  Fbody.style.overflow = "auto"; // Enable scrolling when modal is closed
}