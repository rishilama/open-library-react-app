import BestBookGridItem from "../BestBookGridItem/BestBookGridItem"

function BestBooksGrid() {
    return (
        <div className="best-selling">
            <div className="best-selling__books__audio container">
                <h2 className="bestbooks__title">Bestselling Books and Audiobooks</h2>
            </div>
            <div className="best-list">
                <ul className="best-books-ul container">
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                    <BestBookGridItem />
                </ul>
                <div className="text-section">
                <a href="https://google.com" className="btn best__btn container">
                    <h4>Read free for 30 days</h4>
                </a>
                <p className="best__text container">Only ₹299/month after. Cancel anytime.</p>
            </div>
        </div>
    </div>
    )
}

export default BestBooksGrid
