import React, { useState, useEffect } from 'react';
import Avatar from './Avatar';
import './Carousel.css';

export class Slide {
  constructor(name, title, linkedInProfileUrl, relationship, avatarImg, text) {
    this.name = name;
    this.title = title;
    this.linkedInProfileUrl = linkedInProfileUrl;
    this.relationship = relationship;
    this.avatarImg = avatarImg;
    this.text = text;
  }
}

export function CarouselComponent  (props)  {
  const slides = props.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length > 0) {
      setCurrentIndex(0); // Reset currentIndex when slides change
    }
  }, [slides]);

  function nextSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  function prevSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  if (!slides || slides.length === 0) {
    return <div className="carousel">No slides to display</div>;
  }
  return (
      <div className="carousel">
            <div>
                  <Avatar id={currentIndex} 
                    src={slides[currentIndex].avatarImg} 
                    size="100px"
                    link={slides[currentIndex].linkedInProfileUrl}
                    header1={slides[currentIndex].name}
                    header2={slides[currentIndex].title}
                    header3={slides[currentIndex].relationship}
                    />
                    <p>{slides[currentIndex].text}</p>
                </div>
            <div>
                <div className="arrow left" title='Previous' onClick={prevSlide}>&#10094;&#10094;&#10094;</div>
                <div className="arrow right" title='Next' onClick={nextSlide}>&#10095;&#10095;&#10095;</div>
            </div>
      </div>
  );
};

