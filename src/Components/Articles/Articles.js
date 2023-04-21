import Article from "./Article";
import Carousel from "./Carousel";
import "react-multi-carousel/lib/styles.css";

function Articles(props) {
  return (
    <div className="articles">
      <div className="sections">
        <h2>Reviewed Articles</h2>
        <div className="d-flex flex-row">
            <Carousel
            show={3}>
                <Article key={"article1"}/>
                <Article key={"article2"}/>
                <Article key={"article3"}/>
                <Article key={"article4"}/>
                <Article key={"article5"}/>
                <Article key={"article6"}/>
            </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Articles;
