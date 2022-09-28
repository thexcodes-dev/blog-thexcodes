import { Box, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

interface AboutProps {
  avatarUrl: string;
  name: string;
  articles: number;
  description: string;
}

export default function About({ avatarUrl, name, articles, description }: AboutProps){
  return (
    <Box p="1rem" m="1rem">
      <Box>
        <Image src={avatarUrl} alt={name} />
      </Box>
      <Box textAlign="center" mt="1rem">
        <Link href="/teacher/Leandro Oliveira">
          <ChakraLink _hover={{ color: 'green.300' }}>
            <Text fontWeight="bold" fontSize={{ '2xl': 'lg' }}>
              {name}
            </Text>
          </ChakraLink>
        </Link>
      </Box>
      <Box textAlign="center">
        <Text color="gray.400">
          Artigos 
          <Text as="span" ml="0.25rem" color='gray.600'>{articles}</Text>
        </Text>
        <Text>{description}</Text>
      </Box>

    </Box>
  )
}