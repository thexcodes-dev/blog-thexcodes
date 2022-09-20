import { Avatar, Box, Flex, WrapItem, Text, useBreakpointValue } from "@chakra-ui/react";

interface Post {
  title: string, 
  slug: string, 
  image?: { url: string } | null 
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps){
  const variant = useBreakpointValue({ 
    xl: 'normal', 
    md: 'mobile' 
  });
  
  if (variant) {
    return (
      <Flex p={4} alignItems="center" >
        <Box mr="20px">
          <WrapItem>
            <Avatar size='lg' src={post?.image?.url} />{' '}
          </WrapItem>
        </Box>
        <Box>
          <Text
            fontWeight='bold'
            textTransform='uppercase'
            fontSize='sm'
            letterSpacing='wide'
            color='white'
            pb='0px'
          >
            {post?.title}
          </Text>
        </Box>
      </Flex>     
    )
  }

  return (
    <Flex p={4} alignItems="center">
      <Box mr="20px">
        <WrapItem>
          <Avatar size='lg' src={post?.image?.url} />{' '}
        </WrapItem>
      </Box>
      <Box>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='lg'
          letterSpacing='wide'
          color='white'
          pb='0px'
        >
          {post?.title}
        </Text>
      </Box>
    </Flex>     
  )
}