import { Badge as ChakraBadge } from "@chakra-ui/react";

interface BadgeProps {
  text: string;
  color?: string | '#ffffff';
  bgColor?: string | '#026e00'
}

export default function Badge({ text, color, bgColor }: BadgeProps){

  return (
    <ChakraBadge
      position="absolute"
      top="4"
      left="4"
      color={color}
      bg={bgColor}
    >
      {text}
    </ChakraBadge>
  )
}