import { Flex, Image, Text, Link as ChakraLink, Box, VStack, Badge, Button, Center, WrapItem, Avatar } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  }
}

export default function Post({ post }: PostProps){
  return (
    <Flex direction="column" h="100vh" >
      <Header title={post.slug} selectedMenu={post.slug}/>

      <Box overflow="hidden" position="relative">
            <Box max-height="550px">
              <Image 
                width="100%" 
                height="100%" 
                transform="translate3d(0px, -500px, 0px)"
                src="https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-1024x577.png"
                alt=""
              />

              {/* <Image
                src="https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-1024x577.png" 
                alt="" 
                loading="lazy" 
                srcset="https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-1024x577.png 1024w, https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-300x169.png 300w, https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-768x433.png 768w, https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1-1536x865.png 1536w, https://thexcodes.com/wp-content/uploads/2021/10/Como-se-1.png 1640w" 
                sizes="(max-width: 1024px) 100vw, 1024px"
              /> */}
              
            </Box>
          </Box>

      <Flex 
        maxWidth={1480} 
        mx="auto" 
        w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      >

        <Box>
          <Text >


          </Text>
        </Box>


      </Flex>
      
      <Footer />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const post = {
      slug: slug,
    };

  //console.log(JSON.stringify(post, null, 2));

  return {
    props: { post },
  }
}