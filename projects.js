const csProjects = [
    {
      name: "Adversarial Questions for AI Tools",
      description: "Description for Element 1",
      skills: ["NLP", "Teamwork", "Critical Thinking", "Research"]
    },
    {
      name: "Predicting Whether or Not a Book Would Be Made into a Movie: A Tutorial",
      description: "Description for Element 2",
      skills: ["Data Science", "Python", "Pandas"]
    },
    {
        name: "Reading Planner | Mobile and Web Application Senior Research Lab",
        description: "During my senior year of high school, I designed and developed a web app called the Reading Planner. It displayed texts of reading assignments, generated personalized reading schedules to help students manage their workload, sent reminders through email to keep users on schedule, and used psychological strategies to help users understand the content of their reading assignments and strengthen their long-term memory.",
        skills: ["JavaScript", "jQuery", "HTML", "CSS"]
    }
  ];

  const questProjects = [
    {
      name: "QUEST Capstone Consulting Project",
      description: "Description for Element 1",
      skills: ["NLP", "Teamwork", "Critical Thinking", "Research"]
    },
    {
        name: "Optimization of South African Healthcare",
        description: "Description for Element 2",
        skills: ["Problem Solving", "Teamwork", "Professional Communication"]
    },
    {
      name: "Process Improvement Project: Enhancing the Workflow Process of Onboarding Stamp Employees",
      description: "Description for Element 3",
      skills: ["Process Improvement", "Consulting", "Problem Solving", "Teamwork", "Benchmarking", "DMAIC", "Fishbone Diagrams", "Six Sigma", "Process Flow", "Professional Communication"]
    },
    {
        name: "Product Innovation Challenge: SleepyBaby",
        description: "Description for Element 4",
        skills: ["Design Thinking", "Design Evaluation", "Innovation", "Creativity", "New Product Design", "Mobile Application Wireframing", "Prototyping", "Professional Communication", "Teamwork"]
    }
  ];

document.getElementById("cs-button").addEventListener("click", function () {
    var contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "Computer Science content goes here.";
});

document.getElementById("quest-button").addEventListener("click", function () {
    var contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "QUEST Honors content goes here.";
});