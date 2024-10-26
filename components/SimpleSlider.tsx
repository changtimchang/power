import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container relative">
            <Slider {...settings}>
                <div className="relative">
                    <img src="/assets/img/mainVisual.jpg" className="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center leading-8">
                            <div className="text-3xl text-white">triniti dib PROVIDES</div>
                            <div className="text-3xl text-white">INNOVATIVE SOLUTIONS</div>
                            <div className="text-white mt-8">트리니티디아이비는 혁신적인 솔루션을 제공합니다</div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="/assets/img/mainVisual.jpg" className="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center leading-8">
                            <div className="text-3xl text-white">triniti dib PROVIDES</div>
                            <div className="text-3xl text-white">INNOVATIVE SOLUTIONS</div>
                            <div className="text-white mt-8">트리니티디아이비는 혁신적인 솔루션을 제공합니다</div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlider;
