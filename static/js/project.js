var projects = document.querySelector(".project_list");

var project_data = [
  {
    "name": "School Website",
    "repository": "https://github.com/Vaibhav2154/school-website",
    "description": "Developed a school website featuring institution details, courses, events, faculty profiles, and more. The website is built with a responsive user interface, using React for the frontend and Node.js for the backend, with TailwindCSS for styling and MongoDB for database management.",
    "year": 2023,
    "tech_stack": "React, TailwindCSS, Node.js, MongoDB, Git, Heroku"
  },
  {
    name: "XOS File Management and Retrieval",
    repository: "https://github.com/Keerthivasan-Venkitajalam/XOS-file-management-and-retrievalr",
    description: "Demonstrated file management concepts like block allocation, FAT indexing, and efficient storage mechanisms.",
    year: 2023,
    tech_stack: "C, File Systems"
  },
  {
    name: "Maintenance Needs and Traffic Anomalies in Network Devices Using Machine Learning",
    repository: "https://github.com/Keerthivasan-Venkitajalam/MAINTENANCE-NEEDS-AND-TRAFFIC-ANOMALIES-IN-NETWORK-DEVICES-USING-MACHINE-LEARNING",
    description: "Designed machine learning solutions for predictive maintenance in network devices, reducing downtime.",
    year: 2022,
    tech_stack: "Python, Scikit-Learn, IoT"
  },
  {
    name: "Deadlock and Cycle Detection",
    repository: "https://github.com/Keerthivasan-Venkitajalam/deadlock_and_cycle_detection",
    description: "Implemented four algorithms to detect deadlocks in resource allocation graphs.",
    year: 2021,
    tech_stack: "C, Algorithms"
  },
  {
    name: "Remote Sensing and Machine Learning",
    repository: "https://github.com/Keerthivasan-Venkitajalam/Remote_Sensing_And_MachineLearning",
    description: "Integrated remote sensing and image processing techniques with machine learning for disaster prediction.",
    year: 2024,
    tech_stack: "Python, Remote Sensing, Machine Learning"
  },
  {
    name: "AI Algorithms for Personalized Medicine Based on Genomic Data",
    repository: "https://github.com/Keerthivasan-Venkitajalam/AI-Algorithms-for-Personalized-Medicine-Based-on-Genomic-Data",
    description: "Developed AI models for analyzing genomic and clinical data to predict individual treatment responses.",
    year: 2023,
    tech_stack: "Python, AI, Genomics"
  },
  {
    name: "ILS on TSP and Machine Learning Integration",
    repository: "https://github.com/Keerthivasan-Venkitajalam/ils_on_tsp_and_added_ML",
    description: "Implemented Iterated Local Search (ILS) for the Traveling Salesman Problem with sequential and parallel execution.",
    year: 2022,
    tech_stack: "Python, Machine Learning, Optimization"
  },
  {
    name: "Remotif.ai",
    repository: "https://github.com/Keerthivasan-Venkitajalam/remotif.ai",
    description: "IoT-based remote health monitoring system integrating sensors for vital sign tracking.",
    year: 2023,
    tech_stack: "IoT, Python, Healthcare, React, TailwindCSS, NodeJS"
  },
  {
    name: "Skin Cancer Detection Using AI",
    repository: "https://github.com/Keerthivasan-Venkitajalam/skin-cancer-ai",
    description: "Leveraged machine learning techniques for early and accurate detection of skin cancer.",
    year: 2023,
    tech_stack: "Python, Deep Learning, Computer Vision"
  },
  {
    name: "Fake News Prediction",
    repository: "https://github.com/Keerthivasan-Venkitajalam/fake-news-prediction",
    description: "Built a machine learning model using RandomForestClassifier to detect fake news.",
    year: 2022,
    tech_stack: "Python, Machine Learning"
  },
  {
    name: "Graphs and Neural Networks",
    repository: "https://github.com/Keerthivasan-Venkitajalam/graphs_and_neural_networks_mfc",
    description: "Explored applications of neural networks in graph-based data for enhanced predictions.",
    year: 2023,
    tech_stack: "Python, Neural Networks, Graph Theory"
  },
  {
    name: "Stock Portfolio Management Design",
    repository: "https://github.com/Keerthivasan-Venkitajalam/stock-portfolio-management-design-non-functional",
    description: "Designed a website to manage stock portfolios, emphasizing user-friendly interfaces.",
    year: 2021,
    tech_stack: "HTML, CSS, JavaScript"
  },
  {
    name: "MP3 Player in Java",
    repository: "https://github.com/Keerthivasan-Venkitajalam/mp3_player_java",
    description: "Created a Java-based MP3 player with features like play, pause, and track selection.",
    year: 2021,
    tech_stack: "Java, Audio Processing"
  },
  {
    name: "Image Processing in MIPS",
    repository: "https://github.com/Keerthivasan-Venkitajalam/image_processing_in_mips",
    description: "Implemented image processing algorithms using MIPS assembly language for optimized performance.",
    year: 2020,
    tech_stack: "MIPS, Assembly, Image Processing"
  },
  {
    name: "Diabetes Prediction",
    repository: "https://github.com/Keerthivasan-Venkitajalam/diabetes-prediction",
    description: "Developed a predictive model for diabetes onset based on health factors.",
    year: 2021,
    tech_stack: "Python, Machine Learning, Healthcare"
  },
  {
    name: "GDSC Solutions Challenge 2023: Air Flight Dynamics",
    repository: "https://github.com/Keerthivasan-Venkitajalam/GDSC_SOLUTIONS_CHALLENGE_2023_TEAM_FRATERNITY",
    description: "Minimized air flight emissions and optimized fuel efficiency through trajectory management.",
    year: 2023,
    tech_stack: "Python, AI, Aerospace"
  },
  {
    name: "Facial Recognition Using PCA-SVD",
    repository: "https://github.com/Keerthivasan-Venkitajalam/MATHEMATICS_FOR_COMPUTING_SEM1_PROJECT_1_FACIAL_RECOGNITION_USING_PCA-SVD",
    description: "Implemented a facial recognition system using Principal Component Analysis and Singular Value Decomposition.",
    year: 2022,
    tech_stack: "Python, Machine Learning, Computer Vision"
  },
  {
    name: "Serial Binary Adder Using SR Flip Flop",
    repository: "https://github.com/Keerthivasan-Venkitajalam/ELEMENTS_OF_COMPUTING_1_SEM1_PROJECT_1_CPU_-_PROJECT_2_SERIAL_BINARY_ADDER_USING_SR_FLIPFLOP",
    description: "Designed a binary adder for efficient computations in digital circuits.",
    year: 2022,
    tech_stack: "Digital Logic, Hardware"
  },
  {
    name: "Matrix Operations Header File",
    repository: "https://github.com/Keerthivasan-Venkitajalam/C_PROGRAMMING-PROBLEM_SOLVING_SEM1_PROJECT_1_MATRIX_OPERATIONS_HEADER_FILE_CREATION",
    description: "Created a header file in C for matrix operations, including addition, multiplication, and inversion.",
    year: 2022,
    tech_stack: "C, Algorithms"
  }
];

project_data.forEach(function (project) {
  var projectElement = document.createElement("div");
  projectElement.classList.add("project");

  var projectTitle = document.createElement("h2");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("title");

  var projectLink = document.createElement("a");
  projectLink.href = project.repository;
  projectLink.textContent = "View Repository";
  projectLink.setAttribute('target', '_blank'); 

  var projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  var projectYear = document.createElement("div");
  projectYear.classList.add("year");
  projectYear.textContent = project.year;

  var projectTechStack = document.createElement("div");
  projectTechStack.classList.add("tech-stack");
  projectTechStack.textContent = project.tech_stack;

  projectElement.appendChild(projectTitle);
  projectElement.appendChild(projectLink);
  projectElement.appendChild(projectDescription);
  projectElement.appendChild(projectYear);
  projectElement.appendChild(projectTechStack);

  projects.appendChild(projectElement);
});
