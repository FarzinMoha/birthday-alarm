import React, { useEffect, useState } from "react";

function ListOfFreinds(props) {
    const [arrr,setArr] = useState([])
    useEffect(() =>{
        setArr(props.new)
    })
    
  return (
    <div className="container">
      <h1>Today Birthdays</h1>
      <div className="list-container">{arrr.map((item) =>{
        return (
          <div key={item.name} className="list-freinds">
            <h1>{item.name} {item.lastName}</h1>
            <p>{item.birth}</p>
          </div>
        )
      })}</div>
    </div>
  )
}

export default ListOfFreinds;
