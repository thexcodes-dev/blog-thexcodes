import { Box, BoxProps, Image, Link as ChakraLink, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../graphql/generated";

interface MediumArticleProps extends BoxProps {
  post: Post;
}

export default function MediumArticle({ post, ...rest }: MediumArticleProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  return (
    <Box as="article" pl="2rem" pb="1rem" {...rest}>
      <Box flexShrink={0}>
        <Image
          src={post?.imageUrl}
          alt={post?.imageLabel}
        />
      </Box>
      <Box pt="1rem">
        <Link href={`../${post.slug}`} passHref={true}>
        <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
          {
            isMobile ? 
            (
              <>
                <Text color="gray.800" fontSize={'lg'} fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">{post?.title}</Text>
                <Text color="gray.700" fontSize={'sm'} _hover={{ color: 'green.300'}} pb="0px">By {post?.teacher.name}</Text>
                <Text color="gray.600" fontSize={'md'} _hover={{ color: 'green.300'}} pb="0px">{post.description}</Text>
              </>
            ) : (
              <>
                <Text color="gray.800" fontSize={'lg'} fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">{post?.title}</Text>
                <Text color="gray.700" fontSize={'lg'} _hover={{ color: 'green.300'}} pb="0px">By {post?.teacher.name}</Text>
                <Text color="gray.600" fontSize={'lg'} _hover={{ color: 'green.300'}} pb="0px">{post.description}</Text>
              </>
            )
          }
        </ChakraLink>
      </Link>
      </Box>
    </Box> 
  )
}