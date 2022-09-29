import { Box, BoxProps, Button, Center, CircularProgress, HStack, Spinner, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import * as Apollo from '@apollo/client';
import { GetPostsBySessionDocument, GetPostsDocument, useGetPostsBySessionQuery } from "../../graphql/generated";
import HighlightArticle from "../HighlightArticle";
import MiniArticle from "../MiniArticle";
import MostRead from "../MostRead";
import { client } from "../../service/apollo";

interface Post { 
  title: string, 
  slug: string, 
  description?: string | null, 
  teacher?: { __typename?: 'Teacher', name: string } | null, 
  image?: { __typename?: 'Asset', url: string } | null 
}

interface BoxArticlesProps extends BoxProps{
  posts: Post[],
  isArticlePage?: boolean | false,
  currentSession?: string | null
}

export default function BoxArticles ({ posts, isArticlePage = false, currentSession, ...rest }: BoxArticlesProps){
  const [listOfPosts, setListOfPosts] = useState<Post[]>(posts);
  const [currentPage, setCurrentPage] = useState(isArticlePage ? 5 : 9);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLoadMore(event: FormEvent) {
    event.preventDefault();

    setCurrentPage(currentPage+5);
    setIsLoading(true);

    if (isArticlePage){
      const { data } = await client.query({
        query: GetPostsBySessionDocument,
        variables: {
          slug: [currentSession],
          first: 5,
          skip: currentPage
        }
      });
  
      setListOfPosts([...listOfPosts, ...data.posts]);
    } else {
      const { data } = await client.query({
        query: GetPostsDocument,
        variables: {
          first: 5,
          skip: currentPage
        }
      });
  
      setListOfPosts([...listOfPosts, ...data.posts]);
    }

    setIsLoading(false);
  }

  return (
    <HStack flexWrap="wrap" bg='white' w="100%" p="1rem" alignItems="normal" {...rest}>
      <VStack 
        w={{ xl: '800px', md: '794px'}} 
        color="black"
        divider={<StackDivider borderColor='gray.200' />}
      >
        {
          listOfPosts.map(post => {
            if (isArticlePage)
              return (<MiniArticle key={post.slug} post={post} pt="1rem"/>)

            return (<MiniArticle key={post.slug} post={post}/>)  
          })
        }
 
        <Center p="1rem">
          <Button bg='gray.900' color="white" fontSize='xs' borderRadius="50" onClick={handleLoadMore}>
            BUSCAR MAIS POSTS
            { isLoading && 
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='green.500'
                size='md'
                ml="0.5rem"
              /> }
            </Button>
          </Center>
        
      </VStack>


      <VStack w={{ xl: '350px', md: '794px'}} color="white" bg='gray.900'>
        <MostRead />
      </VStack>
    </HStack>
  )
}