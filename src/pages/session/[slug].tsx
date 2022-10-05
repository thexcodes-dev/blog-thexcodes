import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { GetPostsBySessionDocument, Post } from "../../graphql/generated";
import TextDescription from "../../components/HighlightArticle/TextDescription";
import MainImage from "../../components/HighlightArticle/MainImage";
import Badge from "../../components/Badge";
import BoxArticles from "../../components/BoxArticles";
import { client } from "../../service/apollo";

interface SessionProps {
  slug: string,
  posts: Post[],
  postsMostRead: Post[]
}

export default function Session({ slug, posts, postsMostRead }: SessionProps){
  const listOfPosts = [...posts];
  const listOfMainPosts = listOfPosts.splice(0, 3);

  return (
    <Flex
      maxWidth={1344}
      mx="auto" 
      w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      flexDir="column"
      alignItems="center"
    >
      <Header slug={slug} selectedMenu={slug}/>
      
      <Splide>
      {
        listOfMainPosts.map((post, index) => {
          return (
            <SplideSlide key={post.slug}>
              <Box overflow="hidden" maxHeight="600px">
                <Link href={`../${post?.slug}`}>
                  <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                    <MainImage url={post?.image?.url} />
                    {
                      post?.sessions !== undefined &&
                      <Badge 
                        text={post?.sessions[0]?.title} 
                        color={post?.sessions[0]?.color}
                        bgColor={post?.sessions[0]?.bgColor}
                      />
                    }
                    <TextDescription 
                      timeRead={1} 
                      title={post?.title} 
                      description={post?.description} 
                      pb="2rem"
                    />
                  </ChakraLink>
                </Link>
              </Box>
            </SplideSlide>
          )
        })
      }
      </Splide>

      <Box bg="#ffffff" w="100%">
        <BoxArticles posts={listOfPosts} postsMostRead={postsMostRead} isArticlePage={true} currentSession={slug} /> 
      </Box>

      <Footer />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const { data } = await client.query({
    query: GetPostsBySessionDocument,
    variables: {
      slug: [slug],
      first: 10,
      skip: 0
    }
  });

  return {
    props: {
      slug: slug,
      posts: data.posts,
      postsMostRead: data.mostRead
    },
    //revalidate: 60 * 30, //30 minutes
  }
}