import { Box, Text, Flex, Link as ChakraLink, CircularProgress } from "@chakra-ui/react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useGetPostsQuery } from "../../graphql/generated";
import TextDescription from "../../components/HighlightArticle/TextDescription";
import MainImage from "../../components/HighlightArticle/MainImage";
import Badge from "../../components/Badge";
import BoxArticles from "../../components/BoxArticles";

interface SessionProps {
  slug: string,
}

export default function Session({ slug }: SessionProps){

  const { data, loading} = useGetPostsQuery({
    variables: { 
      first: 5,
      skip: 4
    }
  })


    return (
      <Flex
        maxWidth={1344}
        mx="auto" 
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
        flexDir="column"
        alignItems="center"
      >
        <Header title={slug} selectedMenu={slug}/>
        
        <Splide>
        {
          data?.posts.map((post, index) => {
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
          <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' color="gray.500" mx="1rem">Explore mais</Text>
          {
            loading ? 
              <CircularProgress value={30} size='120px' /> 
            :
              <BoxArticles posts={data.posts} isArticlePage={true} currentSession={slug} /> 
          }
        </Box>

        <Footer />
      </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  return {
    props: { 
      slug: slug,
     },
  }
}