import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar, Wrap, HStack } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GetPostDocument, GetPostsBySessionDocument, useGetPostQuery } from "../graphql/generated";
import { client } from "../service/apollo";

type Session = { 
  slug: string, 
  title: string 
}

type Post = {
    slug: string, 
    title: string, 
    description?: string | null, 
    teacher?: { name: string } | null, 
    text?: { html: string } | null, 
    image?: { url: string } | null, 
    session?: Session | null 
}

interface ArticleProps {
  session: string;
  article: Post,
  listOfArticlesBySession: Post[]
}

export default function Article({ session, article, listOfArticlesBySession }: ArticleProps){
  console.log(article);
  return (
    <Flex direction="column" h="100vh" >
      <Header title={session} selectedMenu={session}/>
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
                   {article?.title}</Text>
            </Box>
        </Box>

        <Box 
          maxWidth={1480} 
          mx="auto" 
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          bg="#ffffff"
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
          <Box mx="5rem" color="gray.500">
            <Text dangerouslySetInnerHTML={{ __html: article?.text.html}} />
          </Box>
        
          <Box mx="5rem" pt="5rem">
            <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' color="gray.500">Explore mais</Text>
            <BoxArticles posts={listOfArticlesBySession} isArticlePage={true} />
          </Box>
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

  const session:Session = getPost.data ? getPost.data.post?.session : { slug: '', title: ''}

  console.log(session)

  const getPostsBySessionDocument = await client.query({
    query: GetPostsBySessionDocument,
    variables: {
      slug: [session.slug]
    }
  });

  return {
    props: { 
      session: 'react js',
      article: getPost.data.post,
      listOfArticlesBySession: getPostsBySessionDocument.data.posts
     },
  }
}