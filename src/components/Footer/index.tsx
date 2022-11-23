import { Box, Flex, Image, Spacer, Text, Link as ChakraLink, Icon, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer(){
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const year = new Date().getFullYear();
  return (
    <Flex 
      as="footer"
      position="sticky"
      justify="center"
    >
      <Flex 
        justify="space-around" 
        align="center" 
        maxWidth={1480}
        w={isMobile ? "390px" : "1024px"}
        p="1.5rem"
      >
        <Box>
          <Image w="178px" src="../logo.png" alt="TheXCodes"/>
          <Text fontWeight="sm" pl="0.5rem" color='white'>
            Copyright © {year} The Xcodes
          </Text>
        </Box>

        <Spacer />

        <Link href="https://www.instagram.com/thexcodes/" passHref={true}>
          <ChakraLink target="_blank">
            <Icon as={RiInstagramLine} fontSize="20" />
          </ChakraLink>
        </Link>

      </Flex>
    </Flex>
  )
}