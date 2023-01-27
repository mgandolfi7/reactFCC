import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import KatieImg from './images/katie.png'
import Star from './images/star.png'

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        img = {KatieImg}
        starImg = {Star}
        review = "5.0 (6)"
        location = " • USA"
        description = "Life lessons with Katie Zaferes"
        rate1 = "From 136"
        rate2 = "/ person"
      />
    </div>
  )
};