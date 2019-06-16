import React from 'react'

const fetchDB=(hook)=>{
    return (
        <div>
            <button onClick={()=>{fetchfromdb(hook)}}>
                Fetch Database
            </button>
        </div>
    )
}

const fetchfromdb=(hook)=>{
    fetch('http://localhost:3001/posts')
    .then(data=>data.json())
    .then(data=>hook.updator({items:data[0].items}))
    .catch(err=>{
        console.log("ERROR OCCURED: DB BROKEN ",err)
    })
}

export default fetchDB

/*
 items=[
    0:{
        id,
        name,
        url
    },
    1:{

    },
    ...
 ]
*/