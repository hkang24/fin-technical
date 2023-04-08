import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import Profile from "./Components/Profile";
import data from "./Data";
// import Bio from './Components/Bio/Bio';
import Body from "./Components/Body";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import SideProfile from "./Components/SideProfile/SideProfile";

function App() {
  const elementRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);
  const [sideProfile, setSideProfile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      windowDimensions.width > 800 &&
      scrollTop >= 255 &&
      sideProfile == false
    ) {
      setSideProfile(true);
    } else if (windowDimensions.width <= 800 && sideProfile == true) {
      setSideProfile(false);
    } else if (scrollTop < 150 && sideProfile == true) {
      setSideProfile(false);
    }
  }, [scrollTop, windowDimensions]);

  return (
    <div>
      <NavBar />
      <div className="mt-5">
        <Profile data={data} />
        <hr />
        {sideProfile && (
          <SideProfile
            rating={data[0].pubRating}
            user={data[0].user}
            credentials={data[0].credentials}
            rate={data[0].ratePerArticle}
          />
        )}
        <Body
          about={data[0].about}
          credentials={data[0].credentials}
          publications={data[0].publications}
          rating={data[0].pubRating}
        />
      </div>
    </div>
  );
}

export default App;
