import { Flex, IconButton, Image, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";

import Link from "next/link";
import NextLink from 'next/link'
import { ReactNode, useEffect, useState } from "react";
import { useGetSessionsQuery } from "../../graphql/generated";
import { RiMenuFill, RiReactjsLine, RiCodeSSlashFill, RiUser3Line } from "react-icons/ri";

interface HomeProps {
  slug: string;
  selectedMenu?: string;
  pageTitle?: string;
  children: ReactNode;
}

export default function Header({ slug, selectedMenu, pageTitle, children}: HomeProps){
  //const [pageTitle, setPageTitle] = useState(slug);
  const { data } = useGetSessionsQuery();

  const variant = useBreakpointValue({ 
    xl: 'normal', 
    md: 'mobile' 
  });

  // useEffect(() => {
  //   const session = data?.sessions.find(s => s.slug === slug);
  //   setPageTitle(session ? `${session.title}` : pageTitle);
  // }, []);

  return (
    <>
      <Head>
        <title>{ slug === 'Home' ? 'The Xcodes · Cresça e evolua com a Programação e Tecnologia!' : `${pageTitle}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/thexcodes-32x32.png" sizes="32x32" />
        <link rel="icon" href="/thexcodes-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/thexcodes-180x180.png" />
        <meta name="msapplication-TileImage" content="/thexcodes-270x270.png" />
        {children}
      </Head>

      <Flex 
        as="nav"
        bg="gray.800"
        position="sticky"
        top="0"
        justify="center"
        zIndex="200"
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
              <Image w={{lg: "178px"}} src="../logo.png" alt="TheXCodes"/>
            </ChakraLink> 
          </Link>        

          { variant === 'normal' ? 
            <>
              <Flex as="nav" w="60%">
                {
                  data?.sessions.map(item => (
                    <Link key={item.slug} href={`/session/${item.slug}`} passHref={true}>
                      <ChakraLink 
                        position="relative"
                        pl="0.5rem"
                        pr="0.5rem"
                        _hover={{
                          color: 'green.300', 
                          transition: "filter 0.5s",
                          textDecoration: 'none'
                        }}
                      >
                        { item.slug === selectedMenu ? 
                            <Text 
                            fontWeight="medium"
                            fontSize={{ '2xl': 'lg' }}
                            color='white' 
                            pb='0px'
                            _hover={{
                              color: 'green.300', 
                              transition: "filter 0.5s",
                              textDecoration: 'none'
                              }}
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
                            <Text 
                            fontWeight="medium" 
                            fontSize={{ '2xl': 'lg' }} 
                            color='white' 
                            pb='0px' 
                            _hover={{
                              color: 'green.300', 
                              transition: "filter 0.5s",
                              textDecoration: 'none'
                            }}
                            >
                            {item.title}
                          </Text> 
                        }
                      </ChakraLink>
                  </Link>
                  
                  ))
                }
              </Flex>

              <Link href="/teacher/leandro-oliveira" passHref={true}>
                <ChakraLink _hover={{ color: 'green.300' }}>
                  <Text 
                    fontWeight="medium" 
                    fontSize={{ '2xl': 'lg' }} 
                    color='white' 
                    pb='0px' 
                    _hover={{
                      color: 'green.300', 
                      transition: "filter 0.5s",
                      textDecoration: 'none'
                    }}
                  >
                    Sobre
                  </Text>
                </ChakraLink>
              </Link>
            </>
            :
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<RiMenuFill />}
                  variant='outline'
                   _hover={{ bgColor: 'gray.400' }}
                />
                <MenuList bgColor="gray.700">
                  {
                    data?.sessions.map(item => (
                      <NextLink key={item.slug} href={`/session/${item.slug}`} passHref>
                        <MenuItem as="a">
                          {item.slug === 'reactjs' ? <RiReactjsLine /> : <RiCodeSSlashFill /> }
                          <Text 
                            fontWeight="medium" 
                            fontSize={{ '2xl': 'lg' }} 
                            color='white' 
                            pb='0px'
                            ml='1rem'
                          >
                            {item.title}
                          </Text> 
                          </MenuItem>
                      </NextLink>
                    ))
                  }
  
                  <NextLink href="/teacher/leandro-oliveira" passHref>
                      <MenuItem as="a">
                        <RiUser3Line />
                        <Text 
                          fontWeight="medium" 
                          fontSize={{ '2xl': 'lg' }} 
                          color='white' 
                          pb='0px'
                          ml='1rem'
                        >
                          Sobre
                        </Text> 
                      </MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
          }  
        </Flex>
      </Flex>    
    </>

  )
}