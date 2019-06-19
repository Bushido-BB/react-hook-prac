import React from 'react'

const ExportDB=(hook)=>{
    return (
        <div>
            <button onClick={()=>{exporttodb(hook)}}>
                Export To DB
            </button>
        </div>
    )
}

const exporttodb=hook=>{
    var response = []
    hook.state.items.map((v)=>{
        response.push(
                {
                    id:v.id,
                    name:v.name,
                    url:v.url
                }
            )
        return null
    })
    fetch('http://localhost:3001/posts',{
        method : 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({items:response}),
    })
    .then(data=>data.json())
    .then(data=>console.log(data))
    .catch(err=>{
        console.log("ERROR OCCURED: DB BROKEN ",err)
    })
}

export default ExportDB

/*
{
    "posts": [
      {
        "items": [
          {
            "id": 8514,
            "name": "rails",
            "url": "https://api.github.com/repos/rails/rails"
          },
          ...
        ]
      }
    ]
}
*/