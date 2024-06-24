import React, { useState } from 'react';
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

  function nextSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  function prevSlide () {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };



  return (
    <div id="recommendations" className='w3-content'>
      <h2>{title}</h2>
      <div className="carousel">
            <div className="w3-row">
                <div className="w3-col w3-center w3-padding-large">
                    <img src={slides[currentIndex].imgSrc}  className="w3-circle avatar-image" alt= {'Photo of ' + slides[currentIndex].name}/>
                    <p className="w3-text-dark-grey">
                        <a href={slides[currentIndex].link} target='_blank'><strong>{slides[currentIndex].name}</strong></a><br/>
                        <em>{slides[currentIndex].title} @ {slides[currentIndex].company}</em><br/>
                        {slides[currentIndex].relationship}<br/>
                        {slides[currentIndex].date}<br/>
                    </p>
                    <p className="w3-justify">{slides[currentIndex].text}</p>
                </div>
            </div>
            <div className="w3-row">
                <div className="arrow left" title='Previous' onClick={prevSlide}>&#10094;&#10094;&#10094;</div>
                <div className="arrow right" title='Next' onClick={nextSlide}>&#10095;&#10095;&#10095;</div>
            </div>

      </div>
      <hr/>
    </div>
  );
};

