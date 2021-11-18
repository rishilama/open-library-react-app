import FeaturedBox from "../FeaturedBox/FeaturedBox";

function FeaturedBoxList() {
    return (
        <div className="featured-section">
            <div className="featured-section__container container">
                <h1 className="featured-section__heading">
                    What You Get with Open library?
                </h1>

                <p className="featured-section__text">
                    Best-Selling & Most Trusted HTML5 Template. Experience the Ever-Growing Feature Rich Template since
                    2014.
                </p>

                <div className="card__grid">

                    <FeaturedBox />
                    <FeaturedBox />
                    <FeaturedBox />
                    <FeaturedBox />

                </div>
            </div>
        </div>
    )
}

export default FeaturedBoxList;