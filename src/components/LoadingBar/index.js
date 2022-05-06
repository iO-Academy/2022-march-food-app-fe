import "./LoadingBar.scss"
import {useEffect, useState} from 'react'

const LoadingBar = ({time}) => {
    time = 10
    // const time = parseInt(deliveryTime + prepTime)

    const [totalTime, setTotalTime] = useState({})
    useEffect( () => {
        setTotalTime({animationDuration:   `${time}s`})
    },[])

    return (
        <div className="progress">
            <div className="color" style={totalTime}></div>
        </div>
     )
}

export default LoadingBar