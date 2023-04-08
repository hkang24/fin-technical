import Bio from "./Bio/Bio";
import Articles from "./Articles/Articles";
import Reviews from "./Reviews/Reviews";
import "./Body.css";

function Body(props) {
  return (
    <div>
      <Bio about = {props.about} credentials={props.credentials} publications={props.publications} />
      <div>
        <Articles/>
        <Reviews rating={props.rating} />
      </div>
    </div>
  );
}

export default Body;
