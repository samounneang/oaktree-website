//import React from 'react';
//import { ArrowRight, Play, Target, Users, Heart, Building, Lightbulb, Rocket } from 'lucide-react';
//import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
//import About from '../components/About';
//import { useEffect, useRef, useState } from "react";
import FullVision from '../components/FullVision';
import ValueSection from '../components/ValueSection';
import WhyUs from '../components/WhyUs';
//import WhatWebuild from '../components/WhatWebuild';
import FullStackSupportSection from '../components/YourFullSupport';
import SeatAtTableSection from '../components/SeatAtTableSection';


const Home = () => {
  //const [activeCard, setActiveCard] = useState(0);
  // const sectionRef = useRef<HTMLElement | null>(null);
  // const contentRef = useRef<HTMLElement | null>(null);

  // const cards = [
  //   {
  //     image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     alt: "Team collaboration and hands-on approach",
  //     title: "We are hands on",
  //     description: "Active involvement in every aspect of your venture's growth and development."
  //   },
  //   {
  //     image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     alt: "Building blocks representing systematic approach",
  //     title: "Robust venture building system",
  //     description: "Proven methodologies and frameworks for sustainable business growth."
  //   },
  //   {
  //     image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     alt: "Network of connections and shared resources",
  //     title: "Shared resources and networks",
  //     description: "Access to our extensive network of partners, mentors, and industry experts."
  //   }
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sectionRef.current || !contentRef.current) return;

  //     const sectionRect = sectionRef.current.getBoundingClientRect();
  //     const contentHeight = contentRef.current.offsetHeight;
  //     const windowHeight = window.innerHeight;

  //     // Calculate progress through the sticky section
  //     const scrollProgress = Math.max(0, Math.min(1,
  //       (windowHeight - sectionRect.top) / (contentHeight + windowHeight)
  //     ));

  //     // Determine which card should be active based on scroll progress
  //     const cardIndex = Math.floor(scrollProgress * cards.length);
  //     const clampedIndex = Math.max(0, Math.min(cards.length - 1, cardIndex));

  //     if (clampedIndex !== activeCard) {
  //       setActiveCard(clampedIndex);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll(); // Initial call

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [activeCard, cards.length]);


  return (
    <div className="min-h-screen">
      <Hero />
      <FullVision />
      <WhyUs />
      <ValueSection />
      {/* <WhatWebuild /> */}
      <FullStackSupportSection />
      <SeatAtTableSection />
    </div>
  );
};

export default Home;