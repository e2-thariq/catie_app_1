import './Activities.css'
import { api_urls } from '../../../api/api_urls.js'
import { useState, useEffect, useRef } from 'react'

export default function Activities () {
    const activitiesRef = useRef(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try{
                const responseActivities = await fetch(api_urls.activitiesApi);
                const activitiesData = await responseActivities.json();
                console.log(activitiesData)
                setActivities(activitiesData.data)
            } catch (error) {
                console.error('Error fetching Activities data', error)
            }
        }
        fetchActivities();
    }, [])

    useEffect(() => {
        const scrollContainer = activitiesRef.current;

        const scrollData = () => {
            if (scrollContainer) {
                const scrollInterval = setInterval(() => {
                    scrollContainer.scrollTop += 1;
                    if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
                        clearInterval(scrollInterval);
                        setTimeout(() => {
                            scrollContainer.scrollTop = 0;
                            scrollData();
                        }, 2000)
                    }
                }, 50)
            }
        }

        const scrollTimer = setTimeout(() => {
            scrollData();
        }, 3000)

        return () => clearTimeout(scrollTimer);
    }, [])

    return (
        <>
            <div className='activities-font'>Activities</div>
            <div className='activities-section' ref={activitiesRef}>
                {
                    activities.map((activityData) => (
                        <span key={activityData.eventId}>
                            {
                                activityData.eventList.map((item, index) => (
                                    <div className='dividing-section'>
                                        <div className='left-side-content'>
                                            {item.startTime}
                                        </div>

                                        <div className='vertical-line'></div>

                                        <div className='right-side-content'>
                                            <div><span className='activity-head'> {item.eventLocation} </span></div>
                                            <span className='activity-description'> {item.eventDescription} </span>
                                        </div>
                                    </div>
                                ))
                            }

                        </span>
                    ))
                }
            </div>
        </>
    )
}