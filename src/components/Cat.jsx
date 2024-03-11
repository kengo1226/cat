import React, { useState, useEffect } from 'react'

function Cat() {

    const [data, setData] = useState("");

    useEffect(() => {
        catFetch();
    }, [])

    const catFetch = () => {
            let url = `https://api.thecatapi.com/v1/images/search`;
            fetch(url)
                .then(res => res.json())
                .then((json) => setData(json))
                .catch(() => alert("error")); 
    }
    console.log(data);

    const handleClick = (e) => {
        e.preventDefault();
        catFetch();
    }

    return (
        <div>
            {/* {data === "" ? "" : <div>{data[0].id}</div>} */}
            {data === "" ? "" : <img src={data[0].url} alt="" />}
            <button onClick={handleClick} className='btn'>ランダムで猫を表示する🐱</button>
        </div>
    )
}

export default Cat