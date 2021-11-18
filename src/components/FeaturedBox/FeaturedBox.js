function FeaturedBox() {
    return (
        <div className="card">
            <div className="card__img">
                <img src="https://s-f.scribdassets.com/images/landing/index/logo_wallstreetjournal.svg?4f55e76f0"
                    alt="RESPONSIVE LAYOUT" className="card_image" />
            </div>
            <div className="card__body">
                <h6 className="card__title">
                    RESPONSIVE LAYOUT
                </h6>

                <p className="card__text">
                    Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize
                    browser to view.
                </p>
            </div>
        </div>
    )
}

export default FeaturedBox;