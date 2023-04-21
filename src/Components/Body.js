import Bio from "./Bio/Bio";
import Articles from "./Articles/Articles";
import Reviews from "./Reviews/Reviews";
import "./Body.css";

function Body(props) {
  return (
    <div>
      {!props.visible && (
        <div className="bio">
          <Bio
            about={props.about}
            credentials={props.credentials}
            publications={props.publications}
          />
          <Articles />
          <Reviews rating={props.rating} width = {props.width} />
        </div>
      )}
      {props.visible && (
        <div className="visible">
          <Bio
            about={props.about}
            credentials={props.credentials}
            publications={props.publications}
          />
          <Articles />
          <Reviews rating={props.rating} width = {props.width}/>
        </div>
      )}
    </div>
  );
}

export default Body;

// {props.visible && (
//   <div className="visible">
//     <Articles />
//     <Reviews rating={props.rating} />
//   </div>
// )}
// {!props.visible && (
//   <div className="bio">
//     <Articles />
//     <Reviews rating={props.rating} />
//   </div>
// )}
