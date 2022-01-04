function FeaturedDataItem( { number, text} ) {
    return (
        <div className="container-col">
            <h1 className="col-numbers">{number}</h1>
            <p className="col-text">{text}</p>
        </div>
    )
}

export default FeaturedDataItem;