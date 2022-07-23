import React from "react";

function Today(props) {
    const current = new Date();
    const today = current.getDate();
    const thisMonth = current.getMonth() + 1;
    const thisYear = current.getFullYear();
  return (
    <div className="container">
        <h1>Today Birthdays</h1>
        <div className="container-todayList">
        
      {props.new.map((item) => {
            const date = item.birth;
            const day = parseInt(date.split("-")[2]);
            const month = parseInt(date.split("-")[1]);
            const year = parseInt(date.split("-")[0]);
            const age = thisYear - year
        if (today === day && month === thisMonth) {
          return (
            <div className="todayList-persons" key={Math.floor(Math.random() * (100000 + 1))}>
            <h1>{item.name} {item.lastName}</h1>
            <p>{age} years old</p>
            </div>

          )
        }
      })}
      </div>
    </div>
  );
}

export default Today;
