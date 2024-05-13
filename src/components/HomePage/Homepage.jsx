import './HomePage.css'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import Header from '../Header & Footer/Header/Header'
import Footer from '../Header & Footer/Footer/Footer'
import Activities from '../Activities & Weather/Activities/Activities'
import StatusIndicator from '../StatusIndicator/StatusIndicator'

export default function HomePage () {
    return (
    <>
        <div className='main-page'>
            <Header />
            <div className='carousel-activities-and-status-indicator'>

                <div className='carousel-slide'> 
                    <CarouselSlide /> 
                </div>

                <div className='activities-and-status-indicator'>
                    <Activities />
                    <StatusIndicator />
                </div>

            </div>
            <Footer />
        </div>
    </>

  )
}