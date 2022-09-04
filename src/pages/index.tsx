import { Flex, Box, VStack } from "@chakra-ui/react";
import { GetPostsDocument, useGetPostsQuery } from "../graphql/generated";
import { GetStaticProps } from "next";
import { client } from "../service/apollo";

import Header from "../components/Header";
import HighlightArticle from '../components/HighlightArticle';
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";

type Teacher = {
  name: string
}

interface Post { 
  title: string, 
  slug: string, 
  description?: string | null, 
  teacher?: Array<Teacher> | null, 
  image?: { __typename?: 'Asset', url: string } | null 
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts}: HomeProps) {

  useGetPostsQuery({
    variables: {
      skip: 2
    }
  })


  let mainPost:Post;

  if (posts){
    mainPost = posts[0];
  }
  
  return (
    <Flex direction="column" h="100vh" position="relative">
      <Header title="Home"/>

      <Flex 
        maxWidth={1480} 
        mx="auto" 
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      >
        <VStack>
          <HighlightArticle post={mainPost} />
          <Box mt="0px" display={{ md: 'flex' }}>
            <HighlightArticle post={mainPost} isMiniHighlight={true} />
            <HighlightArticle post={mainPost} isMiniHighlight={true} ml={{ md: '0.25rem' }} />
            <HighlightArticle post={mainPost} isMiniHighlight={true} ml={{ md: '0.25rem' }} />
          </Box>

          <BoxArticles posts={posts} p="1rem"/>

        </VStack>

      </Flex>
      
      <Footer />
    </Flex>

  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await client.query({
    query: GetPostsDocument,
    variables: {
      skip: 0
    }
  });

  return {
    props: {
      posts: data.posts
    },
    revalidate: 60 * 30, //30 minutes
  }
}