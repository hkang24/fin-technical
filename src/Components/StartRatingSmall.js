import { FaStar, FaRegStar } from 'react-icons/fa';
import "./Profile.css";

function StarRatingSmall(props) {
  // Round rating to nearest half
  const roundedRating = Math.round(props.rating * 2) / 2;

  return (
    <div className='star-div'>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 0.5;
        if (roundedRating >= starValue) {
          return <FaStar key={i} className = "star blue" size={20} />;
        } else if (roundedRating >= i) {
          return <FaRegStar key={i} className = "star blue" size={20}/>;
        } else {
          return <FaRegStar key={i} className = "star blue" size={20}/>;
        }
      })}
      <span className='small-rating-name blue'>
        {"(" + props.rating + "/" + 5 + ")"}
      </span>
    </div>
  );
}

export default StarRatingSmall;