import FeaturedDataItem from "../FeaturedDataItem/FeaturedDataItem";

function FeaturedDataList() {
    return (
        <div className="achivements-container container">
            <div className="container-row">
                <FeaturedDataItem number="4000+" text="HAPPY CUSTOMERS" />
                <FeaturedDataItem number="5000+" text="PROJECTS COMPLETED" />
                <FeaturedDataItem number="7+" text="YEARS OF EXPERIENCE" />
                <FeaturedDataItem number="800+" text="FIVE STAR REVIEWS" />
            </div>
        </div>
    )
}

export default FeaturedDataList;