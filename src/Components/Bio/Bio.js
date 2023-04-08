import About from "./About";
import Education from "./Education";
import Publications from "./Publications";


function Bio(props) {
    return (
      <div className="bio">
          <About about = {props.about}/>
          <Education credentials = {props.credentials}/>
          <Publications publications = {props.publications}/>
      </div>
    );
  }
  
  export default Bio;