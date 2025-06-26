import React, { useState, useEffect } from 'react';
import './Slide.scss';
import Slider from 'infinite-react-carousel';

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), ms);
  };
}

const Slide = ({ children }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
    } else if (width >= 640 && width < 1024) {
      setSlidesToShow(2);
    } else if (width >= 1024 && width < 1280) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    updateSlidesToShow(); 

    const debouncedUpdate = debounce(updateSlidesToShow, 150);
    window.addEventListener('resize', debouncedUpdate);

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
    };
  }, []);

  const safeSlidesToShow = slidesToShow > 0 ? slidesToShow : 1;

  return (
    <div className="slide">
      <div className="container">
        <Slider
          slidesToShow={safeSlidesToShow}
          arrowScroll={1}
          arrows
          dots={false}
        >
          {React.Children.count(children) > 0 ? (
            React.Children.map(children, (child) => (
              <div className="slideItem">{child}</div>
            ))
          ) : (
            <div>No items to display</div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
