import { Box, BoxProps, Text } from "@chakra-ui/react";

interface TextDescriptionProps extends BoxProps {
  timeRead: number;
  title: string;
  description: string;
  isMiniHighlight?: boolean | false;
}

export default function TextDescription({ timeRead, title, description, isMiniHighlight, ...rest }: TextDescriptionProps){
  description = description.length > 150 ? `${description.substring(0, 150)} ...` : description;
  const miniTitle = title.length > 37 ? `${title.substring(0, 37)} ...` : title;

  return (
    <Box 
      position="absolute" 
      w="100%"
      bottom="0"
      p="1rem"
      _hover={{
        color: 'green.300', 
        transition: "filter 0.5s"
      }}
      bgImage="linear-gradient(130deg, #2a2d2cdb 60%, #e7dbe770 90%);"
      {...rest}
    >
      {
        isMiniHighlight ? (
          <>
            <Text fontSize={['xl', 'sm']} fontWeight='bold' textTransform="uppercase" color="white" pb="0px">{miniTitle}</Text>
          </>
        ) : (
          <>
            <Text color='white' pb='0px'>{timeRead} min read</Text>
            <Text fontSize={['2xl', 'sm']} fontWeight='bold' textTransform="uppercase" color="white" pb="0px">{title}</Text>
            <Text fontSize={['2xl', 'sm']} color="white" pb="0px">{description}</Text>
          </>
        )
      }
  </Box>
  )
}