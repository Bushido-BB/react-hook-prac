import React from 'react'

const fetchData=(hook)=>{
    return (
        <div>
            <button onClick={()=>{fetchfromdb(hook)}}>
                Fetch Repos from Github
            </button>
        </div>
    )
}

const fetchfromdb=(hook)=>{
    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
    .then(data=>data.json())
    .then(data=>hook.updator({items:data.items}))
    .catch(err=>{
        console.log("ERROR OCCURED: DB BROKEN ",err)
    })
}

export default fetchData