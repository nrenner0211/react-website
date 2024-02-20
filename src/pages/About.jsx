import aboutImage from '/src/headshot-img1.png';

export default function About() {
    return (
        <div>
            <section className="about" id="about">

            <div className="about-img">
                <img src={aboutImage} alt="Logo"/>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3><span>Freelancer, Developer, Virtual Assistant</span></h3>
                <p>Behind nixwebdev is just Niki, a tech savvy Virtual Assistant with web development experience and an interest in all things IT. Need a technical solution or just general support? I can help!</p>
                <a href="https://www.linkedin.com/in/nicolette-renner/" className="btn">Read More</a>
            </div>
            </section>
        </div>
    )
}