import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime ] = useState(0);
   
    useEffect(()=>{
        const interValId = setInterval(() => {
            setTime((prevTime)=> prevTime + 1);
        }, 1000);

        return ()=> clearInterval(interValId);
    }, []);
   
  return (
    <div>
        <p>You've been on this page for {time} seconds.</p>
    </div>
  )
}

export default Time