import './LoginPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
    
export default function LoginPage1 () {
    const [userId, setUserId] = useState('');
    const [roomNo, setRoomNo] = useState('');

    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        try {
            // post request:
            const loginResponse = await fetch(userId, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ roomNo })
            });

            const loginData = await loginResponse.json();
            // console.log(`message : ${loginData.message}`)

            if (loginData.status === 0 && loginData.message === 'Room Number already in use') {
                navigate('/home/weather');
            } else {
                navigate('/')
            }

        } catch (error) {
            console.error('Error', error) 
            // console.log(error)
        }
    }

    return (
        <>
            <div className='top-free-text'>
                <span> Please enter IP/DNS and Device Number </span> 
            </div>

            <div className='login-page-layout'>

                <div className='main-logo-and-login-form'>
                    
                    <div className='main-logo'>
                    {/* <img src={catie_logo} alt='catie-logo' /> */}
                    </div>

                    <div className='login-form'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type='text' 
                                name='user_id' 
                                value={userId}
                                onChange={(event) => setUserId(event.target.value) } 
                                placeholder='Enter API url for User ID' /
                            >
                            <div className='input-spacing'></div>
                            <input 
                                type='text' 
                                name='room_no' 
                                value={roomNo}
                                onChange={(event) => setRoomNo(event.target.value)} 
                                placeholder='Enter Room No' 
                            />
                            <div className='button-spacing'></div>
                            <button type='submit'>Login</button>
                            <button type='reset'>Cancel</button>
                        </form>
                    </div>

                </div>

                <div className='ss-logo'>
                    {/* <img src={ss_logo} alt='ss-logo' /> */}

                    <div className='catie-version'>
                        <span> <strong> V 24.04.0-0.0.3 </strong> </span>
                    </div>
                </div>

            </div>
        </>

    )
}