import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Container,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          ></Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              onClick={() => navigate("/")}
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Logo
            </Text>

            <Flex
              lineHeight={"normal"}
              fontWeight={"bold"}
              fontSize={"15px"}
              gap={"12px"}
              alignItems={"center"}
              marginStart={"3"}
            >
              <Text
                onClick={() => navigate("/category")}
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Category
              </Text>
              <Text
                onClick={() => navigate("/product")}
                _hover={{ cursor: "pointer", textDecoration: "underline" }}
              >
                Product
              </Text>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
      <Box height={"100vh"}>
        <Outlet />
      </Box>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
              </Box>
              <Text fontSize={"sm"}>
                © 2022 Chakra Templates. All rights reserved
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Product</Heading>
              <Box as="a" href={"#"}>
                Overview
              </Box>
              <Box as="a" href={"#"}>
                Features
              </Box>
              <Box as="a" href={"#"}>
                Tutorials
              </Box>
              <Box as="a" href={"#"}>
                Pricing
              </Box>
              <Box as="a" href={"#"}>
                Releases
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Company</Heading>
              <Box as="a" href={"#"}>
                About
              </Box>
              <Box as="a" href={"#"}>
                Press
              </Box>
              <Box as="a" href={"#"}>
                Careers
              </Box>
              <Box as="a" href={"#"}>
                Contact
              </Box>
              <Box as="a" href={"#"}>
                Partners
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Support</Heading>
              <Box as="a" href={"#"}>
                Help Center
              </Box>
              <Box as="a" href={"#"}>
                Terms of Service
              </Box>
              <Box as="a" href={"#"}>
                Legal
              </Box>
              <Box as="a" href={"#"}>
                Privacy Policy
              </Box>
              <Box as="a" href={"#"}>
                Status
              </Box>
            </Stack>
            <Stack align={"flex-start"}>
              <Heading>Follow Us</Heading>
              <Box as="a" href={"#"}>
                Facebook
              </Box>
              <Box as="a" href={"#"}>
                Twitter
              </Box>
              <Box as="a" href={"#"}>
                Dribbble
              </Box>
              <Box as="a" href={"#"}>
                Instagram
              </Box>
              <Box as="a" href={"#"}>
                LinkedIn
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
