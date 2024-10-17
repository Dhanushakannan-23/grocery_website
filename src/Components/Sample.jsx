import React, { useEffect, useState } from 'react'

const URL='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=YOUR_API_KEY'

function Sample() {
    const [temp,setTemp] =useState(0)

    useEffect(() =>{
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json =>{
                console.log(json);
                setTemp
            })
        }
        fetchData();
    },[]);
  return (
    <div>India Temp :{temp}</div>
  )
}

export default Sample