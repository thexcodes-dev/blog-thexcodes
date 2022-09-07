import { Box, BoxProps, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../graphql/generated";

import Badge from "../Badge";
import MainImage from "./MainImage";
import TextDescription from "./TextDescription";



interface HighlightArticleProps extends BoxProps {
  post: Post;
  isMiniHighlight?: boolean | false;
}

export default function HighlightArticle({ post, isMiniHighlight, ...rest }: HighlightArticleProps){

  return (
    <Box as="article" overflow="hidden" position="relative" {...rest}>
      <Link href={post?.slug}>
        <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
          <MainImage url={post?.image?.url} isMiniHighlight={isMiniHighlight} />
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
            isMiniHighlight={isMiniHighlight} />
        </ChakraLink>
      </Link>
    </Box>
  )
}