import { Flex, Spinner, HStack } from "@chakra-ui/react";
import { GetPostsDocument, useGetPostsQuery } from "../graphql/generated";
import { GetStaticProps } from "next";
import { client } from "../service/apollo";
import { Post } from "../graphql/generated";

import Header from "../components/Header";
import HighlightArticle from '../components/HighlightArticle';
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";

interface HomeProps {
  posts: Post[],
  postsMostRead: Post[]
}

export default function Home({ posts, postsMostRead }: HomeProps) {
  const listOfPosts = [...posts];
  const mainPost = listOfPosts.shift();
  const listOfMainPosts = listOfPosts.splice(0, 3);

  return (
    <Flex
      maxWidth={1344}
      mx="auto" 
      w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      flexDir="column"
      alignItems="center"
    >
      <Header title="Home"/>

      <HighlightArticle post={mainPost} />

      <HStack flexWrap="wrap" mt="0.5rem" w="100%" spacing={{xl: '0.25rem', md: '0rem'}}>
        {
          listOfMainPosts.map((post, index) => {
            if (index === 0) {
              return <HighlightArticle key={post.slug} post={post} isMiniHighlight={true} w={{ base: '1024px', '2xl': '398px', xl: '338px', md: '794px'}} />
            }
            return <HighlightArticle key={post.slug} post={post} isMiniHighlight={true} w={{ base: '1024px', '2xl': '397px', xl: '338px', md: '794px'}} />
          })
        }
      </HStack>

      <BoxArticles posts={listOfPosts} postsMostRead={postsMostRead} p="1rem"/>
      
      <Footer />
    </Flex>

  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { data } = await client.query({
    query: GetPostsDocument,
    variables: {
      first: 10,
      skip: 0
    }
  });

  return {
    props: {
      posts: data.posts,
      postsMostRead: data.mostRead
    },
    //revalidate: 60 * 30, //30 minutes
  }
}