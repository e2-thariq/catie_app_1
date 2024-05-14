import './Footer.css'
import user_logo from '../../../assets/logo/user-logo-1.png'

export default function Footer () {
    return (
            <div className='footer-content'>
                
                <div className='free-text'>
                    This is a text area and sizing for scrolling ticker with customizable messages of your choice
                </div>

                <div className='user-logo'>
                    <img src={user_logo} alt='user-logo' />
                </div>
                
            </div>
    )
}