import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header/>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hi, its...</h3>
                    <h1><span>nixwebdev</span></h1>
                    <h3>Web development and IT solutions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta beatae nulla, nemo nobis sed voluptatem ex amet voluptates minima inventore praesentium quaerat laboriosam animi nesciunt provident sit ullam qui fugit!</p>

                    <div className="social-icons">
                    <a href="https://www.linkedin.com/in/nicolette-renner/"><i className='bx bxl-linkedin-square' ></i></a>
                    <a href="https://github.com/nrenner0211"><i className='bx bxl-github' ></i></a>
                    </div>

                    <a href="https://docs.google.com/document/d/1DcumNcxWQ4piU0pmyhQcVcIc5guyQ-cl5WpNBM5FcEw/edit?usp=sharing" className="btn">Download CV</a>
                </div>
                <div className="home-image">
                    <img src="/icon-192x192.png" alt="Logo"/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}