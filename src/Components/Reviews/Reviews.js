import { Row } from "react-bootstrap";
import StarRating from "../StarRating";
import Dropdown from "./MyDropdown"
import Review from "./Review";


function Reviews(props) {
  return (
    <div className="bio articles">
      <div className="sections">
        <Row className="d-flex flew-row justify-content-between">
          <div className="d-flex flex-row align-items-center review-one-width">
            <span className="review-span">Reviews</span>
            <StarRating rating={props.rating} />
          </div>
          <div className="d-flex flex-row align-items-center sort-div">
              <span className="sort">Sort by:</span>
              <Dropdown/>
          </div>
        </Row>
        <Review/>
        <Review/>
        <Review/>
      </div>
    </div>
  );
}

export default Reviews;
