import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
function testapi() {
    const [data, setData] = useState("");

    const getData = async() =>{
        const response = await axios.get("http://localhost:4001/getData");
        setData(response.data);
    }

    useEffect(() =>{
        getData()
    },[]);
  return (<>
    <div>{data}</div>
    
    {/* <div>
      <h1>Hello this is aanand singh testing api</h1>
    </div> */}
    </>
  )
}

export default testapi
