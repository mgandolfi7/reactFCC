import React from 'react';


export default function Card(props) {
  return (
    <div className="card--container">
      <img src={props.img} className="card--katie"/>
      <div className="card--banner">
        <img src={props.starImg} className="card--star" alt="star icon"/>
        <span className="card--review">{props.review}</span>
        <span className="card--location"> {props.location}</span>
      </div>
      <p>{props.description}</p>
      <p> <strong>{props.rate1}</strong> {props.rate2}</p>
    </div>
  )
};