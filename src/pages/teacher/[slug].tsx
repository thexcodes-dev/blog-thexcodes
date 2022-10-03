import { Box, Flex, HStack, useBreakpointValue, VStack } from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../../components/About";
import MediumArticle from "../../components/MediumArticle";
import { GetTeacherBySlugDocument, Teacher as TeacherModel, Post as PostModel } from "../../graphql/generated";
import { client } from "../../service/apollo";

interface TeacherProps {
  slug: string, 
  teacher: TeacherModel;
  posts: Array<PostModel>[];
  numberOfArticles: number;
}

export default function Teacher({ slug, teacher, numberOfArticles, posts }: TeacherProps){

  const leftList = [];
  const rightList = [];

  for (let i in posts){
    if(Number(i) % 2 === 0) {
      leftList.push(posts[i])
    }
    else{
      rightList.push(posts[i])
    }
  }

  const variant = useBreakpointValue({ 
    xl: 'normal', 
    md: 'mobile' 
  });

  return (
    <Flex
      maxWidth={1344}
      mx="auto" 
      w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      flexDir="column"
      alignItems="center"
    >
      <Header title={slug}/>

      <Flex bgColor="white" w="100%" minHeight="600px" p="2rem">

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
          {
            variant ? 
            (
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
            ) : (
              <VStack flexWrap="wrap">
                {
                  leftList.map(post => <MediumArticle key={post.slug} post={post} maxWidth="600px"/>)
                }
              </VStack>
            )
          }
          </Box>
          
        </HStack>
        
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