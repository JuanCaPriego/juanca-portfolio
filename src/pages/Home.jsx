import React from "react";
import './Home.css';
import teyotl from '../assets/images/Teyotl 2.jpg';
import { useState, useEffect } from "react";
import Trajectory from "../Components/Trajectory";

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);


const captions = {
    "Teyotl 2": { title: "Nevado de Teyotl", desc: "Summit push, 2023" },
    // add more entries as you add more images
};

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 10000); // Change image every 3 seconds

  return () => clearInterval(timer); // Cleanup on unmount
}, [images.length]);

const current = images[currentIndex];
   const caption = captions[current.name] || { title: current.name, desc: "" };

    return(
        
        <div className="container">
            <section className="Aboutme">
                <div className="roulette">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="roulette-img"/>
                    <div className="info">
                         <p className="info-title">{caption.title}</p>
                        {caption.desc && <p className="info-desc">{caption.desc}</p>}
                    </div>
                </div>
                <div className="desc">
                    <div>
                        <h1>Hi! I'm Juan Priego</h1>
                        <img src="" alt="" />
                    </div>
                    <div>   
                        <p>I'm a Biomedical Engineer with a specialization in data and applied AI. I build at the intersection of hardware and software — from mechatronics prototypes to data pipelines and analysis tools that turn challanges into projects and data into insights. Outside of work, you'll find me on a rock face or high on a mountain; alpinism and climbing are as much a part of how I think as any project I build. I'm currently getting into cross-country running, always looking for the next long line to follow.</p>
                    </div>
                </div>
            </section>
            <section className="trayectory">
                <Trajectory></Trajectory>
            </section>
        </div>
    )
};

export default Home;