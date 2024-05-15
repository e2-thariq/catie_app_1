import './CarouselSlide.css'
import { useState, useEffect } from 'react'
import { api_urls } from '../../api/api_urls'

export default function CarouselSlide () {
    const [carouselImage, setCarouselImage] = useState([]);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const [imageLoadError, setImageLoadError] = useState(false);

    const host = 'https://e2testing.mycatie.com/';

    useEffect(() => {
        const fetchCarousel = async () => {
            try {
                const responseCarousel = await fetch(api_urls.carouselImageApi)
                const carouselData = await responseCarousel.json();

                const filteredImageData = carouselData.data.filter((image) => !image.slideDetails.ingageURL) 
                setCarouselImage(filteredImageData)
                setImageLoadError(false)

            } catch (error) {
                console.error('Error fetching carousel images data', error)
                setImageLoadError(true)
            }
        }
        fetchCarousel();

    }, [])

    useEffect(() => {
        if (carouselImage.length === 0) return;

        const carouselInterval = setInterval(() => {
            setCurrentCarouselIndex((prevIndex) => ((prevIndex + 1) % carouselImage.length))
        }, 3000)

        return () => clearInterval(carouselInterval)
    }, [carouselImage.length])

    return (
        <>
            <div className='carousel-slide-section'>    
                    <div>
                        {!imageLoadError && carouselImage.length > 0 && (
                            <img
                            className='carousel-image'
                            key={carouselImage[currentCarouselIndex].slideId}
                            src={`${host}${carouselImage[currentCarouselIndex].scheduleImagePath}`}
                            alt={`carousel-slide-${currentCarouselIndex}`}
                            />
                        )}
                    </div>
            </div>
        </>
    )
}


// {
//     carouselImage.length !== 0 && 
//     <Carousel            
//         autoPlay
//         axis='horizontal'
//         infiniteLoop
//         interval={3000}
//         transitionTime={0.7 * 1000}
//         showThumbs={false} //bottom preview
//         showIndicators={false} //three dots
//         showStatus={false} //slide numbers
//         stopOnHover={false}
//         showArrows={false} 
//     >
//         {carouselImage.map(image => (
        
//             <img 
//                 className='carousel-image'
//                 key={image.slideId} 
//                 src={`${host}${image.scheduleImagePath}`} 
//                 alt={`carousel ${image.slideId}`}
//             />

//         ))}

//     </Carousel>
// }