import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImage from '/src/headshot-img1.png';

export default function About() {
    return (
        <div>
            <Header />
            <section className="about" id="about">

            <div className="about-img">
                <img src={aboutImage} alt="Logo"/>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Web <span>Developer</span></h3>
                <p>My name is Nicolette Renner. I`m a self-taught web developer and lover of all things tech. Persistent student of IT. </p>
                <a href="https://www.linkedin.com/in/nicolette-renner/" className="btn">Read More</a>
            </div>
            </section>
            <Footer />
        </div>
    )
}