import { Box, Text } from "@chakra-ui/react";

interface TextDescriptionProps {
  timeRead: number;
  title: string;
  description: string;
  isMiniHighlight?: boolean | false;
}

export default function TextDescription({ timeRead, title, description, isMiniHighlight }: TextDescriptionProps){
  description = description.length > 150 ? `${description.substring(0, 150)} ...` : description;

  return (
    <Box 
      p="10px"
      w="100%"
      position="absolute"
      bottom="0"
      _hover={{
        color: 'green.300', 
        transition: "filter 0.5s"
      }}
      bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
    >
      {
        isMiniHighlight ? (
          <>
            <Text fontSize='sm' pb="0px">{timeRead} min read</Text>
            <Text fontSize='sm' fontWeight='bold' textTransform="uppercase" color="white" pb="0px">{title}</Text>
          </>
        ) : (
          <>
            <Text>{timeRead} min read</Text>
            <Text fontSize={['sm', 'md', 'lg', 'xl', '3xl']} fontWeight='bold' textTransform="uppercase" color="white" pb="0px">{title}</Text>
            <Text fontSize={['sm', 'md']} color="white" pb="0px">{description}</Text>
          </>
        )
      }
  </Box>
  )
}