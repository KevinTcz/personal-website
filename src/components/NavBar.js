import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  Container,
} from "@chakra-ui/react";
import Logo from "../logo.svg";
import { Link } from "react-scroll";
import data from "./header.data";
import React from "react";
import "./NavBar.css";

const CTA = "Get Started";

export default function Header() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* // Logo */}
        {/* <Image src={Logo.src} h="50px" /> */}
        {/* // Nav Items */}
          <HStack as="nav" spacing="5">
            {data.map((item, i) => (
              <Link
                key={i}
                activeClass="active"
                to={item.label}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                // onSetActive={this.handleSetActive}
              >
                <Button variant="nav"> {item.label} </Button>
              </Link>
            ))}
          </HStack>
        {/* // Call to action items */}
        {/* <HStack>
          <Button>{CTA}</Button>
        </HStack> */}
      </Flex>
    </chakra.header>
  );
}
