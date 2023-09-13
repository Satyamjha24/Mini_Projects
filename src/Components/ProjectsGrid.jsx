import React from "react";
import { Grid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projects }) => {
  return (
    <Grid
      templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
      gap={4}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectsGrid;
