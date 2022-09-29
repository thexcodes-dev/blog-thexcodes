import { Box, CircularProgress, Text } from "@chakra-ui/react";
import { useGetPostsMostReadQuery } from "../../graphql/generated";
import HighlightArticle from "../HighlightArticle";
import PostCard from "./postCard";
import { Post } from "../../graphql/generated";

export default function MostRead(){

  const { data, loading} = useGetPostsMostReadQuery({
    variables: { 
      first: 5,
      skip: 0
    }
  })
  
  if (loading) {
    return <CircularProgress value={30} size='120px' />
  }

  const posts = [...data.posts];
  const mainPost = posts.shift() as Post;

  return (
    <>
      <HighlightArticle post={mainPost} isMiniHighlight={true} />                  

      <Box bg="gray.900" w="100%">
        <Box display={{ md: 'flex' }} p="1rem">
          <Text fontWeight='bold' textTransform="uppercase" pb="0px" color='white'>Most Read</Text>
        </Box>
        {
          posts.map(post => <PostCard key={post.slug} post={post} />)
        }
      </Box>
    </>   
  )
}