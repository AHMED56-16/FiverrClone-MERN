import React, { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Slide.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slide = ({ children }) => {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, setSliderInstanceRef] = useState(null);

  const [sliderRefInternal] = useKeenSlider(
    {
      loop: false, 
      slides: {
        perView: 4,
        spacing: 0, 
      },
      breakpoints: {
        "(max-width: 639px)": {
          slides: { perView: 1 },
        },
        "(min-width: 640px) and (max-width: 1023px)": {
          slides: { perView: 2 },
        },
        "(min-width: 1024px) and (max-width: 1279px)": {
          slides: { perView: 3 },
        },
      },
      created(instance) {
        setSliderInstanceRef(instance);
      },
    },
    []
  );

  const prev = () => {
    if (sliderInstanceRef) sliderInstanceRef.prev();
  };

  const next = () => {
    if (sliderInstanceRef) sliderInstanceRef.next();
  };

  return (
    <div className="slide">
      <div className="container">
        <div ref={sliderRefInternal} className="keen-slider">
          {React.Children.map(children, (child, index) => (
            <div className="keen-slider__slide slideItem" key={index}>
              {child}
            </div>
          ))}
        </div>

        {/* Custom arrows */}
        <div className="carousel-prev" onClick={prev}>
          <FaChevronLeft />
        </div>
        <div className="carousel-next" onClick={next}>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Slide;
