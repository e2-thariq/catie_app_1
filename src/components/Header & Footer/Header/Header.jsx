import './Header.css'
import ss_logo from '../../../assets/logo/Status-Solutions-S-Logo.png'

export default function Header () {
    return (
            <div className='header-content'>
                <div className='weather-details'>
                    weather
                </div>

                <div className='main-title'>
                    <div className='ss-logo'>
                        <img src={ss_logo} alt='status solution logo' />
                    </div>
                    
                    <div className='ss-title'>
                        <span> Status solution </span>
                    </div>               
                </div>

                <div className='time-info'>
                    10:00AM
                </div>
                
            </div>
    )
}