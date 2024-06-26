import React, { useState, useEffect } from 'react';
import Avatar from './component/Avatar';
import './Carousel.css';

export class Slide {
  constructor(name, title, company, link, date, relationship, imgSrc, text) {
    this.name = name;
    this.title = title;
    this.company = company;
    this.link = link;
    this.date = date;
    this.relationship = relationship;
    this.imgSrc = imgSrc;
    this.text = text;
  }
}

export function CarouselComponent  (props)  {
  const slides = props.slides;
  const title = props.title;
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState(slides[currentIndex].name);

  useEffect(() => {
    setName(slides[currentIndex].name);
  }, [currentIndex, slides]);

  function nextSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  function prevSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };



  return (
    <div id="recommendations">
      <h2>{title}</h2>
      <div className="carousel">
            <div>
                <div className="w3-col w3-center w3-padding-large">

                  <Avatar id={currentIndex} 
                    src={slides[currentIndex].imgSrc} 
                    size="100px"
                    link={slides[currentIndex].link}
                    header1={name}
                    header2={slides[currentIndex].title + ' @ ' + slides[currentIndex].company}
                    header3={slides[currentIndex].relationship}
                    />
                    <p className="w3-justify">{slides[currentIndex].text}</p>
                </div>
            </div>
            <div>
                <div className="arrow left" title='Previous' onClick={prevSlide}>&#10094;&#10094;&#10094;</div>
                <div className="arrow right" title='Next' onClick={nextSlide}>&#10095;&#10095;&#10095;</div>
            </div>

      </div>
      <hr/>
    </div>
  );
};

