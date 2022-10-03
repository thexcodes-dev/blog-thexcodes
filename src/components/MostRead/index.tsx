import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import HighlightArticle from "../HighlightArticle";
import PostCard from "./postCard";
import { Post } from "../../graphql/generated";

interface MostReadProps {
  posts: Post[]
}

export default function MostRead({ posts }: MostReadProps){
  const listOfPosts = [...posts];
  const mainPost = listOfPosts.shift();

  return (
    <>
      <HighlightArticle post={mainPost} isMiniHighlight={true} />                  

      <Box bg="gray.900" w="100%">
        <Box display={{ md: 'flex' }} p="1rem">
          <Text fontWeight='bold' textTransform="uppercase" pb="0px" color='white'>Mais Lidos</Text>
        </Box>
        {
          posts.map(post => <PostCard key={post.slug} post={post} />)
        }
      </Box>
    </>   
  )
}
