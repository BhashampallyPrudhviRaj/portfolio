import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    jenkins,
    mockito,
    agile,
    java,
    cross,
    sql,
    restful,
    kubernetes,
    python,
    dialogflow,
    terraform,
    spring,
    mlflow,
    jira,
    firebase,
    huggingface,
    nlp,
    kafka,
    postgresql,
    postman,
    swagger,
    gcp,
    venv,
    aws,
    junit,
    github_skill,

    carrent,
    jobit,
    tripguide,
    threejs,
    
    balnc,
    bennett,
    ot,
    secernate_games, 
    srix,
    rockefeller_t,
    vintek_t,
    quickcore_t,

    abhi,
    anu,
    dina,
    sai,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "GitHub",
    //   icon: github_skill,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "Jenkins",
    //   icon: jenkins,
    // },
    // {
    //   name: "Mockito",
    //   icon: mockito,
    // },
    // {
    //   name: "Agile",
    //   icon: agile,
    // },
    // {
    //   name: "Cross Functional Teams",
    //   icon: cross,
    // },
    {
      name: "RESTful APIs",
      icon: restful,
    },
    // {
    //   name: "Kubernetes",
    //   icon: kubernetes,
    // },
    // {
    //   name: "Dialogflow CX",
    //   icon: dialogflow,
    // },
    // {
    //   name: "Terraform",
    //   icon: terraform,
    // },
    {
      name: "Spring Boot",
      icon: spring,
    },
    
    
    
    
    // {
    //   name: "MLflow",
    //   icon: mlflow,
    // },
    // {
    //   name: "JIRA",
    //   icon: jira,
    // },
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    // {
    //   name: "HuggingFace Transformers",
    //   icon: huggingface,
    // },
    // {
    //   name: "NLP",
    //   icon: nlp,
    // },
    // {
    //   name: "Kafka",
    //   icon: kafka,
    // },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Swagger",
      icon: swagger,
    },
    {
      name: "GCP",
      icon: gcp,
    },
    // {
    //   name: "Virtual Environments",
    //   icon: venv,
    // },
    {
      name: "AWS",
      icon: aws,
    },
    // {
    //   name: "JUnit",
    //   icon: junit,
    // },
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Engineer ",
      company_name: "Vintek",
      icon: vintek_t,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Designed and deployed microservices-based applications using Spring Boot, Netflix Eureka, and API Gateway, improving modularity by 30%.",
        "Integrated Vite for faster builds, enhancing front-end performance and reducing development time by 20%.",
        "Improved application responsiveness with React, Redux, and Tailwind CSS, cutting page load time by 20%.",
        "Automated CI/CD pipelines with Jenkins, Maven, and Docker, speeding up deployment by 25%.",
        "Optimized PostgreSQL and MongoDB operations, increasing query performance by 30%.",
        "Deployed scalable, high-availability applications on AWS (EC2, S3, Lambda, RDS), achieving 99.9% uptime and reducing costs.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Rockefeller Institute of Government",
      icon: rockefeller_t,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - May 2024",
      points: [
        "Built a web platform with React, Redux, and Vite, reducing development build and refresh times.",
        "Developed RESTful APIs to integrate demographic data, increasing accuracy by 25%.",
        "Designed responsive interfaces using Tailwind CSS and Material UI, enhancing accessibility by 35%.",
        "Deployed scalable applications on AWS (S3, CloudFront), cutting server costs by 20%.",
        "Leveraged MongoDB for efficient data storage and retrieval, boosting performance by 40%",
      ],
    },
    {
      title: "Java Full Stack Developer",
      company_name: "Secernate Games",
      icon: secernate_games,
      iconBg: "#383E56",
      date: "Dec 2020 - Dec 2022",
      points: [
        "Developed high-performance full-stack applications with Spring Boot, Hibernate, and React, boosting system efficiency by 35%.",
        "Enhanced front-end development with Vite, improving build and hot-reload speeds by 15%.",
        "Designed secure RESTful APIs using JWT and OAuth, reducing security vulnerabilities by 20%.",
        "Streamlined deployment workflows with Maven and Docker, increasing deployment frequency by 40%.",
        "Migrated production environments to AWS, ensuring 99.9% uptime and optimizing costs",
      ],
    },
    {
      title: "Java Full stack Developer",
      company_name: "SR Innovation Exchange",
      icon: srix,
      iconBg: "#E6DEDD",
      date: "Mar 2020 - Nov 2020",
      points: [
        "Contributed to developing applications using Spring Boot, ReactJS, PostgreSQL, and Vite, improving build efficiency by 10%.",
        "Leveraged Java 8 features such as Stream APIs and Lambda Expressions, reducing runtime by 20%.",
        "Integrated Firebase for real-time data management, ensuring 99% uptime and seamless performance.",
        "Collaborated with Agile teams to deliver high-quality, production-ready features on time",
      ],
    },
    {
      title: "Junior Engineer ",
      company_name: "Quickcore Technologies",
      icon: quickcore_t,
      iconBg: "#E6DEDD",
      date: "Feb 2019 - Feb 2020",
      points: [
        "Developed and tested Java-based enterprise solutions, enhancing software reliability and reducing system downtime by 15%.",
        "Collaborated with clients to gather requirements and delivered software components on schedule, ensuring project success and customer satisfaction.",
        "Actively participated in Agile sprints, providing updates and contributing to timely project delivery.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "OpenText",
      icon: ot,
      iconBg: "#E6DEDD",
      date: "Jul 2019 - Jan 2020",
      points: [
        "Designed and maintained enterprise-grade software solutions with Java and Spring Boot, enhancing data processing efficiency and system scalability.",
        "Collaborated with cross-functional teams to deliver critical application components, reducing development cycles by 15%.",
        "Optimized cloud-based application performance, achieving a 10% improvement in system response times through efficient code refactoring.",
      ],
    },
    {
      title: "Machine Learning Developer",
      company_name: "Balnc",
      icon: balnc,
      iconBg: "#E6DEDD",
      date: "Nov 2018 - Feb 2019",
      points: [
        "Designed machine learning algorithms to enhance human pose recommendations, achieving a 20% improvement in sports performance.",
        "Developed predictive models in Python, streamlining decision-making processes and boosting system efficiency.",
      ],
    },
    {
      title: "Deep Learning Engineer",
      company_name: "Bennett University",
      icon: bennett,
      iconBg: "#E6DEDD",
      date: "Dec 2018 - Jan 2019",
      points: [
        "Developed and trained deep learning models for image recognition, improving accuracy by 18% using Python and TensorFlow.",
        "Collaborated with research teams on innovative AI solutions, contributing to a paper presented at a leading conference.",
        "Implemented data preprocessing pipelines, optimizing model performance and reducing training time by 20%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Exceptional coder and a fast learner. His energy and drive were key to achieving great goals at OpenText. One of the best coders I've worked with.",
      name: "Anu Shibin Joseph Raj",
      designation: "Lead Software Engineer",
      company: "OpenText",
      image: anu,
    },
    {
      testimonial:
        "Reliable and creative contributor as a Machine Learning Developer, showcasing leadership and a strong aptitude for technology.",
      name: "Abhiragh",
      designation: "Founder and CEO",
      company: "Balnc",
      image: abhi,
    },
    {
      testimonial:
        "Consistently exceeded our expectations with his technical skills, dedication, reliability, and ensuring timely delivery of high-quality work.",
      name: "Manchikatla Sai Teja",
      designation: "Founder & CEO",
      company: "Secernate Games",
      image: sai,
    },
    {
      testimonial:
        "His dedication, technical expertise, ability to meet project goals, and delivering high-quality results made him a valuable asset to our team.",
      name: "Dina H. Refki",
      designation: "Executive Director",
      company: "Rockefeller Institute of Government",
      image: dina,
    },
  ];
  
  const projects = [
    {
      name: "Hidden Chat",
      description:
        "Developed a secure Android chat application using Java and Firebase with integrated language translation via Google API and a hidden access feature for enhanced privacy and secure multimedia exchange.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Google Translate API",
          color: "green-text-gradient",
        },
        {
          name: "Google Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Hidden chat functionality",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Reactive Brain",
      description:
        "Designed an interactive Android application using Java, featuring cognitive skill enhancement games, a progressive difficulty system, and integrated music creation functionality, improving user engagement and focus.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Binary Search",
          color: "green-text-gradient",
        },
        {
          name: "Progressive difficulty system",
          color: "pink-text-gradient",
        },
        {
          name: "Music creation system",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Chatbot",
      description:
        "Integrated Dialogflow CX and Hugging Face Transformers with Flask to develop a hybrid chatbot capable of natural language processing and fallback intent handling, improving response quality and user satisfaction.",
      tags: [
        {
          name: "Dialogflow CX, Hugging Face Transformers",
          color: "blue-text-gradient",
        },
        {
          name: "Flask, RESTful APIs",
          color: "green-text-gradient",
        },
        {
          name: "Google Cloud Services",
          color: "pink-text-gradient",
        },
        {
          name: "Postman API testing",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Automating ML Model Deployment",
      description:
        "Designed automated pipelines for ML model training and deployment using GCP and GitHub integration. Configured Google Cloud Build and Vertex AI for CI/CD workflows, ensuring cost-effective and scalable deployment.",
      tags: [
        {
          name: "Python, MLflow",
          color: "blue-text-gradient",
        },
        {
          name: "Google Cloud Build, Vertex AI, Cloud Storage",
          color: "green-text-gradient",
        },
        {
          name: "GitHub CI/CD",
          color: "pink-text-gradient",
        },
        {
          name: "Cloud Storage",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Digital Form Entry and Management",
      description:
        "Implemented a machine learning algorithm for detecting handwritten and computer-generated text, integrating functionality into ReactJS web and Android applications. Ensured efficient data storage and hosting using AWS, enhancing text recognition and management.",
      tags: [
        {
          name: "Text Detection Algorithms",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "AWS (data storage and hosting)",
          color: "pink-text-gradient",
        },
        {
          name: "Android",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Drowsiness Detector",
      description:
        "Built a Python-based machine learning system to detect driver drowsiness by analyzing facial features in real time, integrating audio alerts and a notification system to enhance road safety.",
      tags: [
        {
          name: "Facial Feature Detection",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Audio notifications",
          color: "pink-text-gradient",
        },
        {
          name: "Alert notifications to authorities",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "File13",
      description:
        "Developed an IoT device with ultrasonic sensors to monitor trash bin levels, integrating geolocation and real-time notifications via Firebase. Created a Java-based Android app for efficient waste management and monitoring.",
      tags: [
        {
          name: "Ultrasonic sensors",
          color: "blue-text-gradient",
        },
        {
          name: "Android, Java",
          color: "green-text-gradient",
        },
        {
          name: "Google Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Geolocation and notifications",
          color: "orange-text-gradient",
        },
      ],
    },
    {
      name: "Sagely",
      description:
        "Engineered an IoT-based water management system using solenoid control, with a Java-based Android app for user-friendly operation and real-time data synchronization through Firebase.",
      tags: [
        {
          name: "Solenoid control system",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Google Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Android",
          color: "orange-text-gradient",
        },
      ],
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };