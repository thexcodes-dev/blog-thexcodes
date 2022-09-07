import { Flex, Box, VStack, Spinner } from "@chakra-ui/react";
import { GetPostsDocument, useGetPostsBySessionQuery, useGetPostsQuery } from "../graphql/generated";
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
  const listOfPosts = [...posts];
  const mainPost = listOfPosts.shift();

  const { data, loading} = useGetPostsQuery({
    variables: { 
      first: 5,
      skip: 4
    }
  })
  
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
            {
              listOfPosts.map((post, index) => {
                if (index === 0) {
                  return <HighlightArticle key={post.slug} post={post} isMiniHighlight={true} />
                }
                return <HighlightArticle key={post.slug} post={post} isMiniHighlight={true} ml={{ md: '0.25rem' }} />
              })
            }
          </Box>
          {
              loading ? 
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='green.500'
                  size='md'
                  ml="0.5rem"
                />
              :
                <BoxArticles posts={data.posts} p="1rem"/> 
            }

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
      first: 4,
      skip: 0
    }
  });

  return {
    props: {
      posts: data.posts
    },
    //revalidate: 60 * 30, //30 minutes
  }
}