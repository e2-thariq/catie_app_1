import './CarouselSlide.css'
import { useState, useEffect } from 'react'
import { api_urls } from '../../api/api_urls'
import { Carousel } from 'react-responsive-carousel';

export default function CarouselSlide () {
    const [carouselImage, setCarouselImage] = useState([]);
    const host = 'https://e2testing.mycatie.com/';

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                const responseCarousel = await fetch(api_urls.carouselImageApi)
                const carouselData = await responseCarousel.json();
                // console.log(carouselData)
                setCarouselImage(carouselData.data)
    
            } catch (error) {
                console.error('Error fetching carousel images data', error)
            }
        }
        fetchCarousel();

    }, [])

    return (
        <>
            <div className='carousel-slide-section'>    
                        {
                            carouselImage.length !== 0 && 
                            <Carousel            
                                autoPlay
                                axis='horizontal'
                                infiniteLoop
                                interval={3000}
                                transitionTime={0.7 * 1000}
                                showThumbs={false} //bottom preview
                                showIndicators={false} //three dots
                                showStatus={false} //slide numbers
                                stopOnHover={false}
                                showArrows={false} 
                            >
                                {carouselImage.map(image => (
                                
                                    <img 
                                        key={image.slideId} 
                                        src={`${host}${image.scheduleImagePath}`} 
                                        alt={`carousel ${image.slideId}`}
                                    />

                                ))}

                            </Carousel>
                        }
            </div>
        </>
    )
}