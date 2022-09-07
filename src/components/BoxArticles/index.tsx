import { Box, Button, Center, CircularProgress, Spinner, Text } from "@chakra-ui/react";
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

interface BoxArticlesProps {
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
    <Box flex='1' bg='white' w="100%" {...rest}>
      <Box display={{ md: 'flex' }}>
        <Box>
          {
            listOfPosts.map(post => {
              if (isArticlePage)
                return (<MiniArticle key={post.slug} post={post} pt="1rem"/>)

              return (<MiniArticle key={post.slug} post={post} p="1rem"/>)  
            })
          }

          <Center p="1rem">
            <Button bg='gray.900' fontSize='xs' borderRadius="50" onClick={handleLoadMore}>
              LOAD MORE
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
        </Box>

        <Box p={4} pt={4} flexShrink={0}>
          <MostRead />
        </Box>
      </Box>
    </Box>
  )
}