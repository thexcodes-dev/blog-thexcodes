import { Box, Flex, Image, Spacer, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiInstagramLine } from "react-icons/ri";

export default function Footer(){
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
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
        p="1.5rem"
      >

        <Box>
          <Image w="178px" src="images/logo.png" alt="TheXCodes"/>
          <Text fontWeight="sm" pl="0.5rem">
            Copyright © 2022 The Xcodes
          </Text>
        </Box>

        <Spacer />

        <Link href="https://www.instagram.com/thexcodes/">
          <ChakraLink>
            <Icon as={RiInstagramLine} fontSize="20" />
          </ChakraLink>
        </Link>

      </Flex>
    </Flex>
  )
}