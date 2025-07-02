//updated


import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/assets/campus1.jpg',
  '/assets/campus2.jpg',
  '/assets/campus3.jpg',
  '/assets/campus4.jpg',
  '/assets/campus5.jpg',
];

const testimonials = [
  {
    name: "Gaurav Saharan",
    year: "2020",
    message: "Grateful for the opportunities and network built through the alumni community.",
  },
  {
    name: "Vineet Jain",
    year: "2023",
    message: "My time at IIT Palakkad shaped my future. Proud to be an alumnus.",
  },
  {
    name: "Sayandip Choudhury",
    year: "2023",
    message: "The IAR Cell helped me stay connected even after graduation!",
  }
];

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto py-10 px-4">

        {/* IAR Cell Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/assets/iar-logo.png"
            alt="IAR Cell Logo"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`Campus ${i + 1}`}
                className="w-full h-[400px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">Alumni Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <p className="italic mb-4">“{t.message}”</p>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">Class of {t.year}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
