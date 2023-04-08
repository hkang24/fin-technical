import { Card } from "react-bootstrap";
import StarRatingNoNumber from "../StarRatingNoNumber";
import GreyStarRating from "../GreyStarRating";

function Review() {
  return (
    <Card className="review-card d-flex flex-row">
      <div className="d-flex flex-column justify-content-center">
        <h4 className="mb-2">Super Long Review Title</h4>
        <p className="card-desc">
          "Here's a review that a publisher left this person saying how easy it
          was to work with them. Here's a review that a publisher left this
          person saying how easy it was to work with them."
        </p>
        <span className="publish-date">Review Date: 8/22/22</span>
      </div>
      <div className="d-flex flex-column justify-content-center col-4 star-pad">
        <div className="d-flex flex-row justify-content-between rating-style mb-2">
          <h4 className="d-flex align-items-center">Overall</h4>
          <StarRatingNoNumber rating={4} />
        </div>

        <div className="d-flex flex-row justify-content-between rating-style">
          <h5 className="d-flex align-items-center ">Communication</h5>
          <GreyStarRating rating={4} />
        </div>

        <div className="d-flex flex-row justify-content-between rating-style">
          <h5 className="d-flex align-items-center ">Timeliness</h5>
          <GreyStarRating rating={4} />
        </div>

        <div className="d-flex flex-row justify-content-between rating-style">
          <h5 className="d-flex align-items-center rating-height">Value</h5>
          <GreyStarRating rating={4} />
        </div>
      </div>
    </Card>
  );
}

export default Review;
