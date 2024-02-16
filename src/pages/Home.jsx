import homeLogo from "/src/icon-512x512.png";

export default function Home() {
    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h1> <span>nixwebdev</span> </h1>
                    <h3>Web development and IT solutions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta beatae nulla, nemo nobis sed voluptatem ex amet voluptates minima inventore praesentium quaerat laboriosam animi nesciunt provident sit ullam qui fugit!</p>

                    <div className="social-icons">

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/nicolette-renner/"> <i className='bx bxl-linkedin-square' ></i> </a>

                    {/* GitHub */}
                    <a href="https://github.com/nrenner0211"> <i className='bx bxl-github' ></i> </a>

                    {/* Upwork */}
                    <a href="https://www.upwork.com/freelancers/~01e4375b01b80ad24a"> <i className='bx bxl-upwork'></i> </a>

                    {/* Youtube */}
                    <a href="https://www.youtube.com/channel/UCLDDGq_d7Sx4LEF0EO4Pqmw"> <i className='bx bxl-youtube' ></i> </a>
                    </div>

                    {/* Resume / CV */}
                    <a href="https://docs.google.com/document/d/1DcumNcxWQ4piU0pmyhQcVcIc5guyQ-cl5WpNBM5FcEw/edit?usp=sharing" className="btn">Download CV</a>

                </div>
                <div className="home-image">
                    <img src={homeLogo} alt="Logo"/>
                </div>
            </section>
        </div>
    )
}