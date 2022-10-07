import { Flex, HStack } from "@chakra-ui/react";
import { GetPostsDocument } from "../graphql/generated";
import { GetStaticProps } from "next";
import { client } from "../service/apollo";
import { Post } from "../graphql/generated";

import Header from "../components/Header";
import HighlightArticle from '../components/HighlightArticle';
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";
import Head from "next/head";

interface HomeProps {
  posts: Post[],
  postsMostRead: Post[]
}

export default function Home({ posts, postsMostRead }: HomeProps) {
  const listOfPosts = [...posts];
  const mainPost = listOfPosts.shift();
  const listOfMainPosts = listOfPosts.splice(0, 3);

  return (
    <>
      <Flex
        maxWidth={1344}
        mx="auto" 
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
        flexDir="column"
        alignItems="center"
      >
        <Header slug="Home">
          <link rel="canonical" href="https://www.thexcodes.com" />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="description" content="Este é o The X Codes, um local para falar sobre programação e tecnologia e trocar conhecimento e experiências." />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="The Xcodes · Cresça e evolua com a Programação e Tecnologia!" />
          <meta property="og:description" content="Este é o The X Codes, um local para falar sobre programação e tecnologia e trocar conhecimento e experiências." />
          <meta property="og:url" content="https://thexcodes.com/" />
          <meta property="og:site_name" content="The Xcodes" />
          <meta property="article:published_time" content="2022-08-10T23:46:40+00:00" />
          <meta property="article:modified_time" content="2022-08-15T00:08:37+00:00" />
          <meta property="og:image" content={mainPost?.image.url} />
          <meta property="og:image:width" content={mainPost?.image.width?.toString()} />
          <meta property="og:image:height" content={mainPost?.image.height?.toString()} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content="Leandro Oliveira" />
          <meta name="twitter:label2" content="Est. reading time" />
          <meta name="twitter:data2" content="3 minutos" />
        </Header>

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
    </>

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