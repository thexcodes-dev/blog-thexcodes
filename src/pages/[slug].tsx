import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar, Wrap, HStack, Spinner, CircularProgress } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GetPostDocument, Post, useGetPostsBySessionQuery } from "../graphql/generated";
import { client } from "../service/apollo";

type Session = { 
  slug: string, 
  title: string 
}

interface ArticleProps {
  article: Post,
}

export default function Article({ article }: ArticleProps){
  const sessionTitle = article?.sessions[0].title
  const sessionSlug = article?.sessions[0].slug
  
  const { data, loading} = useGetPostsBySessionQuery({
    variables: { 
      slug: article?.sessions.map(session => session.slug),
      first: 5,
      skip: 0
    }
  })

  const posts = [...data.posts] as Array<Post>;
  const mostRead = [...data.mostRead] as Array<Post>;

  return (
    <Flex mx="auto" flexDir="column">
      <Header title={sessionTitle} selectedMenu={sessionSlug}/>
      
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
              src={article?.image.url}
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
          <Text color="#ffffff" >{sessionTitle}</Text>
          <Text 
              fontSize={['sm', 'md', 'lg', 'xl', '3xl']}
              pt="10px"
              fontWeight='bold' 
              color="#ffffff" 
              textTransform="uppercase"
              transitionDelay=".5s"
              transition=".5s ease-out"
            >
                {article?.title}</Text>
        </Box>
      </Box>

        <Box 
          maxWidth={1344} 
          mx="auto" 
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          bg="#ffffff"
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
          <Box  color="gray.500" mx="2rem">
            <Box fontSize="md" textAlign="justify" dangerouslySetInnerHTML={{ __html: article?.text.html }} />
          </Box>
        
          <Box>
            <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' color="gray.500" mx="1rem">Explore mais</Text>
            {
              loading ? 
                <CircularProgress value={30} size='120px' /> 
              :
                <BoxArticles posts={posts} postsMostRead={mostRead} isArticlePage={true} currentSession={sessionSlug} /> 
            }
          </Box>
        </Box>
      <Footer />
    </Flex>
  )
}

type GetPost = {
  data: {
    post: Post
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const getPost: GetPost = await client.query({
    query: GetPostDocument,
    variables: {
      slug
    }
  });

  return {
    props: { 
      article: getPost.data.post,
     },
  }
}