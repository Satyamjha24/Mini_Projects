import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Box, Center, Heading , useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
  const projectData = [
    {
      title: "Code-Convertor",
      image:
        "https://private-user-images.githubusercontent.com/107462251/267674915-7fe8b228-f25d-4b5d-8ab1-f41172d68185.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ2MTMxODUsIm5iZiI6MTY5NDYxMjg4NSwicGF0aCI6Ii8xMDc0NjIyNTEvMjY3Njc0OTE1LTdmZThiMjI4LWYyNWQtNGI1ZC04YWIxLWY0MTE3MmQ2ODE4NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxM1QxMzQ4MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZTMyNGI4MWIyNDFjNjM5YWNmNmMyMjA5MmE4NWM1Mjc1NjQ2OTZjNDJiMDAxNjViYzkyN2YzYWEwOWJkOGJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.GR1vgpOPTdKfxv_LGXXk1n7mCkU6iUxIcWZir9Vumu8",
      description: "This app helps you to transform your code effortlessly! Say goodbye to syntax errors with our Code Converter app. Convert, debug, and check quality of your code with just a click.",
      techStacks: ["html", "css", "javascript","OpenAI"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Code_Converter",
      livelink: "https://cond-converter.netlify.app/",
    },
    {
      title: "Shayari-Genrator",
      image:
        "https://private-user-images.githubusercontent.com/107462251/267675326-10d1708e-6858-4ee7-9ae5-7fb33e54ea77.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ2MTMxODUsIm5iZiI6MTY5NDYxMjg4NSwicGF0aCI6Ii8xMDc0NjIyNTEvMjY3Njc1MzI2LTEwZDE3MDhlLTY4NTgtNGVlNy05YWU1LTdmYjMzZTU0ZWE3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxM1QxMzQ4MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMzhhYWYyNzE0YTYzODRhYzE3ZWMxNWRiOTlhNTk3YWFkYjE4YTFmZDA5YjE1Yzg0YzY2MGVjNDhhYjQyOTRjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.q-Wl0-lzQAcY7fnDkiCLnSFjzZfomqk0b1ZUZJz3dNk",
      description: "This app allows users to generate shayari, or rhyming couplets, by entering a single word. It uses a large language model to generate the shayari, which are often witty and insightful.",
      techStacks: ["html", "css", "javascript",'OpenAI'],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/joke_generator",
      livelink: "https://shayaris.netlify.app/",
    },
    {
      title: "Calculator",
      image:
        "https://private-user-images.githubusercontent.com/107462251/267673216-69bf0863-bec9-448b-828f-0522f8948535.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ2MTI3NjYsIm5iZiI6MTY5NDYxMjQ2NiwicGF0aCI6Ii8xMDc0NjIyNTEvMjY3NjczMjE2LTY5YmYwODYzLWJlYzktNDQ4Yi04MjhmLTA1MjJmODk0ODUzNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwOTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDkxM1QxMzQxMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODk0ZDNmZDAzYTU1Y2E1ZTcyN2Y1MzkyYjllYzNhYzljZWJjNDk5MjNhNzkwZjAwOGU3MDNiNzdjMmMyOTA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.JupALck7_ie95riIJ4vKUZtQ-S94ig3csVPCY9QspSU",
      description: "Calculations made simple! Our Calculator App empowers you to crunch numbers effortlessly. From basic math to complex equations, it's your go-to tool for precision and convenience.",
      techStacks: ["html", "css", "javascript"],
      repolink: "https://github.com/Satyamjha24/Mini_Projects/tree/main/Codebase/Calculator",
      livelink: "https://satyamjha24-calculator.netlify.app/",
    },
    {
      title: "Project 4",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267398734-72b0d037-3292-4e89-98c7-a28851dfaaed.png",
      description: "This website will provide essential details about the kindergarten's programs, facilities, admission process, and contact information.",
      techStacks: ["html", "css", "javascript", "react", "redux", "angular", "mongodb"],
      repolink: "www.github.com/Ajay84sia/BUYC",
      livelink: "https://url-trim.netlify.app/",
    },

    // Add more project data as needed
  ];

  return (
    <Box p={4}  bg={useColorModeValue('teal.50', 'teal.900')}>
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
