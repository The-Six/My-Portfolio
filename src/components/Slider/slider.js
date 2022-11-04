import { SliderData } from "./data.js";
import "./slider.css";
import React, { useState } from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

function Slider() {
  console.log(SliderData);
  const length = SliderData.length;
  const [prev, setPrev] = useState(length - 1);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setNext(next === length - 1 ? 0 : next + 1);
    setPrev(prev === length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setNext(next === 0 ? length - 1 : next - 1);
    setPrev(prev === 0 ? length - 1 : prev - 1);
  };
  if (length <= 1) {
    return null;
  }

  return (
    <section className="sliderContainer">
    <section className="Slider">
      <div className="sliderInbetween">
        <IoIosArrowBack className="arrow" onClick={prevSlide}></IoIosArrowBack>
      </div>
      <div className="SliderContent">
        <img
          className="LeftSlide"
          src={SliderData[prev].image}
          alt="previous slide"
        />
        <div className="sliderInbetweenInner"></div>
        <div className="CenterContainer">
          <a
            href={SliderData[current].link}
            target="_blank"
            rel="noopener noreferrer"
            className="CenterAnchor"
          >
            <img
              className="CenterImage"
              src={SliderData[current].image}
              alt="current slide"
            />
          </a>
        </div>
        <div className="sliderInbetweenInner"></div>
        <img
          className="RightSlide"
          src={SliderData[next].image}
          alt="next slide"
        />
      </div>
      <div className="sliderInbetween">
        <IoIosArrowForward className="arrow" onClick={nextSlide}></IoIosArrowForward>
      </div>
    </section>
       <p className="CenterSlideTxt">{SliderData[current].title}</p> 
       </section>
  );
}

export default Slider;
