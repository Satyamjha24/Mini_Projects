import React from "react";
import {
  Box,
  Text,
  Image,
  Link,
  Flex,
  Wrap,
  WrapItem,
  Icon,
  Tooltip,
  useColorModeValue
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, image, techStacks, repolink, livelink } = project;

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="md"
      bg={useColorModeValue('gray.100', 'gray.900')}
      p={4}
      m={4}
      maxW="400px"
    >
      <Text  fontWeight="semibold" fontSize="xl" textAlign={"center"}>
        {title}
      </Text>
      <Image src={image} mt={2} alt={title} />
      <Text mt={4} textAlign={"justify"}>
        {description}
      </Text>
      <Wrap mt={4} spacing={2}>
        {techStacks.map((tech, index) => (
          <WrapItem key={index}>
            <Box bg="teal.200" color="teal.800" px={2} py={1} borderRadius="md" textTransform={'capitalize'} fontWeight={'bold'}>
              {tech}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Flex mt={4} justifyContent={"space-around"}>
        <Tooltip label="Github Repo" fontSize="md">
          <Link href={repolink} color={useColorModeValue('teal.500', 'white')} isExternal>
            <Icon as={FaGithub} mr={2} boxSize={6} />
          </Link>
        </Tooltip>

        <Tooltip label="Live Link" fontSize="md">
          <Link href={livelink} color={useColorModeValue('teal.500', 'white')} isExternal>
            <Icon as={FaLink} mr={2} boxSize={6} />
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
