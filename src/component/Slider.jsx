import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import { sliderItems } from "../utils/data";

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
`;

const Title = styled.div``;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 7);
    else setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0);
  };

  return (
    <>
      <Title className="py-2.5 text-lg uppercase">Mini Gallery of you</Title>
      <div className="w-full flex relative overflow-hidden">
        <Arrow
          direction="left"
          onClick={() => handleClick("left")}
          className="w-12 h-12 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-[-50px] bottom-16 m-auto cursor-pointer opacity-50 z-[2] border-2 border-gray-500"
        >
          <ArrowLeftIcon sx={{ fontSize: 50 }} />
        </Arrow>

        <Wrapper slideIndex={slideIndex} className="flex transition duration-[1500ms] ease">
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id} className="w-screen flex flex-col items-center py-8">
              <div className="">
                <img src={item.img} alt={item.name} className="rounded-full h-5/6" />
              </div>
              <div className="mt-[-50px]">
                <h1 className="sm:text-5xl text-4xl">{item.title}</h1>
                <p className="text-lg tracking-[3px]">{item.desc}</p>
              </div>
            </Slide>
          ))}
        </Wrapper>
        <Arrow
          direction="right"
          onClick={() => handleClick("right")}
          className="w-12 h-12 bg-[#fff7f7] rounded-full flex items-center justify-center absolute top-[-50px] bottom-16 m-auto cursor-pointer opacity-50 z-[2] border-2 border-gray-500"
        >
          <ArrowRightIcon sx={{ fontSize: 50 }} />
        </Arrow>
      </div>
    </>
  );
};

export default Slider;
