function Hero( {title, text, btnText, textUnderBtn} ) {

    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-section__container container">
                <h1 className="hero-section__title">
                    {title}
                </h1>
                <p className="hero-section__text">
                    {text}
                </p>
                <a href="https://google.com" className="btn btn--large btn--white hero-section__btn">
                    <h4>{btnText}</h4>
                </a>
                <p className="hero-section__text-under-btn">{textUnderBtn}</p>
            </div>
        </div>
    )
}

export default Hero;