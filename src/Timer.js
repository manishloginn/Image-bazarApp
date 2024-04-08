import { useEffect, useState } from "react";

const Timer = () => {
     const [time, settime] = useState(0)
     const [timerid, settimerid] = useState(null)

     const stopTimer = () => {
        clearInterval(timerid)
     }
    
     useEffect(() =>{
       let id = setInterval(() => {
            settime(prev => prev + 1)
        }, 1000);

            settimerid(id)

            return () => clearInterval(id)
     }, [])

    return (
        <>
        <h1>Timer App {time}</h1>
        <button onClick={stopTimer} >Stop Timer</button>
        </>
    )
}


export default Timer;