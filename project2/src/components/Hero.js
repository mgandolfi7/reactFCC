import React from 'react';
import pictureGroup from '../images/picture-group.png'

export default function Hero() {
  return (
    <div>
      <img src={pictureGroup} className="hero--pictures" alt="hero pictures"/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>   
  )
};