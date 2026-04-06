import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  Users,
  Lightbulb,
  Heart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Blocks,
  Speech,
  ThumbsUp,
  Box,
  Boxes,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ValuesCarousel() {
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(300 + 32);

  const values = [
    {
      icon: <Blocks className="text-green-400" size={36} />,
      title: "Integrity",
      desc: "We believe that there is a right way to doing things and that means not deviating from our principles and core values. We aim to be trustworthy partners with actions that back up our words.",
    },
    {
      icon: <Speech className="text-green-400" size={36} />,
      title: "Humility",
      desc: "We don’t know what we don’t know. Everyone has something to contribute and there is always something more we can learn. Be open, acknowledge mistakes, and seek continuous improvement.  ",
    },
    {
      icon: <Users className="text-green-400" size={36} />,
      title: "Empathy",
      desc: " We put people first. To practice grace by understanding that people are imperfect is to genuinely care for others. We believe that true value creation comes from deeply understanding the needs of others. ",
    },
    {
      icon: <ThumbsUp className="text-green-400" size={36} />,
      title: "Excellence",
      desc: "We are relentless in doing things well, especially in the little details. Consistency in the little things done well makes up excellence.",
    },
    {
      icon: <Boxes className="text-green-400" size={36} />,
      title: "Community",
      desc: "We enjoy seeing individual pieces come together to create amplified impact through harmonious collaboration. After all, the whole is greater than the sum of its parts. ",
    },
  ];

  const maxIndex = values.length - 1;

  useEffect(() => {
    const updateItemWidth = () => {
      const width = window.innerWidth;
      if (width < 640) setItemWidth(window.innerWidth - 64);
      else if (width < 1024) setItemWidth(250 + 32);
      else setItemWidth(300 + 32);
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);
    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  const scrollToIndex = (index: number): void => {
    if (index < 0 || index > maxIndex) return;
    setCurrentIndex(index);

    gsap.to(trackRef.current, {
      x: -index * itemWidth,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) scrollToIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gray-900 text-white" ref={carouselRef}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-[Playfair Display]">
            Our <span className="text-green-400">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 font-[Roboto]">
Our decisions and activities are guided by these values.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 sm:px-20">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-green-700 text-white shadow-lg rounded-full p-2 z-10"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-green-700 text-white shadow-lg rounded-full p-2 z-10"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex space-x-8 w-max transition-transform ease-in-out p-4"
              style={{ willChange: "transform" }}
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="min-w-[260px] sm:min-w-[300px] max-w-[300px] text-center group bg-gray-800 px-6 py-8 rounded-3xl border border-gray-700 shadow-xl hover:scale-105 transition-transform"
                >
                  <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-800 transition-colors">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 font-[Playfair Display]">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-[Roboto]">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/who-we-are/our-culture"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-green-500 transition-colors space-x-2"
          >
            <span>Our Culture</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
