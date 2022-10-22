import { Avatar, Box, Flex, WrapItem, Text, useBreakpointValue, Link as ChakraLink  } from "@chakra-ui/react";
import Link from "next/link";
import { Post } from "../../graphql/generated";

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
            <Link href={`../${post?.slug}`} passHref={true}>
              <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                <Avatar size='lg' src={post?.imageUrl} />
              </ChakraLink> 
            </Link>
          </WrapItem>
        </Box>
        <Box>
          <Link href={`../${post?.slug}`} passHref={true}>
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
              <Text
                fontWeight='bold'
                textTransform='uppercase'
                fontSize='sm'
                letterSpacing='wide'
                color='white'
                pb='0px'
                _hover={{ color: 'green.300', textDecoration: 'none'}}
              >
                {post?.title}
              </Text>
            </ChakraLink> 
          </Link>
        </Box>
      </Flex>     
    )
  }

  return (
    <Flex p={4} alignItems="center">
      <Box mr="20px">
        <WrapItem>
          <Link href={`../${post?.slug}`} passHref={true}>
            <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
              <Avatar size='lg' src={post?.imageUrl} />
            </ChakraLink> 
          </Link>
        </WrapItem>
      </Box>
      <Box>
        <Link href={`../${post?.slug}`} passHref={true}>
          <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
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
          </ChakraLink> 
        </Link>
      </Box>          
    </Flex>     
  )
}