import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { SliderUnit, TabsWrapper, TabUnit } from './style';
import { TabProps } from './type';

export const Tab = ({
  variant = 'lined',
  defaultIndex = 0,
  size = 'md',
  fixed,
  list = [],
  onChange
}: TabProps) => {
  const [tabIndex, setTabIndex] = useState<number>(defaultIndex);
  const wrapperRef = useRef<HTMLUListElement>();
  const sliderRef = useRef<HTMLLIElement>();

  const setSliderCoordinate = (width: number = 0, left: number = 0) => {
    sliderRef.current.style.width = `${width}px`;
    sliderRef.current.style.transform = `translateX(${left}px)`;
  };

  const resizeTabSlider = (index: number) => {
    const activeElement = wrapperRef.current.querySelectorAll('li')[index];

    setSliderCoordinate(activeElement?.offsetWidth, activeElement?.offsetLeft);
  };

  const handleTab = (index: number, e: MouseEvent<HTMLLIElement>) => {
    if (tabIndex === index) return;

    const target = e.target as HTMLLIElement;

    setSliderCoordinate(target.offsetWidth, target.offsetLeft);
    setTabIndex(index);
    onChange?.(list[index]);
  };

  const handleTabOnMount = () => {
    if (!wrapperRef.current || !sliderRef.current) return;
    resizeTabSlider(defaultIndex);
    onChange?.(list[tabIndex]);
  };

  useEffect(() => {
    resizeTabSlider(tabIndex);
  }, [variant, size, fixed]);

  useEffect(() => {
    handleTabOnMount();
  }, [defaultIndex]);

  return (
    <TabsWrapper ref={wrapperRef} variant={variant}>
      {list.map((item, index) => {
        return (
          <TabUnit
            key={index}
            variant={variant}
            size={size}
            active={tabIndex === index}
            fixed={fixed}
            onClick={(e) => handleTab(index, e)}
          >
            {item}
          </TabUnit>
        );
      })}
      <SliderUnit ref={sliderRef} variant={variant} size={size} />
    </TabsWrapper>
  );
};
