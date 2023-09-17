import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Box, Center, Heading , useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
  const projectData = [
    {
      title: "Code-Convertor",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/715a8075-5c09-4154-bf03-f17940b5ddcb",
      description: "This app helps you to transform your code effortlessly! Say goodbye to syntax errors with our Code Converter app. Convert, debug, and check quality of your code with just a click.",
      techStacks: ["html", "CSS", "javascript","OpenAI"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Code_Converter",
      livelink: "https://cond-converter.netlify.app/",
    },
    {
      title: "Shayari-Genrator",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/13bbba08-73e1-4d63-8ba3-cf9220cb6691",
      description: "This app allows users to generate shayari, or rhyming couplets, by entering a single word. It uses a large language model to generate the shayari, which are often witty and insightful.",
      techStacks: ["html", "CSS", "javascript",'OpenAI'],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/joke_generator",
      livelink: "https://shayaris.netlify.app/",
    },
    {
      title: "Calculator",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/4ca08d67-7ff1-405c-a037-cf79f0fded79",
      description: "Calculations made simple! Our Calculator App empowers you to crunch numbers effortlessly. From basic math to complex equations, it's your go-to tool for precision and convenience.",
      techStacks: ["html", "CSS", "javascript"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Calculator",
      livelink: "https://satyamjha24-calculator.netlify.app/",
    },
    {
      title: "URL Shortner",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/1987f8a6-b445-4f7b-bf88-88bdb8b3d33b",
      description: "Created a full-stack URL shortening application using React, Node.js, and MongoDB, enabling users to generate concise links for websites and links of their choice. A user-friendly URL management system.",
      techStacks: ["html", "CSS", "javascript", "react", "Node.js", "Express", "mongodb"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Trim_Url",
      livelink: "https://url-trim.netlify.app/",
    },
    {
      title: "Live Weather",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/f7de4287-48a3-47fa-a18e-23b1d75533d9",
      description: "Developed a dynamic weather app using CSS, JavaScript, and React, empowering users to instantly access real-time weather updates for their desired cities or states. Demonstrated expertise in web development and user-centric functionality.",
      techStacks: ["react","javascript", "Open Weather Api", "CSS"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Live_Weather/weather_app",
      livelink: "https://weather-satyam.netlify.app/",
    },
    {
      title: "TODO App",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/59389b6b-6738-42a2-9f57-f093ef059ff8",
      description: "Developed a robust Angular-based Todo App with TypeScript and Tailwind, integrating JSON Server for seamless task management—demonstrating expertise in frontend development and backend data handling.",
      techStacks: ["Angular","TypeScript", "Tailwind CSS", "JSON Server"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/todo-app",
      livelink: "https://todoangularsatyam.netlify.app/",
    },
    {
      title: "Calculate BMI",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/018cf126-dded-4348-921d-05d98de0f796",
      description: "Engineered a Body Mass Index calculator utilizing Angular, TypeScript, and Tailwind, enabling users to swiftly determine their BMI by inputting weight and height. Demonstrated proficiency in frontend development and user-friendly health assessment tools.",
      techStacks: ["Angular","TypeScript", "Tailwind CSS"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/BMI",
      livelink: "https://calculate-live-bmi.netlify.app/",
    },
    {
      title: "My Stopwatch",
      image:
        "https://github.com/Satyamjha24/Mini_Projects/assets/107462251/95219754-845d-4ece-9a5f-6931719570e3",
      description: "Introducing StopwatchPro: Your precision timekeeper on the go! Whether you're tracking workouts, measuring cooking times, or managing your day, our Stopwatch App has you covered. Experience accuracy and simplicity at your fingertips.",
      techStacks: ["HTML","CSS", "JavaScript"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Stopwatch",
      livelink: "https://calculate-live-bmi.netlify.app/",
    },
    

    // Add more project data as needed
  ];

  return (
    <Box p={4}  bg={useColorModeValue('teal.50', 'teal.900')} pt={'12vh'}>
      <Heading as="h1" size="xl" mb={4} textAlign={"center"}>
        Mini Projects
      </Heading>
      <Center>
        <ProjectsGrid projects={projectData} />
      </Center>
    </Box>
  );
};

export default Projects;
