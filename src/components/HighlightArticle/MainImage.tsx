import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

interface MainImageProps {
  url: string;
  alt?: string;
  isMiniHighlight?: boolean | false;
}

export default function MainImage({ url, alt, isMiniHighlight }: MainImageProps){
  const variant = useBreakpointValue({ 
    '2xl': 'bigger', 
    xl: 'notebook', 
    md: 'mobile' 
  });

  if (!isMiniHighlight){
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
          alt={alt}
        />
      </Box>
    )
  }

  return (
    <Box 
      transition= "transform .5s ease"
      _hover={{
        transform: "scale(1.5)",
      }}
    >
      { 
        variant === 'bigger' ? 
          <Image 
            width="100%" 
            height="100%" 
            maxWidth="397px"
            maxHeight="169px"

            object-fit= "contain"
            src={url}
            alt={alt}
          />
        :
          variant === 'notebook' ? 
            <Image 
              width="100%" 
              height="100%" 
              maxWidth="338px"
              maxHeight="169px"

              object-fit= "contain"
              src={url}
              alt={alt}
            />
          :
            <Image 
              width="100%" 
              height="100%" 
              object-fit= "contain"
              src={url}
              alt={alt}
            />
      }
    </Box>
  )
}