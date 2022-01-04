import CardList from "../components/CardList/CardList";
import SectionHeading from "../components/SectionHeading/SectionHeading";

function List() {
    return(
        <div className="page__list">
            <SectionHeading section_title="Book List" />
            <CardList />
        </div>
    )
}

export default List;