import Header from "../components/Header";

export default function Home() {
    return (
        <div>
            <Header/>
            <section className="home" id="home">
            <div className="home-content">
                <h3>Hi</h3>
                <h1>Its nixwebdev</h1>
                <h3><span>Web developer</span> specializing in reliable, time-tested websites</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta beatae nulla, nemo nobis sed voluptatem ex amet voluptates minima inventore praesentium quaerat laboriosam animi nesciunt provident sit ullam qui fugit!</p>

                <div className="social-icons">
                <a href="https://www.linkedin.com/in/nicolette-renner/"><i className='bx bxl-linkedin-square' ></i></a>
                <a href="https://github.com/nrenner0211"><i className='bx bxl-github' ></i></a>
                </div>

                <a href="#" className="btn">Download CV</a>
            </div>
            </section>
        </div>
    )
}