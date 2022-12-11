import React from 'react'
import {Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./bitcoin/cuate.png";
import image2 from "./investment-data/amico.png";
import image3 from "./mobile-payments/rafiki.png";


const slides = [
    {
      title: "Get Started",
      subtitle: "Start with your email",
      control: <input type="email" placeholder="Email" />,
      image: image2,
    },
    {
      title: "Your Password",
      subtitle: "lets make things secure",
      control: <input type="password" placeholder="Password" />,
      image: image1,
    },
    {
      title: "lets Go",
      subtitle: "Smash the button below",
      control: <button>Sign up</button>,
      image: image3,
    },
  ];
const Carousel = () => {


  return (
    <div className='card'>
    <div className="main">
    <ReactCarousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      emulateTouch={false}
    >
      {slides.map((slide) => (
        <div key={slide.title}>
          <div className="image-wrapper">
            <img src={slide.image} />
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            {slide.control}
          </div>
        </div>
      ))}
    </ReactCarousel>
  </div>
  </div>
);
      }


export default Carousel