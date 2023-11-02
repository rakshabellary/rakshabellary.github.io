const workExperience = [
    {
        name: "Oracle Cloud Infrastructure",
        role: "Software Engineer Intern",
        location: "Santa Clara, CA; Seattle, WA",
        timeframe: "Summer 2023; Summer 2022",
        description: "During my most recent internship at OCI in Summer 2023, I worked with the Network Monitoring team and designed and developed a label-based grouping system using Apache Flink in Event Correlation Service to group alerts in network monitoring systems based on Prometheus labels. I also designed and documented a grouping rules language for clients to use as input into the label-based grouping system. Through my work, I replaced the current Prometheus Alertmanager system with a more easily extensible system by adding a feature for new group root event creation. This saved Network Monitoring Team 50% of network alert triaging time through the new grouping system, which reduced the number of network alerts by 50%. Finally, I ended my internship by presenting the project overview and demo of my work to 60+ members of the Network Monitoring Team.\n\nDuring my first internship at OCI in Summer 2022, I worked with the Scan Platform team and designed and developed a scan event parser using Java to collect and compare scan data between two scanners as part of the OCI initiative to transition from Nessus to Qualys vulnerability scanner. This saved the Scan Platform team 25% manpower by automating the scanning, parsing, and data collection processes with a Bash script to compare the two scanners. Furthermore, I created test nodes using Terraform to test the automated processes, and at the end of my internship, I presented my project workflow and demo of my work to 15+ members of the Scan Platform Team.",
        logo: ""
    },
    {
        name: "University of Maryland Department of Computer Science",
        role: "Undergraduate Teaching Assistant",
        location: "College Park, MD",
        timeframe: "Fall 2021",
        description: "As an Undergraduate Teaching Assistant for Object Oriented Programming, I assisted 400+ students with understanding Java concepts, debugging, and working on projects during office hours held weekly. Additionally, I graded object-oriented programming (Java) projects and assignments.",
        logo: ""
    },
    {
        name: "Iribe Initiative for Inclusion and Diversity in Computing (I4C), UMD Department of Computer Science",
        role: "Teaching Outreach Ambassador",
        location: "College Park, MD",
        timeframe: "Spring 2021",
        description: "As a Teaching Outreach Ambassador at I4C, I taught computer science concepts to K-12 students in underrepresented communities through weekly held high school workshops, Rise Up 4 CS+ program (AP Computer Science Principles tutoring), and Girl Scouts workshops. I also collaborated with other ambassadors to plan computer science curriculum and organize outreach activities and events.",
        logo: ""
    },
    {
        name: "Weavr AI",
        role: "Software Engineer Intern",
        location: "San Jose, CA",
        timeframe: "Summer 2020",
        description: "During my internship at Weaver AI, I worked on an NLP project. I annotated a corpus and built a text classifier using PyTorch to determine whether a text is a sales lead.",
        logo: ""
    },
    {
        name: "App47",
        role: "Software Engineer Intern",
        location: "Herndon, VA",
        timeframe: "Summer 2019",
        description: "During my internship at App47, a mobile management company, I worked on the WebUI for the company using Ruby on Rails to enable clients to access the service. Additionally, I developed a status controller feature to allow the application to be easily used internally at the company.",
        logo: ""
    }
  ];

  document.getElementById("oci-button").addEventListener("click", function () {
    displayWork(workExperience[0]);
  });
  document.getElementById("umdcs-button").addEventListener("click", function () {
    displayWork(workExperience[1]);
  });
  document.getElementById("ifc-button").addEventListener("click", function () {
    displayWork(workExperience[2]);
  });
  document.getElementById("weavr-button").addEventListener("click", function () {
    displayWork(workExperience[3]);
  });
  document.getElementById("app47-button").addEventListener("click", function () {
    displayWork(workExperience[4]);
  });
  
  function displayWork(workExp) {
        var contentContainer = document.getElementById("content-container");
        contentContainer.innerHTML = "";
        
        const workName = document.createElement("h1");
        workName.textContent = workExp.name;
    
        const workRole = document.createElement("h2");
        workRole.textContent = workExp.role;

        const workLocation = document.createElement("h2");
        workLocation.textContent = workExp.location;

        const workTimeframe = document.createElement("h2");
        workTimeframe.textContent = workExp.timeframe;

        const workDescription = document.createElement("p");
        workDescription.textContent = workExp.description;
    
        contentContainer.appendChild(workName);
        contentContainer.appendChild(workRole);
        contentContainer.appendChild(workLocation);
        contentContainer.appendChild(workTimeframe);
        contentContainer.appendChild(workDescription);
    
  }