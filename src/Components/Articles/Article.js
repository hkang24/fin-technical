import { Card } from "react-bootstrap";
import Food from "../../images/food.jpeg"

function Article() {
  return (
    <Card className="card d-flex justify-content-center flex-column">
      <div className="card-m">
        <a href="OnlineNutritionReviews.com">
          OnlineNutritionReviews.com
        </a>
        <p className="publish-date">Published 8/12/22</p>
        <h4 className="mb-2">Article Title: Nutrition in Two Lines</h4>
        <p className="card-desc">This a two line short description of the article reviewed...</p>
        <img className="food-img" src={Food} alt="food"/>
      </div>
    </Card>
  );
}

export default Article;
