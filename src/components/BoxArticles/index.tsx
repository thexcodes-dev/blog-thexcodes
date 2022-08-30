import { Box, Button, Center, Text } from "@chakra-ui/react";
import HighlightArticle from "../HighlightArticle";
import MiniArticle from "../MiniArticle";
import MostRead from "../MostRead";

interface Post { 
  title: string, 
  slug: string, 
  description?: string | null, 
  teacher?: { __typename?: 'Teacher', name: string } | null, 
  image?: { __typename?: 'Asset', url: string } | null 
}

interface BoxArticlesProps {
  posts: Post[],
  isArticlePage?: boolean
}

export default function BoxArticles ({ posts, isArticlePage = false, ...rest }: BoxArticlesProps){
  const mainPost = posts[0];

  return (
    <Box flex='1' bg='white' w="100%" {...rest}>
      <Box display={{ md: 'flex' }}>
        <Box>
          {
            posts.map(post => {
              if (isArticlePage)
                return (<MiniArticle key={post.slug} post={post}/>)

              return (<MiniArticle key={post.slug} post={post} p="1rem"/>)  
            })
          }

          <Center p="1rem">
            <Button bg='gray.900' fontSize='xs' borderRadius="50">
              LOAD MORE
            </Button>
          </Center>
        </Box>

        <Box p={4} pt={0} flexShrink={0}>
          <Box w={{ md: 80 }}>

            <HighlightArticle post={mainPost} isMiniHighlight={true} />                  

            <Box bg="gray.900">
              <Box display={{ md: 'flex' }} p="1rem">
                <Text fontWeight='bold' textTransform="uppercase">Most Read</Text>
              </Box>

              {
                posts.map(post => <MostRead key={post.slug} post={post} />)
              }
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}