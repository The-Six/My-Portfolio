import { SliderData } from "./data.js";
import "./slider.css";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Modal from "../Modal/modal.js";

function Slider() {
  console.log(SliderData);
  const length = SliderData.length;
  const [prev, setPrev] = useState(length - 1);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [hovering, setHovering] = useState(false);
  const [itemOn, setItemOn] = useState({});
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

  const Test = () => {
    console.log(itemOn);
    if (hovering) {
      return <Modal item={itemOn} setHovering={setHovering} />;
    }
  };

  function handleMouseOver(item) {
    console.log(item);
    setHovering(true);
    setItemOn(item);
  }

  // function handleMouseOut() {
  //   console.log("here2");
  //   setHovering(false);
  // }

  return (
    <section className="sliderContainer">
      <Test />
      <section className="Slider">
        <div className="sliderInbetween">
          <IoIosArrowBack
            className="arrow"
            onClick={prevSlide}
          ></IoIosArrowBack>
        </div>
        <div className="SliderContent">
        <a
              href={SliderData[prev].link}
              target="_blank"
              rel="noopener noreferrer"
              className="CenterAnchor"
            >
          <img
            className="LeftSlide pulse"
            src={SliderData[prev].image}
            alt="previous slide"
            onMouseOver={() => handleMouseOver(SliderData[prev])}
            // onMouseOut={handleMouseOut}
          />
          </a>
          <div className="sliderInbetweenInner"></div>
          <div
            className="CenterContainer"
            onMouseOver={() => handleMouseOver(SliderData[current])}
            // onMouseOut={handleMouseOut}
            // onMouseLeave={handleMouseOut}
          >
            <a
              href={SliderData[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="CenterAnchor"
            >
              <img
                className="CenterImage pulse"
                src={SliderData[current].image}
                alt="current slide"
              ></img>
            </a>
          </div>
          <div className="sliderInbetweenInner"></div>
          <a
              href={SliderData[next].link}
              target="_blank"
              rel="noopener noreferrer"
              className="CenterAnchor"
            >
          <img
            className="RightSlide pulse"
            src={SliderData[next].image}
            alt="next slide"
            onMouseOver={() => handleMouseOver(SliderData[next])}
            // onMouseOut={handleMouseOut}
          />
          </a>
        </div>
        <div className="sliderInbetween">
          <IoIosArrowForward
            className="arrow"
            onClick={nextSlide}
          ></IoIosArrowForward>
        </div>
      </section>
      <p className="CenterSlideTxt">{SliderData[current].title}</p>
    </section>
  );
}

export default Slider;
