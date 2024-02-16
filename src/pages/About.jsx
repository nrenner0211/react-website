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
                <h3>Web <span>Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia omnis voluptatum rem aut, maiores veritatis quibusdam ea assumenda dolor asperiores possimus tempora. Quidem molestiae dolor deleniti voluptatibus tenetur autem non!</p>
                <a href="https://www.linkedin.com/in/nicolette-renner/" className="btn">Read More</a>
            </div>
            </section>
        </div>
    )
}