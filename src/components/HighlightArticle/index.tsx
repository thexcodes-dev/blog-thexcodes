import { Box, BoxProps } from "@chakra-ui/react";
import Badge from "../Badge";
import MainImage from "./MainImage";
import TextDescription from "./TextDescription";

interface Post {
  title: string, 
  slug: string, 
  description?: string | null, 
  teacher?: { __typename?: 'Teacher', name: string } | null, 
  image?: { __typename?: 'Asset', url: string } | null 
}

interface HighlightArticleProps extends BoxProps {
  post: Post;
  isMiniHighlight?: boolean | false;
}

export default function HighlightArticle({ post, isMiniHighlight, ...rest }: HighlightArticleProps){

  if (!post){
    return (
      <Box as="article" overflow="hidden" position="relative" {...rest}>
      <MainImage url='https://thexcodes.com/wp-content/uploads/2022/04/Capa-Typecript-Nodecapa-node-typescript.png' isMiniHighlight={isMiniHighlight} />
      <Badge text='ReactJs' />
      <TextDescription 
        timeRead={1} 
        title='Loading title'
        description='Loading description' isMiniHighlight={isMiniHighlight} />
    </Box>
    )
  }

  return (
    <Box as="article" overflow="hidden" position="relative" {...rest}>
      <MainImage url={post.image.url} isMiniHighlight={isMiniHighlight} />
      <Badge text='ReactJs' />
      <TextDescription 
        timeRead={1} 
        title={post.title} 
        description={post.description} isMiniHighlight={isMiniHighlight} />
    </Box>
  )
}