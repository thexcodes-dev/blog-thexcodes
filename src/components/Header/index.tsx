import { Flex, Image, Link as ChakraLink, Spinner, Text } from "@chakra-ui/react";
import { useQuery, gql } from '@apollo/client';

import Head from "next/head";
import Link from "next/link";
import { useGetSessionsQuery } from "../../graphql/generated";

interface HomeProps {
  title: string;
  selectedMenu?: string;
}

export default function Header({ title, selectedMenu}: HomeProps){
  const { data } = useGetSessionsQuery();

  return (
    <>
      {/* <Head>
        <title>{title} - The Xcodes</title>
      </Head>   */}

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
              data?.sessions.map(item => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <ChakraLink 
                    position="relative"
                    pl="0.5rem"
                    pr="0.5rem"
                    _hover={{
                      color: 'green.300'
                    }}
                  >
                    { item.slug === selectedMenu ? 
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
                        >{item.title}</Text>                  
                    :
                        <Text fontWeight="medium">{item.title}</Text> 
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