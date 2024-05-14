import './StatusIndicator.css'
import { useState, useEffect, useRef } from 'react'
import { api_urls } from '../../api/api_urls.js'
import status_indicator_img from '../../assets/logo/si-image-1.png'

export default function StatusIndicator () {
    const statusIndicatorRef = useRef(null);
    const [statusIndicator, setStatusIndicator] = useState([]);

    useEffect(() => {
        const fetchStatusIndicator = async () => {
            const responseStatusIndicator = await fetch(api_urls.statusIndicatorApi);
            const statusIndicatorData = await responseStatusIndicator.json();
            console.log(`status indicator : ${statusIndicatorData}`);
            setStatusIndicator(statusIndicatorData.data)
        }

        fetchStatusIndicator();
        
    }, [])

    useEffect(() => {
        const scrollContainer = statusIndicatorRef.current

        const scrollData = () => {
            if (scrollContainer) {
                const scrollInterval = setInterval(() => {
                    scrollContainer.scrollLeft += 1;
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                        clearInterval(scrollInterval)
                        setTimeout(() => {
                            scrollContainer.scrollLeft = 0;
                            scrollData();
                        }, 2000)
                    }
                }, 50)
            }
        };

        const scrollTimer = setTimeout(() => {
            scrollData();
        },2000);

        return () => clearTimeout(scrollTimer);
    }, []);

    return (
        <>
            <div className='status-ind-font'>Status Indicator</div>
            <div className='status-indicator-section' ref={statusIndicatorRef}>
            {
                statusIndicator.map((status, index) => (
                    <div className='status-indicator-box' key={index}> 
                        <div><span> { status.statusName } </span></div>
                        <div><img src={status_indicator_img} alt="status-indicator" /></div>
                        <div><span> { status.message } </span></div>
                    </div>
                ))
            }
            </div>
        </>
    )
}