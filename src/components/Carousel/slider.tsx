import { Box, Button, Flex, Progress } from "@chakra-ui/react";
import { useLayoutEffect } from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";

import useBoundingRect from "../../hooks/useBoundingRect";

export default function Slider({
  setTrackIsActive,
  initSliderWidth,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  gap
}) {
  const [ref, { width }] = useBoundingRect(100);

  useLayoutEffect(() => initSliderWidth(Math.round(width)), [
    width,
    initSliderWidth
  ]);

  const handleFocus = () => setTrackIsActive(true);

  const handleDecrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - positions.length) &&
      setActiveItem((prev) => prev - 1);
  };

  const handleIncrementClick = () => {
    setTrackIsActive(true);
    !(activeItem === positions.length - constraint) &&
      setActiveItem((prev) => prev + 1);
  };

  return (
    <>
      <Box
        ref={ref}
        w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
        ml={{ base: 0, md: `-${gap / 2}px` }}
        px={`${gap / 2}px`}
        position="relative"
        overflow="hidden"
        // _before={{
        //   bgGradient: "linear(to-r, base.d400, transparent)",
        //   position: "absolute",
        //   w: `${gap / 2}px`,
        //   content: "''",
        //   zIndex: 1,
        //   h: "100%",
        //   left: 0,
        //   top: 0
        // }}
        // _after={{
        //   bgGradient: "linear(to-l, base.d400, transparent)",
        //   position: "absolute",
        //   w: `${gap / 2}px`,
        //   content: "''",
        //   zIndex: 1,
        //   h: "100%",
        //   right: 0,
        //   top: 0
        // }}
      >
        {children}
      </Box>

      <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto" position="absolute" top="50%" justify="space-between">
        <Button
          onClick={handleDecrementClick}
          onFocus={handleFocus}
          mr={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          minW={0}
        >
          <IoChevronBackCircleOutline size='50px' />
        </Button>

        {/* <Progress
          value={percentage(activeItem, positions.length - constraint)}
          alignSelf="center"
          borderRadius="2px"
          bg="base.d100"
          flex={1}
          h="3px"
          sx={{
            "> div": {
              backgroundColor: "gray.400"
            }
          }}
        /> */}

        <Button
          onClick={handleIncrementClick}
          onFocus={handleFocus}
          ml={`${gap / 3}px`}
          color="gray.200"
          variant="link"
          zIndex={2}
          minW={0}
        >
          <IoChevronForwardCircleOutline size='50px' />
        </Button>
      </Flex>
    </>
  );
};