import { Box, BoxProps, Flex, Link as ChakraLink, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
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
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  if (isMiniHighlight){
    return (
      <Flex as="article" overflow="hidden">
        <Box 
          position="relative"
          {...rest}
        >
          <Link href={`../${post?.slug}`} passHref={true}>
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
              <MainImage url={post?.imageUrl} alt={post?.imageLabel} isMiniHighlight={isMiniHighlight} />
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
      </Flex>
    )
  }

  return (
    <Flex as="article" overflow="hidden">
      <Box 
        position="relative"
        w={isMobile ? "390px" : "1024px"}
        max-height="650px" 
        {...rest}
      >
        <Link href={post?.slug} passHref={true}>
          <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
            <MainImage url={post?.imageUrl} isMiniHighlight={isMiniHighlight} />
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
    </Flex>
  )
}