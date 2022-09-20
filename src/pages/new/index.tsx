import { Flex, Link as ChakraLink, Image, Box, Text, HStack, VStack, StackDivider, Center, Button, WrapItem, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import Badge from "../../components/Badge";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function NewHome(){

  return (
    <Flex
      maxWidth={1344}
      mx="auto" 
      w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      flexDir="column"
      alignItems="center"
    >
      <Header title="Home"/>

      <Flex overflow="hidden">
        <Box 
          position="relative"
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          max-height="650px"
        >
          <Link href="">
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
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
                  src="https://media.graphassets.com/lhIgsPsySEiaWhDNsd5w"
                  alt=""
                />
              </Box>
              <Badge 
                text="React JS" 
                
              />
              <Box 
                position="absolute" 
                w="100%"
                bottom="0"
                p="1rem"
                _hover={{
                  color: 'green.300', 
                  transition: "filter 0.5s"
                }}
                bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
              >
                <Text color='white' pb='0px'>min read</Text>
                <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' textTransform="uppercase" color="white" pb="0px">FIQUE POR DENTRO DO QUE HÁ DE NOVO NO REACT 18</Text>
                <Text fontSize={['sm', 'md']} color="white" pb="0px">O time do React lançou recentemente uma versão alpha do React 18. Esse lançamento é focado em experiência do usuário e em performance com melhorias in</Text>
              </Box>
            </ChakraLink>
          </Link>
        </Box>
      </Flex>

      <HStack flexWrap="wrap" mt="0.5rem" w="100%" spacing={{xl: '0.25rem', md: '0rem'}}>
        <Box overflow="hidden">
          <Box position="relative" w={{ base: '1024px', xl: '398px', md: '794px'}}>
            <Link href="">
              <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    //maxWidth="397px"
                    object-fit= "contain"
                    src="https://media.graphassets.com/lhIgsPsySEiaWhDNsd5w"
                    alt=""
                  />
                </Box>
                <Badge 
                  text="React JS" 
                />
                <Box 
                  position="absolute" 
                  w="100%"
                  bottom="0"
                  p=".5rem"
                  _hover={{
                    color: 'green.300', 
                    transition: "filter 0.5s"
                  }}
                  bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                >
                  <Text fontSize='sm' fontWeight='bold' textTransform="uppercase" color="white" pb="0px">FIQUE POR DENTRO DO QUE HÁ DE NOVO NO REACT 18</Text>
                </Box>
              </ChakraLink>
            </Link>
          </Box>
        </Box>
        
        <Box overflow="hidden">
          <Box position="relative" w={{ base: '1024px', xl: '397px', md: '794px'}}>
            <Link href="">
              <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    maxWidth="397px"
                    maxHeight="169px"
                    object-fit= "contain"
                    src="https://media.graphassets.com/rmqMRATpQAC2XxureUj3"
                    alt=""
                  />
                </Box>
                <Badge 
                  text="React JS" 
                />
                <Box 
                  position="absolute" 
                  w="100%"
                  bottom="0"
                  p=".5rem"
                  _hover={{
                    color: 'green.300', 
                    transition: "filter 0.5s"
                  }}
                  bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                >
                  <Text fontSize='sm' fontWeight='bold' textTransform="uppercase" color="white" pb="0px">FIQUE POR DENTRO DO QUE HÁ DE NOVO NO REACT 18</Text>
                </Box>
              </ChakraLink>
            </Link>
          </Box>
        </Box>

        <Box overflow="hidden">
          <Box position="relative" w={{ base: '1024px', xl: '397px', md: '794px'}}>
            <Link href="">
              <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    //maxWidth="397px"
                    object-fit= "contain"
                    src="https://media.graphassets.com/lhIgsPsySEiaWhDNsd5w"
                    alt=""
                  />
                </Box>
                <Badge 
                  text="React JS" 
                />
                <Box 
                  position="absolute" 
                  w="100%"
                  bottom="0"
                  p=".5rem"
                  _hover={{
                    color: 'green.300', 
                    transition: "filter 0.5s"
                  }}
                  bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                >
                  <Text fontSize='sm' fontWeight='bold' textTransform="uppercase" color="white" pb="0px">FIQUE POR DENTRO DO QUE HÁ DE NOVO NO REACT 18</Text>
                </Box>
              </ChakraLink>
            </Link>
          </Box>
        </Box>

      </HStack>
     
     <HStack flexWrap="wrap" bg='white' mt="0.5rem" w="100%" p="1rem" pt="2rem" alignItems="normal">
      <VStack 
        w={{ xl: '800px', md: '794px'}} 
        color="black"
        divider={<StackDivider borderColor='gray.200' />}
      >

        <Box as="article" display={{ md: 'flex' }}>
          <Box flexShrink={0}>
            <Image
              width={{ md: 40 }}
              src='https://media.graphassets.com/UlAWf4mRSsGtTEWsQVHn'
              alt=''
            />
          </Box>
          <Box ml={{ md: '0.5rem' }}>
            <Link href=''>
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">Entrevista técnica para software engineer back-end: Roadmap</Text>
                <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}} pb="0px">By Leandro</Text>
                <Text color="gray.600" _hover={{ color: 'green.300'}} pb="0px">Hoje em dia temos visto muitos desenvolvedores sonhando e conseguindo a tão desejada vaga internacional como software engineer, mas você já se perguntou</Text>
            </ChakraLink>
          </Link>
          </Box>
        </Box> 

        <Box as="article" display={{ md: 'flex' }} >
          <Box flexShrink={0}>
            <Image
              width={{ md: 40 }}
              src='https://media.graphassets.com/UlAWf4mRSsGtTEWsQVHn'
              alt=''
            />
          </Box>
          <Box ml={{ md: '0.5rem' }}>
            <Link href=''>
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">Entrevista técnica para software engineer back-end: Roadmap</Text>
                <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}} pb="0px">By Leandro</Text>
                <Text color="gray.600" _hover={{ color: 'green.300'}} pb="0px">Hoje em dia temos visto muitos desenvolvedores sonhando e conseguindo a tão desejada vaga internacional como software engineer, mas você já se perguntou</Text>
            </ChakraLink>
          </Link>
          </Box>
        </Box> 

        <Center p="1rem">
          <Button bg='gray.900' color='white' fontSize='xs' borderRadius="50">
            LOAD MORE
          </Button>
        </Center>
        
      </VStack>
      <VStack w={{ xl: '350px', md: '794px'}} color="white" bg='black'>
        <Box overflow="hidden">
          <Box position="relative" w="100%">
            <Link href="">
              <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Box 
                  transition= "transform .5s ease"
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                >
                  <Image 
                    width="100%" 
                    height="100%" 
                    //maxWidth="397px"
                    object-fit= "contain"
                    src="https://media.graphassets.com/lhIgsPsySEiaWhDNsd5w"
                    alt=""
                  />
                </Box>
                <Badge 
                  text="React JS" 
                />
                <Box 
                  position="absolute" 
                  w="100%"
                  bottom="0"
                  p=".5rem"
                  _hover={{
                    color: 'green.300', 
                    transition: "filter 0.5s"
                  }}
                  bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
                >
                  <Text fontSize='sm' fontWeight='bold' textTransform="uppercase" color="white" pb="0px">FIQUE POR DENTRO DO QUE HÁ DE NOVO NO REACT 18</Text>
                </Box>
              </ChakraLink>
            </Link>
          </Box>
        </Box>

        <Flex p={4} display={{ md: 'flex' }} align="center" >
          <Box flexShrink={0}>
            <WrapItem>
              <Avatar size='xl' src='	https://media.graphassets.com/rmqMRATpQAC2XxureUj3' />{' '}
            </WrapItem>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='white'
              pb='0px'
            >
              NODE.JS BEST PRACTICES FOR BEGINNERS AND EXPERTS
            </Text>
          </Box>
        </Flex> 

        <Flex p={4} alignItems="center">
          <Box flexShrink={0}>
            <WrapItem>
              <Avatar size='xl' src='	https://media.graphassets.com/rmqMRATpQAC2XxureUj3' />{' '}
            </WrapItem>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='wide'
              color='white'
              pb='0px'
            >
              NODE.JS BEST PRACTICES FOR BEGINNERS AND EXPERTS
            </Text>
          </Box>
        </Flex> 

        <Flex p={4} alignItems="center">
          <Box>
            <WrapItem>
              <Avatar size='2xl' src='	https://media.graphassets.com/rmqMRATpQAC2XxureUj3' />
            </WrapItem>
          </Box>
          <Box>
            <Text
              fontWeight='bold'
              textTransform='uppercase'
              fontSize='2xl'
              letterSpacing='wide'
              color='white'
              pb='0px'
            >
              NODE.JS BEST PRACTICES FOR BEGINNERS AND EXPERTS
            </Text>
          </Box>
        </Flex> 

      </VStack>
     </HStack>

     <Footer />
    </Flex>
  )
}