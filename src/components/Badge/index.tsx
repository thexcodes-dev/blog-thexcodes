import { Badge as ChakraBadge } from "@chakra-ui/react";

interface BadgeProps {
  text: string;
  color?: string | 'blue';
}

export default function Badge({ text, color }: BadgeProps){
  return (
    <ChakraBadge
      position="absolute"
      top="4"
      left="4"
      color={color}
    >
      {text}
    </ChakraBadge>
  )
}