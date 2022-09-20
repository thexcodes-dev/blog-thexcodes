import { Box, Flex, Image } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";

interface SessionProps {
  slug: string,
}

export default function Session({ slug }: SessionProps){
    return (
      <Flex direction="column" h="100vh" >
        <Header title={slug} selectedMenu={slug}/>
        <Box
          maxWidth={1480} 
          mx="auto" 
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}

        >
          <Box>
            <Carousel gap={32}>
              <Box 
                as="picture"
                w="100%"
                height="100%"
                objectFit="cover"
                objectPosition="center"
              >
                <Image 
                    w="100%"
                    h="120%" 
                    mt="-5%"
                    minHeight="100%"
                    animation="tipiOpa 1s normal forwards"
                    opacity="1"
                    transform="translate3d(0px, 50px, 0px)"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://thexcodes.com/wp-content/uploads/2021/07/capa-react18-1024x436.png"
                    alt=""
                  /> 
              </Box>
                <Image 
                    w="100%"
                    h="120%" 
                    mt="-5%"
                    minHeight="100%"
                    animation="tipiOpa 1s normal forwards"
                    opacity="1"
                    transform="translate3d(0px, 50px, 0px)"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://media.graphassets.com/UlAWf4mRSsGtTEWsQVHn"
                    alt=""
                  /> 

                  <Image 
                    w="100%"
                    h="120%" 
                    mt="-5%"
                    minHeight="100%"
                    animation="tipiOpa 1s normal forwards"
                    opacity="1"
                    transform="translate3d(0px, 50px, 0px)"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://demos.codetipi.com/zeen-tech/wp-content/uploads/sites/11/2018/09/zeen-foto-020-1170x585.jpg"
                    alt=""
                  /> 

                  <Image 
                    w="100%"
                    h="120%" 
                    mt="-5%"
                    minHeight="100%"
                    animation="tipiOpa 1s normal forwards"
                    opacity="1"
                    transform="translate3d(0px, 50px, 0px)"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://demos.codetipi.com/zeen-tech/wp-content/uploads/sites/11/2018/05/zeen-00422-1170x585.jpg.webp"
                    alt=""
                  />
            </Carousel>
          </Box>

        </Box>
      </Flex>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  return {
    props: { 
      slug: slug,
     },
  }
}