import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import HowWeBuild from './pages/HowWeBuild';
import Portfolio from './pages/Portfolio';
import JoinUs from './pages/JoinUs';
// import ScrollSmoother from "gsap/ScrollSmoother";
// import ScrollTrigger from "gsap/ScrollTrigger";

// import gsap from 'gsap';
import OurCulture from './pages/OurCulture';
import Policy from './pages/Policy';
import "../src/components/CustomCursor.css";
import JobDetail from './pages/JobDetail';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function App() {
    // const [ setPosition] = useState({ x: 0, y: 0 });

  // const smootherRef = useRef<ScrollSmoother | null>(null);
  // useEffect(() => {
  //   smootherRef.current = ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 1, // time in seconds for the "catch-up" animation
  //     effects: true, // look for data-speed and data-lag attributes
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     if (smootherRef.current) {
  //       smootherRef.current.kill();
  //     }
  //   };
  // }, []);
// useEffect(() => {
//     const moveCursor = (e: { clientX: any; clientY: any; }) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", moveCursor);
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);


  return (
    <Router>
       {/* <div
        className="custom-cursor"
        style={{ left: position.x, top: position.y }}
      /> */}
                 {/* <MouseBubblesBackground /> */}

{/* <div id='smooth-wrapper'>
  <div id='smooth-content'> */}
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/who-we-are" element={<WhoWeAre />} /> */}
                  <Route path="/who-we-are/our-path" element={<WhoWeAre />} />
                  <Route path="/who-we-are/our-culture" element={<OurCulture />} />
                  <Route path="/how-we-build" element={<HowWeBuild />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/join-us" element={<JoinUs />} />
                  <Route path="/privacy-policy" element={<Policy />} />
                  <Route path="/job-detail" element={<JobDetail />} />
                </Routes>
                <Footer />
                {/* </div>
            </div> */}
    </Router>
  );
}

export default App;