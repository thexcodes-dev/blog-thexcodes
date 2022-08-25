import { Box, Image } from "@chakra-ui/react";

interface MainImageProps {
  url: string;
  isMiniHighlight?: boolean | false;
}

export default function MainImage({ url, isMiniHighlight }: MainImageProps){

  if (isMiniHighlight){
    return (
      <Box 
        transition= "transform .5s ease"
        _hover={{
          transform: "scale(1.5)",
        }}
      >
        <Image 
          width="100%" 
          height="100%" 
          object-fit= "contain"
          src={url}
          alt=""
        />
      </Box>
    )
  }

  return (
    <Box 
      w={{ base: '1024px', '2xl': '1200px', xl: '1024px', md: '768px', sm: '480px'}}
      max-height="650px"
      transition= "transform .5s ease"
      _hover={{
        transform: "scale(1.5)",
      }}
    >
      <Image 
        width="100%" 
        height="100%" 
        object-fit= "contain"
        src={url}
        alt=""
      />
    </Box>
  )
}