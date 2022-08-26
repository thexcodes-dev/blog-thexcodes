import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar, Wrap, HStack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useGetPostQuery } from "../graphql/generated";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostProps){
  const { data, loading, error} = useGetPostQuery({
    variables: { 
      slug: post.slug
    }
  });


  return (
    <Flex direction="column" h="100vh" >
      <Header title={post.slug} selectedMenu={post.slug}/>
      <Box>
        <Box position="relative">
          <Box
            h="66vh"
            maxHeight="66vh"
            w="100%"
            overflow="hidden"
            position="relative"
            display="flex"
          >
            <Box 
              as="picture"
              w="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center"
            >
              <Image 
                w="100%"
                h="120%" 
                mt="-5%"
                minHeight="100%"
                animation="tipiOpa 1s normal forwards"
                opacity="1"
                transform="translate3d(0px, 50px, 0px)"
                objectFit="cover"
                objectPosition="center"
                src={data?.post?.image.url}
                alt=""
              />  
            </Box>
            <Box as="span" bg="rgba(10,0,0,0.5);" position="absolute" h="100%" w="100%" zIndex="1" />
          </Box>

          <Box position="absolute"
            maxWidth="900px"
            left="50%" 
            top="50%" 
            textAlign="center" 
            transform="translate(-50%, -50%)"
            transition=".5s ease-out"
            zIndex="2"
          >
              <Text>React JS</Text>
              <Text 
                  fontSize={['sm', 'md', 'lg', 'xl', '3xl']}
                  pt="10px"
                  fontWeight='bold' 
                  color="#ffffff" 
                  textTransform="uppercase"
                  transitionDelay=".5s"
                  transition=".5s ease-out"
                >
                   {data?.post.title}</Text>
                {/* <Text as="p">{data?.post.description}</Text> */}
            </Box>
        </Box>

        <Box 
          maxWidth={1480} 
          mx="auto" 
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          bg="#ffffff"
          color="gray.500"
          p="5rem"
        >
          <Box pt="1rem" pb="2rem" mx="5rem">
            <VStack >
              <Wrap spacing={4}>
                <WrapItem>
                  <Button colorScheme='facebook'>Facebook</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme='twitter'>Twitter</Button>
                </WrapItem>
                <WrapItem>
                  <Button colorScheme='linkedin'>Linkedin</Button>
                </WrapItem>

              </Wrap>

            </VStack>
          </Box>
          <Box mx="5rem">
            <Text dangerouslySetInnerHTML={{ __html: data?.post.text.html}} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const post = {
      slug: slug,
    };

  //console.log(JSON.stringify(post, null, 2));

  return {
    props: { post },
  }
}