import { Box, Image, Text, Link as ChakraLink, BoxProps } from "@chakra-ui/react";
import Link from "next/link";

type Teacher = {
  name: string
}

type Post = {
  title: string, 
  slug: string, 
  description?: string | null, 
  teachers?: Teacher[] | null, 
  image?: { url: string } | null 
}

interface MiniArticleProps extends BoxProps {
  post: Post;
}

export default function MiniArticle({ post, ...rest }: MiniArticleProps) {
  if (!post){
    <h1>Loadning ...</h1>
  }

  const description = post?.description?.length > 150 ? `${post.description.substring(0, 150)} ...` : post?.description;
  const teacher = post?.teachers.map(teacher => teacher.name).join(',')

  return (
    <Box 
      as="article" 
      display={{ md: 'flex' }} 
      borderBottom="1px" 
      borderColor="gray.200" 
      borderStyle="solid"
      {...rest}
    >
      <Box flexShrink={0}>
        <Image
          width={{ md: 40 }}
          src={post?.image?.url}
          alt=''
        />
      </Box>
      <Box ml={{ md: '0.5rem' }}>
        <Link href={post?.slug}>
        <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
            <Text color="gray.800" fontSize='md' fontWeight='bold' _hover={{ color: 'green.300'}} pb="0px">{post?.title}</Text>
            <Text color="gray.700" fontSize='xs' _hover={{ color: 'green.300'}} pb="0px">By {teacher}</Text>
            <Text color="gray.600" _hover={{ color: 'green.300'}} pb="0px">{description}</Text>
        </ChakraLink>
      </Link>
      </Box>
    </Box>    
  )
}