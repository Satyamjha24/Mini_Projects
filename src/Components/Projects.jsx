import React from "react";
import ProjectsGrid from "./ProjectsGrid";
import { Box, Center, Heading , useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
  const projectData = [
    {
      title: "Project 1",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267398734-72b0d037-3292-4e89-98c7-a28851dfaaed.png",
      description: "This website will provide essential details about the kindergarten's programs, facilities, admission process, and contact information.",
      techStacks: ["html", "css", "javascript"],
      repolink: "www.github.com/Ajay84sia/BUYC",
      livelink: "https://example.com/project1",
    },
    {
      title: "Project 2",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267398734-72b0d037-3292-4e89-98c7-a28851dfaaed.png",
      description: "This website will provide essential details about the kindergarten's programs, facilities, admission process, and contact information.",
      techStacks: ["html", "css", "javascript"],
      repolink: "www.github.com/Ajay84sia/BUYC",
      livelink: "https://shayaris.netlify.app/",
    },
    {
      title: "Project 3",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267398734-72b0d037-3292-4e89-98c7-a28851dfaaed.png",
      description: "This website will provide essential details about the kindergarten's programs, facilities, admission process, and contact information.",
      techStacks: ["html", "css", "javascript"],
      repolink: "www.github.com/Ajay84sia/BUYC",
      livelink: "https://example.com/project1",
    },
    {
      title: "Project 4",
      image:
        "https://github-production-user-asset-6210df.s3.amazonaws.com/98752820/267398734-72b0d037-3292-4e89-98c7-a28851dfaaed.png",
      description: "This website will provide essential details about the kindergarten's programs, facilities, admission process, and contact information.",
      techStacks: ["html", "css", "javascript", "react", "redux", "angular", "mongodb"],
      repolink: "www.github.com/Ajay84sia/BUYC",
      livelink: "https://example.com/project1",
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
