import Hero from "../components/Hero/Hero";
import FeaturedBoxList from "../components/FeaturedBoxList/FeaturedBoxList";
import FeaturedTestimonial from "../components/FeaturedTestimonial/FeaturedTestimonial";
import BestBooksGrid from "../components/BestBooksGrid/BestBooksGrid";
import FeaturedDataList from "../components/FeaturedDataList/FeaturedDataList";


function Home() {
    const heroData = {
        title: "Endless entertainment and knowledge",
        text: "Read or listen anytime, anywhere",
        btnText: "Read free for 30 days",
        textUnderBtn: "Only ₹299/month after. Cancel anytime."
    }

    return (
        <div className="page__home">
            <Hero  {...heroData} />
            <FeaturedBoxList />
            <FeaturedTestimonial />
            <BestBooksGrid />
            <FeaturedDataList />
        </div>

    )
}

export default Home;;