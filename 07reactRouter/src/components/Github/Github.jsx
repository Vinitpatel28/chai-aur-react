
import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/Vinitpatel28')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github follwers:{data.followers}
    <img src="{data.avatar_url" alt="Git picture" width={300}/>
    
    </div>
  )
}

export default Github