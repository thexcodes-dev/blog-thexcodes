import { Badge, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import MainImage from "../HighlightArticle/MainImage";
import TextDescription from "../HighlightArticle/TextDescription";

import { Post } from "../../graphql/generated";

interface SlideProps {
  posts: Post[]
}

export default function Slide({posts}: SlideProps){

  return (
    <Splide>
        {
          posts.map((post, index) => {
            return (
              <SplideSlide key={post.slug}>
                <Box overflow="hidden" maxHeight="600px">
                  <Link href={`../${post?.slug}`}>
                    <ChakraLink _hover={{ color: 'green.300', textDecoration: 'none'}}>
                      <MainImage url={post?.imageUrl} />
                      {
                        post?.sessions !== undefined &&
                        <Badge 
                          text={post?.sessions[0]?.title} 
                          color={post?.sessions[0]?.color}
                          bgColor={post?.sessions[0]?.bgColor}
                        />
                      }
                      <TextDescription 
                        timeRead={1} 
                        title={post?.title} 
                        description={post?.description} 
                        pb="2rem"
                      />
                    </ChakraLink>
                  </Link>
                </Box>
              </SplideSlide>
            )
          })
        }
    </Splide>

  )
}