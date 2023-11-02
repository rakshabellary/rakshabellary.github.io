const csProjects = [
    {
      name: "Adversarial Questions for AI Tools",
      description: "For this project, my team used adversarial question writing techniques to write 50 adversarial questions that could not be answered by AI Tools such as GPT.",
      skills: ["NLP", "Teamwork", "Critical Thinking", "Research"]
    },
    {
      name: "Predicting Whether or Not a Book Would Be Made into a Movie: A Tutorial",
      description: "In this project, I used Python and the Pandas library to conduct hypothesis testing on whether or not a book would be made into a movie. I used data science techniques to clean, graphically display, and analyze a dataset.",
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
      description: "As part of my Capstone Project in QUEST, my team worked on a consulting project with the client Tronox. Tronox is a vertically-integrated chemical company that produces titanium dioxide and inorganic chemicals worldwide, by mining titanium ore, zircon, and other minerals; these materials are then used to bring pigmentation and color to plastics, paper, screens, and many products used worldwide. Tronox tasked the team with improving the efficiency of work flows between the Supply Chain and Operations Management teams (both stakeholders) and defining critical points for the teams. Once the project developed further, the scope grew to the team also facilitating conversations between the two stakeholders to better identify the goals of their collaboration. The team’s approach consisted of connecting with the multiple stakeholders through informational interviews, analyzing more than fifty process flows, and ultimately streamlining multiple process flows into a singular simple process flow. With this information, the team was able to create effective recommendations for the client.",
      skills: ["NLP", "Teamwork", "Critical Thinking", "Research"]
    },
    {
        name: "Optimization of South African Healthcare",
        description: "Sexually transmitted infections (STIs) are a prevalent issue worldwide, especially when it comes to treatment, and due to the sensitive nature of the issue, STIs may remain undiscussed and unidentified for years. South Africa remains the epicenter of the HIV epidemic today, along with many other STIs. Given that STIs and the stigmas associated with sex disproportionately affect women in South Africa, the my QUEST team wanted to create a solution solution to center around creating a safe space for women to get tested for STIs, get education on sexual health, and receive help for sexual/domestic violence. To accomplish this goal, the team designed a mobile clinic system that provides STI tests and educational resources. These clinics can travel to different areas within South Africa in order to reach all demographics. Specifically, a single mobile clinic would be a truck that is operated solely by women who are either trained in sexual health or have personal experience with surviving sexual violence. The goal of hiring only women is to create a safe space for victims who are scared of the stigma involved with reaching out for help or don’t have the resources to get professional care. By creating this safe space, there would be more effective treatment for STIs as well as improved sexual health education since the patients won’t have to worry about going through insurance or unreliable health clinics.",
        skills: ["Problem Solving", "Teamwork", "Professional Communication"]
    },
    {
      name: "Process Improvement Project: Enhancing the Workflow Process of Onboarding Stamp Employees",
      description: "As part of the QUEST Honors program, I worked on a consulting team, Say Yes Consulting, to improve the onboarding process at the Adele H. Stamp Student Union (\"Stamp\"). Stamp is composed of 12 departments, each of which implements a slightly different onboarding process for their new hires. In order to improve the general process of onboarding at Stamp, my team's goal was to create a process that allowed employees to feel more welcomed and prepared as well as standardize this improved process across all 12 departments. My team approached this process using DMAIC (Define, Measure, Analyze, Improve, Control) problem-solving process.",
      skills: ["Process Improvement", "Consulting", "Problem Solving", "Teamwork", "Benchmarking", "DMAIC", "Fishbone Diagrams", "Six Sigma", "Process Flow", "Professional Communication"]
    },
    {
        name: "Product Innovation Challenge: SleepyBaby",
        description: "As part of QUEST, I worked in a team on a product innovation project. The goal was to design a product that effectively solved a problem relating to the theme of rejuvenation. My team's product, SleepyBaby, addressed sleep deprivation in parents of infants and toddlers with restless legs syndrome (RLS). This two-part product worked to alleviate symptoms of RLS causing discontinuous and restless sleep, thus causing parents to wake up frequently to care for their child. The first component was a wearable anklet device for the child that tracked sleep patterns, activity levels, and vitals. The second component, a free mobile app for the parent, displayed this data and used ML to give personalized sleep- and activity-based recommendations for the child.",
        skills: ["Design Thinking", "Design Evaluation", "Innovation", "Creativity", "New Product Design", "Mobile Application Wireframing", "Prototyping", "Professional Communication", "Teamwork"]
    }
  ];

  document.getElementById("cs-button").addEventListener("click", function () {
    displayProjects(csProjects);
  });
  
  document.getElementById("quest-button").addEventListener("click", function () {
    displayProjects(questProjects);
  });
  
  function displayProjects(projects) {
    var contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "";
  
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
  
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
  
      // Apply monospace font
      projectDiv.style.fontFamily = "monospace";
  
      // Alternate background color
      if (i % 2 === 0) {
        projectDiv.style.backgroundColor = "slategray";
        projectDiv.style.color = "black";
      }
  
      const projectName = document.createElement("h2");
      projectName.textContent = project.name;
  
      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
  
      const projectSkills = document.createElement("p");
      projectSkills.textContent = "Skills: " + project.skills.join(", ");
  
      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDescription);
      projectDiv.appendChild(projectSkills);
  
      contentContainer.appendChild(projectDiv);
    }
  }