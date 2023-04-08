import "./Carousel.css";
import { useState } from "react";
import { useEffect } from "react";

const Carousel = (props) => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        )}
        {currentIndex < length - 1 && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
