
import { Image, useMediaQuery } from "@chakra-ui/react";

export default function Logo () {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  if (!isMobile){
    return <Image w="178px" src="../logo.png" alt="TheXCodes"/>
  }

  return <Image w="120px" src="../logo.png" alt="TheXCodes"/>
}