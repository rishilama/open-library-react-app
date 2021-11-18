import { Link } from "react-router-dom";

function Card({ id, title, image, description, authorName, authorURL }) {
    return (
        <div className="category-list-container container">
            <div className="container-inside-container">
                <div className="card">
                    <Link to={`book/${id}`}><img className="card__img" alt="Book Cover"
                        src={image} /></Link>
                </div>

                <div className="card-description">
                    <Link to={`/book/${id}`} className="card__title">{title}</Link>
                    <p className="card__details">{description}</p>
                    <a href={authorURL} className="card__author">{authorName}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;