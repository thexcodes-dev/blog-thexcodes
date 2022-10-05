import { GetServerSideProps } from "next";
import { Flex, Image, Text, Box, VStack, Button, WrapItem, Wrap, CircularProgress } from "@chakra-ui/react";
import { 
  FacebookShareButton, 
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon, 
} from "react-share";


import { client } from "../service/apollo";
import { GetPostDocument, Post, useGetPostsBySessionQuery } from "../graphql/generated";
import BoxArticles from "../components/BoxArticles";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface ArticleProps {
  article: Post,
}

export default function Article({ article }: ArticleProps){
  const sessionTitle = article?.sessions[0].title
  const sessionSlug = article?.sessions[0].slug
  
  const { data, loading} = useGetPostsBySessionQuery({
    variables: { 
      slug: article?.sessions.map(session => session.slug),
      first: 5,
      skip: 0
    }
  })  
  const currentLocation = `https://www.thexcodes.com/${article?.slug}`;
  const pageTitle = `${article?.title} - The Xcodes`;

  return (
    <Flex mx="auto" flexDir="column">
      <Header slug={article?.title} selectedMenu={sessionSlug}>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <link rel="canonical" href={currentLocation} />
        <meta name="description" content={article?.description} />
	      <meta property="og:locale" content="pt_BR" />
	      <meta property="og:type" content="article" />
	      <meta property="og:title" content={pageTitle} />
	      <meta property="og:description" content={article?.description} />
	      <meta property="og:url" content={currentLocation} />
	      <meta property="og:site_name" content="The Xcodes" />
	      <meta property="article:published_time" content="2022-08-10T23:46:40+00:00" />
	      <meta property="article:modified_time" content="2022-08-15T00:08:37+00:00" />
	      <meta property="og:image" content={article?.image.url} />
	      <meta property="og:image:width" content={article?.image.width?.toString()} />
	      <meta property="og:image:height" content={article?.image.height?.toString()} />
	      <meta name="twitter:card" content="summary_large_image" />
	      <meta name="twitter:label1" content="Written by" />
	      <meta name="twitter:data1" content="Leandro Oliveira" />
	      <meta name="twitter:label2" content="Est. reading time" />
	      <meta name="twitter:data2" content="3 minutos" />
      </Header>
      
      <Box position="relative">
        <Box
          h="66vh"
          maxHeight="66vh"
          w="100%"
          overflow="hidden"
          position="relative"
          display="flex"
        >
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
              src={article?.image.url}
              alt=""
            />  
          </Box>
          <Box as="span" bg="rgba(10,0,0,0.5);" position="absolute" h="100%" w="100%" zIndex="1" />
        </Box>

        <Box position="absolute"
          maxWidth="900px"
          left="50%" 
          top="50%" 
          textAlign="center" 
          transform="translate(-50%, -50%)"
          transition=".5s ease-out"
          zIndex="2"
        >
          <Text color="#ffffff" >{sessionTitle}</Text>
          <Text 
              fontSize={['sm', 'md', 'lg', 'xl', '3xl']}
              pt="10px"
              fontWeight='bold' 
              color="#ffffff" 
              textTransform="uppercase"
              transitionDelay=".5s"
              transition=".5s ease-out"
            >
                {article?.title}</Text>
        </Box>
      </Box>

        <Box 
          maxWidth={1344} 
          mx="auto" 
          w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
          bg="#ffffff"
        >
          <Box pt="1rem" pb="2rem" mx="5rem">
            <VStack >
              <Wrap spacing={4}>
                <WrapItem>
                  <FacebookShareButton url={currentLocation} title={article.title}>
                   <FacebookIcon size={32} />
                  </FacebookShareButton>
                </WrapItem>
                <WrapItem>
                  <TwitterShareButton url={currentLocation} title={article.title}>
                   <TwitterIcon size={32} />
                  </TwitterShareButton>
                </WrapItem>
                <WrapItem>
                  <LinkedinShareButton url={currentLocation} title={article.title}>
                   <LinkedinIcon size={32} />
                  </LinkedinShareButton>
                </WrapItem>

              </Wrap>

            </VStack>
          </Box>
          <Box  color="gray.500" mx="2rem">
            <Box fontSize="md" textAlign="justify" dangerouslySetInnerHTML={{ __html: article?.text.html }} />
          </Box>
        
          <Box>
            <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' color="gray.500" mx="1rem">Explore mais</Text>
            {
              loading ? 
                <CircularProgress value={30} size='120px' /> 
              :
                <BoxArticles posts={data.posts as Array<Post>} postsMostRead={data.mostRead as Array<Post>} isArticlePage={true} currentSession={sessionSlug} /> 
            }
          </Box>
        </Box>
      <Footer />
    </Flex>
  )
}

type GetPost = {
  data: {
    post: Post
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params;

  const getPost: GetPost = await client.query({
    query: GetPostDocument,
    variables: {
      slug
    }
  });

  return {
    props: { 
      article: getPost.data.post,
     },
  }
}