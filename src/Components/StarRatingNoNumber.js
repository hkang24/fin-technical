import { FaStar, FaRegStar } from 'react-icons/fa';
import "./Profile.css";

function StarRatingNoNumber(props) {
  // Round rating to nearest half
  const roundedRating = Math.round(props.rating * 2) / 2;

  return (
    <div className='star-div'>
      {[...Array(5)].map((_, i) => {
        const starValue = i + 0.5;
        if (roundedRating >= starValue) {
          return <FaStar key={i} className = "star blue" size={18} />;
        } else if (roundedRating >= i) {
          return <FaRegStar key={i} className = "star blue" size={18}/>;
        } else {
          return <FaRegStar key={i} className = "star blue" size={18}/>;
        }
      })}
    </div>
  );
}

export default StarRatingNoNumber;