import { Link } from "react-router-dom";

function BestBookGridItem({ id, title, image }) {
    return (
        <li>
            <Link to={`book/${id}`}>
                <img className="doc_thumb "
                src={image}
                alt={title} 
                style={{
                    width: "100px"
                }}
            />
            </Link>
        </li>
    )
}

export default BestBookGridItem;