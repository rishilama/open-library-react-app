function Footer() {
    return (
        <div className="back">
            <div className="container">
                <footer className="footer" id="footer">
                    <div className="footer-column">
                        <b className="about">About</b>
                        <ul className="about__ul">
                            <li><a href="https://google.com" className="about__list">Press</a></li>
                            <li><a href="https://google.com" className="about__list">Blogs</a></li>
                            <li><a href="https://google.com" className="about__list">Gift</a></li>
                            <li><a href="https://google.com" className="about__list">Team</a></li>
                            <li><a href="https://google.com" className="about__list">Enterprise</a></li>
                        </ul>
                    </div>

                    <div className="footer-column"><b className="support">Support</b>
                        <ul className="support__ul">
                            <li><a href="https://google.com" className="support__list">Help/FAQ</a></li>
                            <li><a href="https://google.com" className="support__list">Accessibility</a></li>
                            <li><a href="https://google.com" className="support__list">Publishers</a></li>
                            <li><a href="https://google.com" className="support__list">Advertisers</a></li>
                        </ul>
                    </div>

                    <div className="footer-column-3"><b className="legal">Legal</b>
                        <ul className="legal__ul">
                            <li><a href="https://google.com" className="legal__list">Terms</a></li>
                            <li><a href="https://google.com" className="legal__list">Privacy</a></li>
                            <li><a href="https://google.com" className="legal__list">Copyright</a></li>
                            <li><a href="https://google.com" className="legal__list">Cookie policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-column-4"><b className="social">Social</b>
                        <ul className="social__ul">
                            <li><i className="fab fa-instagram"><a href="https://google.com" className="social__list">Instagram</a></i></li>
                            <li><i className="fab fa-twitter"><a href="https://google.com" className="social__list">Twitter</a></i></li>
                            <li><i className="fab fa-facebook"><a href="https://google.com" className="social__list">Facebook</a></i></li>
                            <li><i className="fab fa-linkedin"><a href="https://google.com" className="social__list">Linkedin</a></i></li>
                        </ul>
                    </div>

                    <div className="footer-column-5"><b className="free-apps">Free apps</b>
                        <ul className="apps">
                            <li>
                                <a href="https://google.com"><img
                                    src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg"
                                    alt="google play store" className="playstore" />
                                </a>
                            </li>

                            <li>
                                <a href="https://google.com"><img
                                    src="https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg"
                                    alt="apple app store" className="appstore" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Footer;