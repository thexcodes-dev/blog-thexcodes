import { Box, Button, Center, Fade, Flex, HStack, ScaleFade, Spinner, useBreakpointValue, useMediaQuery, VStack } from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import MediumArticle from "../../components/MediumArticle";
import { GetTeacherBySlugDocument, Teacher as TeacherModel, Post as PostModel } from "../../graphql/generated";
import { client } from "../../service/apollo";
import { FormEvent, useEffect, useRef, useState } from "react";

interface TeacherProps {
  slug: string, 
  teacher: TeacherModel;
  posts: Array<PostModel>;
  numberOfArticles: number;
}

export default function Teacher({ slug, teacher, numberOfArticles, posts }: TeacherProps){
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  const [listOfPosts, setListOfPosts] = useState<PostModel[]>(posts);
  const [currentPage, setCurrentPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);

  async function handleLoadMore(event: FormEvent) {
    event.preventDefault();

    setCurrentPage(currentPage+5);
    setIsLoading(true);

    const { data } = await client.query({
      query: GetTeacherBySlugDocument,
      variables: {
        slug: slug,
        first: 5,
        skip: currentPage
      }
    });

    setListOfPosts([...listOfPosts, ...data.posts]);

    setIsLoading(false);
  }


  useEffect(() => {
    setLeftList([]);
    setRightList([]);

    for (let i in listOfPosts){
      if(Number(i) % 2 === 0) {
        setLeftList(prevArray => [...prevArray, listOfPosts[i]]);
      }
      else{
        setRightList(prevArray => [...prevArray, listOfPosts[i]]);
      }
    }
  }, [listOfPosts]);

  const currentLocation = `https://www.thexcodes.com/teacher/${slug}`;
  const pageTitle = `${teacher?.name} · The Xcodes`;

  return (
    <Flex
      mx="auto" 
      w={isMobile ? "100%" : "1024px"}
      flexDir="column"
      alignItems="center"
    >
      <Header slug={slug} pageTitle={pageTitle}>
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <link rel="canonical" href={currentLocation} />
        <meta name="description" content={teacher?.bio} />
	      <meta property="og:locale" content="pt_BR" />
	      <meta property="og:type" content="article" />
	      <meta property="og:title" content={pageTitle} />
	      <meta property="og:description" content={teacher?.bio} />
	      <meta property="og:url" content={currentLocation} />
	      <meta property="og:site_name" content="The Xcodes" />
	      <meta property="article:published_time" content={teacher.createdAt} />
	      <meta property="article:modified_time" content={teacher.updatedAt}/>
	      <meta property="og:image" content={teacher?.avatarUrl} />
	      <meta name="twitter:card" content="summary_large_image" />
	      <meta name="twitter:label1" content="Written by" />
	      <meta name="twitter:data1" content="Leandro Oliveira" />
	      <meta name="twitter:label2" content="Est. reading time" />
	      <meta name="twitter:data2" content="3 minutos" />
      </Header>

      <Flex bgColor="white" w="100%" minHeight="600px" p="2rem">

        {
          isMobile ? 
            <>
              <VStack flexWrap="wrap">
                <Box bg="base.100" width="100%" top="95px">
                  <About 
                    avatarUrl={teacher?.avatarUrl}
                    name={teacher?.name}
                    articles={numberOfArticles}
                    description={teacher?.bio}
                  />
                </Box>
                {
                  listOfPosts.map(post => <MediumArticle key={post.slug} post={post} maxWidth="600px"/>)
                }

                <Center p="1rem">
                    <Button bg='gray.900' color="white" fontSize='xs' borderRadius="50" onClick={handleLoadMore}>
                      BUSCAR MAIS POSTS
                      { isLoading && 
                        <Spinner
                          thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='green.500'
                          size='md'
                          ml="0.5rem"
                        /> }
                      </Button>
                  </Center>
              </VStack>
            </>
          : 
            <HStack width="100%" alignItems="start" position="relative">
              <Box bg="base.100" width="40%" position="sticky" top="95px">
                <About 
                  avatarUrl={teacher?.avatarUrl}
                  name={teacher?.name}
                  articles={numberOfArticles}
                  description={teacher?.bio}
                />
              </Box>
              <Box width="100%" position="relative">
                <HStack alignItems="baseline" >
                  <VStack flexWrap="wrap">
                    {
                      leftList.map(post => <MediumArticle key={post.slug} post={post} maxWidth="400px"/>)
                    }
                  </VStack>
                  <VStack flexWrap="wrap">
                    {
                      rightList.map(post => <MediumArticle key={post.slug} post={post} maxWidth="400px"/>)
                    }
                  </VStack>
                </HStack> 

                  <Center p="1rem">
                    <Button bg='gray.900' color="white" fontSize='xs' borderRadius="50" onClick={handleLoadMore}>
                      BUSCAR MAIS POSTS
                      { isLoading && 
                        <Spinner
                          thickness='4px'
                          speed='0.65s'
                          emptyColor='gray.200'
                          color='green.500'
                          size='md'
                          ml="0.5rem"
                        /> }
                      </Button>
                  </Center>
              </Box>

            </HStack>
        }



        
      </Flex>

      <Footer />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params;

  const { data } = await client.query({
    query: GetTeacherBySlugDocument,
    variables: {
      slug: slug,
      first: 5,
      skip: 0
    }
  });

  const numberOfArticles = data.teachersConnection.edges[0].node.posts.length;

  return {
    props: { 
      slug: slug,
      teacher: data.teacher,
      posts: data.posts,
      numberOfArticles
     },
     //revalidate: 60 * 30, //30 minutes
  }
}