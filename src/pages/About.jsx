import aboutImage from '/src/assets/headshot2.jpg';

export default function About() {
    return (
        <div>
            <section className="about" id="about">

            <div className="about-img">
                <img src={aboutImage} alt="Logo"/>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3><span>Freelance Developer and Virtual Assistant</span></h3>
                <p>Behind nixwebdev is Nicolette Renner, self-taught developer and passionate freelancer</p>
                <a href="https://www.linkedin.com/in/nicolette-renner/" className="btn">Read More</a>
            </div>
            </section>
        </div>
    )
}