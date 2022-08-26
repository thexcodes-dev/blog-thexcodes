import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useGetPostsQuery } from "../graphql/generated";
import HighlightArticle from '../components/HighlightArticle';
import MiniArticle from "../components/MiniArticle";
import MostRead from "../components/MostRead";

interface Post { 
  __typename?: 'Post', 
  title: string, 
  slug: string, 
  description?: string | null, 
  teacher?: { __typename?: 'Teacher', name: string } | null, 
  image?: { __typename?: 'Asset', url: string } | null 
}

export default function Home() {

  const { data, loading, error} = useGetPostsQuery();

  let mainPost: Post;

  if (data || data?.posts){
    mainPost = data?.posts[0];
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

          <Box flex='1' bg='white' p="1.35rem" w="100%">
            <Box display={{ md: 'flex' }}>
              <Box>

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <MiniArticle post={mainPost} />

                <Center p="1rem">
                  <Button bg='gray.900' fontSize='xs' borderRadius="50">
                    LOAD MORE
                  </Button>
                </Center>
              </Box>

              <Box p={4} flexShrink={0}>
                <Box w={{ md: 80 }}>

                  <HighlightArticle post={mainPost} isMiniHighlight={true} />                  

                  <Box bg="gray.900">
                    <Box display={{ md: 'flex' }} p="1rem">
                      <Text fontWeight='bold' textTransform="uppercase">Most Read</Text>
                    </Box>

                    <MostRead post={mainPost} />
                    <MostRead post={mainPost} />
                    <MostRead post={mainPost} />
                  </Box>
                </Box>

              </Box>
            </Box>
          </Box>

        </VStack>

      </Flex>
      
      <Footer />
    </Flex>

  )
}
