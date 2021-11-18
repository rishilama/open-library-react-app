import FeaturedDataItem from "../FeaturedDataItem/FeaturedDataItem";

function FeaturedDataList() {
    return (
        <div className="achivements-container container">
            <div className="container-row">
                <FeaturedDataItem />
                <FeaturedDataItem />
                <FeaturedDataItem />
                <FeaturedDataItem />
            </div>
        </div>
    )
}

export default FeaturedDataList;