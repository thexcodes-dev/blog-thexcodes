import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <Flex direction="column" h="100vh" >
      <Header title="Home"/>

      <Flex 
        maxWidth={1480} 
        mx="auto" 
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      >
        <VStack>

          <Box as="article" overflow="hidden" position="relative">
            <Box 
              w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
              max-height="650px"
              transition= "transform .5s ease"
              _hover={{
                transform: "scale(1.5)",
              }}
            >
              <Image 
                width="100%" 
                height="100%" 
                object-fit= "contain"
                src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg"
                alt=""
              />
              
            </Box>

            <Badge
              position="absolute"
              top="4"
              left="4"
            >
              Default
            </Badge>

            <Box 
                p="10px"
                w="100%"
                position="absolute"
                bottom="0"
                _hover={{
                  color: 'green.300', 
                  transition: "filter 0.5s"
                }}
                bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
              >
                <Text>1 min read</Text>
                <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                <Text fontSize={['sm', 'md']}>Hoje em dia temos visto muitos desenvolvedores sonhando e conseguindo</Text>
            </Box>
            
          </Box>

          <Box mt="0px" display={{ md: 'flex' }}>
            <Box>
              <Box as="article" overflow="hidden" position="relative">
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    object-fit= "contain"
                    src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg"
                    alt=""
                  />
                  
                </Box>

                <Badge
                  position="absolute"
                  top="4"
                  left="4"
                >
                  Default
                </Badge>

                <Box 
                    p="10px"
                    w="100%"
                    position="absolute"
                    bottom="0"
                    _hover={{
                      color: 'green.300', 
                      transition: "filter 0.5s"
                    }}
                    bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                  >
                    <Text>1 min read</Text>
                    <Text fontSize='md' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                </Box>
                
              </Box>
            </Box>

            <Box ml={{ md: '0.25rem' }}>
              <Box as="article" overflow="hidden" position="relative">
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    object-fit= "contain"
                    src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg"
                    alt=""
                  />
                  
                </Box>

                <Badge
                  position="absolute"
                  top="4"
                  left="4"
                >
                  Default
                </Badge>

                <Box 
                    p="10px"
                    w="100%"
                    position="absolute"
                    bottom="0"
                    _hover={{
                      color: 'green.300', 
                      transition: "filter 0.5s"
                    }}
                    bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                  >
                    <Text>1 min read</Text>
                    <Text fontSize='md' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                </Box>
                
              </Box>
            </Box>

            <Box ml={{ md: '0.25rem' }}>
              <Box as="article" overflow="hidden" position="relative">
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    object-fit= "contain"
                    src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg"
                    alt=""
                  />
                  
                </Box>

                <Badge
                  position="absolute"
                  top="4"
                  left="4"
                >
                  Default
                </Badge>

                <Box 
                    p="10px"
                    w="100%"
                    position="absolute"
                    bottom="0"
                    _hover={{
                      color: 'green.300', 
                      transition: "filter 0.5s"
                    }}
                    bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                  >
                    <Text>1 min read</Text>
                    <Text fontSize='md' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                </Box>
                
              </Box>
            </Box>
          </Box>

          <Box flex='1' bg='white' p="1.35rem" w="100%">
            <Box display={{ md: 'flex' }}>
              <Box>

                <Box as="article" display={{ md: 'flex' }} 
                  p="1rem"
                  borderBottom="1px" borderColor="gray.200" borderStyle="solid"
                >
                  <Box flexShrink={0}>
                    <Image
                      width={{ md: 40 }}
                      src='https://bit.ly/2jYM25F'
                      alt='Woman paying for a purchase'
                    />
                  </Box>
                  <Box ml={{ md: '0.5rem' }}>
                    <Link href="">
                    <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                        <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                        <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                        <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                    </ChakraLink>
                  </Link>
                  </Box>
                </Box>

                <Box as="article" display={{ md: 'flex' }}
                  p="1rem"
                  borderBottom="1px" borderColor="gray.200" borderStyle="solid"
                >
                  <Box flexShrink={0}>
                    <Image
                      width={{ md: 40 }}
                      src='https://bit.ly/2jYM25F'
                      alt='Woman paying for a purchase'
                    />
                  </Box>
                  <Box ml={{ md: '0.5rem' }}>
                    <Link href="">
                    <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                        <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                        <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                        <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                    </ChakraLink>
                  </Link>
                  </Box>
                </Box>

                <Center p="1rem">
                  <Button bg='gray.900' fontSize='xs' borderRadius="50">
                    LOAD MORE
                  </Button>
                </Center>
              </Box>

              <Box p={4} flexShrink={0}>
                <Box w={{ md: 80 }}>

                  <Box>
                    <Box as="article" overflow="hidden" position="relative">
                      <Box 
                        transition= "transform .5s ease"
                        _hover={{
                          transform: "scale(1.5)",
                        }}
                      >
                        <Image 
                          width="100%" 
                          height="100%" 
                          object-fit= "contain"
                          src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg"
                          alt=""
                        />
                        
                      </Box>

                      <Badge
                        position="absolute"
                        top="4"
                        left="4"
                      >
                        Default
                      </Badge>

                      <Box 
                          p="10px"
                          w="100%"
                          position="absolute"
                          bottom="0"
                          _hover={{
                            color: 'green.300', 
                            transition: "filter 0.5s"
                          }}
                          bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                        >
                          <Text fontSize="sm">1 min read</Text>
                          <Text fontSize='sm' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                      </Box>
                      
                    </Box>
                  </Box>

                  <Box bg="gray.900">
                    <Box display={{ md: 'flex' }} p="1rem">
                      <Text fontWeight='bold' textTransform="uppercase">Most Read</Text>
                    </Box>

                    <Flex p={4} display={{ md: 'flex' }} align="center" >
                      <Box flexShrink={0}>
                        <WrapItem>
                          <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                        </WrapItem>
                      </Box>
                      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Text
                          fontWeight='bold'
                          textTransform='uppercase'
                          fontSize='sm'
                          letterSpacing='wide'
                        >
                          No Man’s Sky Review
                        </Text>
                      </Box>
                    </Flex> 

                    <Flex p={4} display={{ md: 'flex' }} align="center" >
                      <Box flexShrink={0}>
                        <WrapItem>
                          <Avatar size='xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                        </WrapItem>
                      </Box>
                      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
                        _hover={{
                          color: 'green.300', 
                          transition: "filter 0.5s"
                        }}
                      >
                        <Text
                          fontWeight='bold'
                          textTransform='uppercase'
                          fontSize='sm'
                          letterSpacing='wide'
                        >
                          No Man’s Sky Review
                        </Text>
                      </Box>
                    </Flex> 
                  </Box>

                </Box>

              </Box>
            </Box>
        </Box>

        </VStack>

      </Flex>
      
      <Footer />
    </Flex>

  )
}
