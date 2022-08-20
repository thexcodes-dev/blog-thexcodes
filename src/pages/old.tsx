import { Flex, Image, Text, Link as ChakraLink, Box, HStack, VStack, Badge, Button, Center, WrapItem, Avatar } from "@chakra-ui/react";
import Link from "next/link";

export default function Old() {
  return (
    <Flex direction="column" h="100vh" >

      <Flex
        as="header"
        alignItems="center"
        maxWidth={1480}
        w="100%"
        h="12"
        mx="auto"
        mt="4"
        px="6"
      >
        <Image w="178px" src="images/logo.png" alt="TheXCodes"/>

        <Flex as="nav" alignItems="center" ml="6" h="10" >
          <Link href="">
            <ChakraLink 
              display="inline-block"
              position="relative"
              pl="2"
              pr="2"
              h="4"
              _hover={{
                color: 'green.300'
              }}
            >
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
              >
                React JS
              </Text>
            </ChakraLink>
          </Link>

          <Link href="">
            <ChakraLink 
              display="flex"
              position="relative"
              pl="2"
              pr="2"
              h="4"
              _hover={{
                color: 'green.300'
              }}
              >
              <Text 
                fontWeight="medium"
                // _after={{
                //   content: `""`,
                //   h:"3px",
                //   w: '100%',
                //   position: 'absolute',
                //   bg: 'green.300',
                //   left: '0',
                //   bottom: '1px',
                //   borderRadius: "3px 3px 0 0"
                // }}
              >
                Node JS
              </Text>
            </ChakraLink>
          </Link>
        </Flex>

        <Link href="">
            <ChakraLink 
              ml="auto"
              pl="2"
              pr="2"
              h="4"
              _hover={{
                color: 'green.300'
              }}
            >
              <Text fontWeight="medium">
                Sobre
              </Text>
            </ChakraLink>
          </Link>

      </Flex>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

      <VStack>

       <Flex 
        as="article"
        display="block"
        position="relative"
        h="100%"
      >
        <Box overflow="hidden">
          <Link href="/teste">
            <ChakraLink>
              <Box 
                h="650px"
                transition= "transform .5s ease"
                _hover={{
                  transform: "scale(1.5)",
                }}
              >
                <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1.jpg" /> 
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
                <Text fontSize='3xl' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                <Text fontSize='md'>Hoje em dia temos visto muitos desenvolvedores sonhando e conseguindo</Text>
            </Box>

            </ChakraLink>
          </Link>


        </Box>
       </Flex>

       <HStack mt="2px !important">
        <Flex 
          as="article"
          display="block"
          position="relative"
        >
          <Box overflow="hidden">
            <Link href="">
              <Box>
              <ChakraLink>
                <Box
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                </Box>
                
                <Badge position="absolute" top="4" left="4">
                  Default
                </Badge>

                <Box 
                  p="10px"
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

                </ChakraLink>
              </Box>
              
            </Link>
          </Box>
        </Flex>

        <Flex 
          as="article"
          display="block"
          position="relative"
          ml="2px !important"
        >
          <Box overflow="hidden">
            <Link href="">
              <Box>
              <ChakraLink>
                <Box
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                </Box>
                
                <Badge position="absolute" top="4" left="4">
                  Default
                </Badge>

                <Box 
                  p="10px"
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

                </ChakraLink>
              </Box>
              
            </Link>
          </Box>
        </Flex>

        <Flex 
          as="article"
          display="block"
          position="relative"
          ml="2px !important"
        >
          <Box overflow="hidden">
            <Link href="">
              <Box>
              <ChakraLink>
                <Box
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                </Box>
                
                <Badge position="absolute" top="4" left="4">
                  Default
                </Badge>

                <Box 
                  p="10px"
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

                </ChakraLink>
              </Box>
              
            </Link>
          </Box>
        </Flex>
       </HStack>

      </VStack>

      </Flex>

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Box flex='2' bg='white' p="0.25rem">

            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>

            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>

            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>

            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>

            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>
            
            <Flex as="article" p="1rem" borderBottom="1px" borderColor="gray.200" borderStyle="solid">
              <Box w="13rem">
                <Link href="">
                  <ChakraLink>
                    <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                  </ChakraLink>
                </Link>
              </Box> 
              <Box w="100%" pl="0.5rem" color="black">
                <Link href="">
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}}>Entrevista técnica para software engineer back-end: Roadmap</Text>
                      <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}}>By Leandro Oliveira</Text>
                      <Text color="gray.600" _hover={{ color: 'green.300'}}>Molestiae esse quos et temporibus sed id accusantium. Voluptatum quos deleniti et...</Text>
                  </ChakraLink>
                </Link>
                      
              </Box>
            </Flex>

            <Center p="1rem">
              <Button bg='gray.900'  fontSize='xs' borderRadius="50">
                LOAD MORE
              </Button>
            </Center>
            
          </Box>
          <Box flex='1' bg='white' p="1.35rem" w="100%">

            <Flex 
              as="article"
              display="block"
              position="relative"
            >
              <Box overflow="hidden">
                <Link href="">
                  <Box>
                  <ChakraLink>
                    <Box
                      transition= "transform .5s ease"
                      _hover={{
                        transform: "scale(1.5)",
                      }}
                    >
                      <Image src="https://thexcodes.com/wp-content/uploads/2022/08/joshua-aragon-FGXqbqbGt5o-unsplash-1024x681.jpg" /> 
                    </Box>

                    <Box 
                      p="10px"
                      position="absolute"
                      bottom="0"
                      _hover={{
                        color: 'green.300', 
                        transition: "filter 0.5s"
                      }}
                      bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                    >
                      <Text fontSize='md' fontWeight='bold' textTransform="uppercase">Entrevista técnica para software engineer back-end: Roadmap</Text>
                    </Box>

                    </ChakraLink>
                  </Box>
                </Link>
              </Box>
            </Flex>

            <Flex bg="gray.900">
              <VStack w="100%" alignItems="stretch">
                <Box p="25px">
                  <Text fontWeight='bold' textTransform="uppercase">Most Read</Text>
                </Box>
                <Box p="25px">
                  <Flex>
                    <Box>
                      <Box>
                        <WrapItem>
                          <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                        </WrapItem>
                      </Box>
                      <Box>
                        <Text fontWeight='bold' textTransform="uppercase">Most Read</Text>
                      </Box>
                    </Box>

                  </Flex>
                </Box>

                    

              </VStack>
            </Flex>

          </Box>

      </Flex>
    
    </Flex>
  )
}
