import React from 'react';
import { Carousel, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const slides = [
    {
        key: 1,
        title: 'FOOD',
        description: 'Discover our delicious and diverse food collection, crafted to satisfy your cravings and delight your taste buds!',
        imageUrl: 'https://wallpaperswide.com/download/good_food-wallpaper-1920x1200.jpg',
        
    },
    {
        key: 2,
        title: 'Desserts',
        description: 'Indulge in our heavenly desserts, where every bite is a sweet escape to pure bliss!',
        imageUrl: 'https://s1.1zoom.me/b5050/458/Coffee_Little_cakes_Dessert_Tiramisu_Cocoa_solids_591438_1920x1200.jpg',
    },
    {
        key: 3,
        title: 'Beverages',
        description: 'Savor the perfect blend of flavors with our refreshing beverages and delight!',
        imageUrl: 'https://images8.alphacoders.com/398/398103.jpg',
    },
];

const HeroSection = () => {
    const onChange = (currentSlide) => {
        console.log('Current slide:', currentSlide);
    };

    return (
        <Carousel afterChange={onChange} autoplay>
            {slides.map((slide) => (
                <div key={slide.key} className="carousel-slide">
                    <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <Title level={1} className="carousel-title">{slide.title}</Title>
                        <Paragraph className="carousel-description">{slide.description}</Paragraph>

                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HeroSection;
