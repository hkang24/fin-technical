
import "./App.css";
import "./Components/Profile.css";
import NavBar from "./Components/Navbar";
import Profile from "./Components/Profile";
import data from "./Data";
import Body from "./Components/Body";
import { useState } from "react";
import { useEffect } from "react";
import { useRef, useCallback} from "react";
import SideProfile from "./Components/SideProfile/SideProfile";

function App() {
  const [sideProfile, setSideProfile] = useState(false);
  const observer = useRef();

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );


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

  const lastPageRef = useCallback((node) => {
    // console.log("useCallBack called");
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      console.log("entry:" + entries[0]);
      if (entries[0].isIntersecting) {
        // console.log("not intersecting");
        setSideProfile(false);
      } else if (!entries[0].isIntersecting && windowDimensions.width > 1070) {
        // console.log("intersecting");
        setSideProfile(true);
      } else if (!entries[0].isIntersecting && windowDimensions.width <= 1070) {
        // console.log("intersecting");
        setSideProfile(false);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <div className="d-flex flex-column">
      <NavBar className="nav"/>
      <div className="shift-down">
        <Profile ref = {lastPageRef} data={data} width = {windowDimensions.width > 700}/>
        <hr />
        <Body
              about={data[0].about}
              credentials={data[0].credentials}
              publications={data[0].publications}
              rating={data[0].pubRating}
              visible = {sideProfile}
              width = {windowDimensions.width > 500}
            />
        {sideProfile && (
            <SideProfile
              rating={data[0].pubRating}
              user={data[0].user}
              credentials={data[0].credentials}
              rate={data[0].ratePerArticle}
              ref = {lastPageRef}
            />
        )}
      </div>
    </div>
  );
}

export default App;
