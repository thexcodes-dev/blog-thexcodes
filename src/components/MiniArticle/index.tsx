import { Box, Image, Text, Link as ChakraLink, BoxProps, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../graphql/generated";

interface MiniArticleProps extends BoxProps {
  post: Post;
}

export default function MiniArticle({ post, ...rest }: MiniArticleProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  if (!post){
    <h1>Loading ...</h1>
  }

  const description = post?.description?.length > 150 ? `${post.description.substring(0, 150)} ...` : post?.description;
  const teacher = post?.teacher.name

  return (
    <Box 
      as="article" 
      display={{ md: 'flex' }} 
      {...rest}
    >
      <Box flexShrink={0}>
        <Image
          width={{ md: 40 }}
          src={post?.imageUrl}
          alt={post?.imageLabel}
        />
      </Box>
      <Box ml={{ md: '0.5rem' }}>
        <Link href={`../${post?.slug}`} passHref={true}>
        <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
        <Text color="gray.800" fontSize={'lg'} fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">{post?.title}</Text>
                <Text color="gray.700" fontSize={'sm'} _hover={{ color: 'green.300'}} pb="0px">By {teacher}</Text>
                <Text color="gray.600" fontSize={'md'} _hover={{ color: 'green.300'}} pb="0px">{description}</Text>
            
        </ChakraLink>
      </Link>
      </Box>
    </Box>    
  )
}