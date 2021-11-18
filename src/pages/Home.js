import Hero from "../components/Hero/Hero";
import FeaturedBoxList from "../components/FeaturedBoxList/FeaturedBoxList";
import FeaturedTestimonial from "../components/FeaturedTestimonial/FeaturedTestimonial";
import BestBooksGrid from "../components/BestBooksGrid/BestBooksGrid";
import FeaturedDataList from "../components/FeaturedDataList/FeaturedDataList";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import CardList from "../components/CardList/CardList";
import BookDetail from "../components/BookDetail/BookDetail";



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
            <SectionHeading />
            <CardList />
        </div>

    )
}

export default Home;;