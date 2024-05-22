import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={4}>
          <Link href="/" fontSize="xl" fontWeight="bold">My Blog</Link>
          <HStack spacing={4}>
            <Link href="/"><FaHome /> Home</Link>
            <Link href="/about"><FaUserAlt /> About</Link>
            <Link href="/contact"><FaEnvelope /> Contact</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give the reader an idea of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give the reader an idea of what the post is about.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">About Me</Heading>
              <Text mt={4}>This is a short bio about the blog author. It gives readers a sense of who you are.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <VStack mt={4} spacing={2} align="stretch">
                <Link href="#">Blog Post Title 1</Link>
                <Link href="#">Blog Post Title 2</Link>
                <Link href="#">Blog Post Title 3</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;