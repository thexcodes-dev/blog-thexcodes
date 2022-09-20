import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  ReactNode
} from "react";

import {
  useMediaQuery,
  useTheme,
  Box,
} from "@chakra-ui/react";

import Slider from "./slider";
import Track from "./track";
import Item from "./item";

interface CarouselProps {
  gap: number;
  children: ReactNode;
}


export default function Carousel({ gap, children }: CarouselProps) {
  const [trackIsActive, setTrackIsActive] = useState(false);
  const [multiplier, setMultiplier] = useState(0.35);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [constraint, setConstraint] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const initSliderWidth = useCallback((width) => setSliderWidth(width), []);

  console.log(itemWidth)

  const positions = useMemo(
    () => React.Children.map(children, (child, index) => -Math.abs((itemWidth + gap) * index)),
    [children, itemWidth, gap]
  );

  const { breakpoints } = useTheme();

  const [isBetweenBaseAndMd] = useMediaQuery(
    `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.md})`
  );

  const [isBetweenMdAndXl] = useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xl})`
  );

  const [isGreaterThanXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

  useEffect(() => {
    if (isBetweenBaseAndMd) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
    if (isBetweenMdAndXl) {
      setItemWidth(sliderWidth / 2 - gap);
      setMultiplier(0.5);
      setConstraint(2);
    }
    if (isGreaterThanXL) {
      setItemWidth(sliderWidth - gap);
      setMultiplier(0.65);
      setConstraint(1);
    }
  }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);

  console.log(isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL)

  const sliderProps = {
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap
  };

  const trackProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    sliderWidth,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    gap
  };

  const itemProps = {
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    gap
  };

  return (
    <Box>
      <Slider {...sliderProps}>
        <Track {...trackProps}>
            {React.Children.map(children, (child, index) => (
                <Item {...itemProps} index={index} key={index}>
                  {child}
                </Item>
              ))
            }
            <Box as="span" bg="rgba(10,0,0,0.5);" position="absolute" h="100%" w="100%" zIndex="1" />
        </Track>
      </Slider>
    </Box>
  )
}