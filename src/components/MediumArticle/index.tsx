import { Box, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../graphql/generated";

interface MediumArticleProps {
  post: Post;
}

export default function MediumArticle({ post }: MediumArticleProps) {
  return (
    <Box as="article" maxWidth="400px" pl="2rem">
      <Box flexShrink={0}>
        <Image
          src={post?.image?.url}
          alt=''
        />
      </Box>
      <Box pt="1rem">
        <Link href={`../${post.slug}`}>
        <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
          <Text color="gray.800" fontSize={'xl'} fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">{post?.title}</Text>
          <Text color="gray.700" fontSize={'lg'} _hover={{ color: 'green.300'}} pb="0px">By {post?.teacher.name}</Text>
          <Text color="gray.600" fontSize={'lg'} _hover={{ color: 'green.300'}} pb="0px">{post.description}</Text>
        </ChakraLink>
      </Link>
      </Box>
    </Box> 
  )
}