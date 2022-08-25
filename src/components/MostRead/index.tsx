import { Avatar, Box, Flex, WrapItem, Text } from "@chakra-ui/react";

interface Post {
  title: string, 
  slug: string, 
  image?: { url: string } | null 
}

interface MostReadProps {
  post: Post;
}

export default function MostRead({ post }: MostReadProps){
  return (
    <Flex p={4} display={{ md: 'flex' }} align="center" >
      <Box flexShrink={0}>
        <WrapItem>
          <Avatar size='xl' name='Segun Adebayo' src={post.image.url} />{' '}
        </WrapItem>
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='sm'
          letterSpacing='wide'
        >
          {post.title}
        </Text>
      </Box>
    </Flex>     
  )
}