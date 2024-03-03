import React, { useState } from 'react'
import bulbImgOff from '../../Images/light-bulb-off.png'
import bulbImgOn from '../../Images/light-bulb-on.png'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const [isBulbOff, toggleBulbState] = useState(true)

    console.log('location.state :', location.state)
    // const toggleBulb = () => {
    //     toggleBulbState(!isBulbOff)
    // }
    const bulbImgSrc = isBulbOff ? bulbImgOff : bulbImgOn

    return (
        <>
            <img src={bulbImgSrc} width='300'/>
            <button onClick={() => toggleBulbState(!isBulbOff)}>On/Off</button>
        </>
    )
}


export default Home;