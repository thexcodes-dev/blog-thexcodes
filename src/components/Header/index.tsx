import { Box, Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

interface HomeProps {
  title: string;
  selectedMenu?: string;
}

export default function Header({ title, selectedMenu}: HomeProps){

  const menu = ['React JS', 'Node JS']

  return (
    <>
      <Head>
        <title>{title} - The Xcodes</title>
      </Head>  

      <Flex 
        as="header"
        bg="gray.800"
        position="sticky"
        justify="center"
      >
        <Flex 
          justify="space-around" 
          align="center" 
          maxWidth={1480}
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          p="0.5rem"
        >
          <Link href="/">
            <ChakraLink>
              <Image w="178px" src="images/logo.png" alt="TheXCodes"/>
            </ChakraLink> 
          </Link>        

          <Flex as="nav" w="60%">
            {
              menu.map(item => (
                <Link key={item} href={`/${item}`}>
                  <ChakraLink 
                    position="relative"
                    pl="0.5rem"
                    pr="0.5rem"
                    _hover={{
                      color: 'green.300'
                    }}
                  >
                    { item === selectedMenu ? 
                        <Text 
                          fontWeight="medium"
                          _after={{
                            content: `""`,
                            h:"3px",
                            w: '100%',
                            position: 'absolute',
                            bg: 'green.300',
                            left: '0',
                            top: '7',
                            bottom: '1px',
                            borderRadius: "3px 3px 0 0"
                          }}
                        >{item}</Text>                  
                    :
                        <Text fontWeight="medium">{item}</Text> 
                    }
                  </ChakraLink>
              </Link>
              ))
            }
          </Flex>

          <Link href="/sobre">
            <ChakraLink _hover={{ color: 'green.300' }}>
              <Text fontWeight="medium">
                Sobre
              </Text>
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>    
    </>

  )
}