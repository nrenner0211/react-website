import Header from "../components/Header";

export default function About() {
    return (
        <div>
            <Header/>
            <section className="about" id="about">

            <div className="about-img">
                <img src="../public/icon-192x192.png" alt="Logo"/>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>Web <span>Developer</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis a obcaecati earum neque, amet, maxime ipsum molestias accusamus ab nihil sit voluptates, delectus ut doloribus consequatur aliquam consequuntur. Perspiciatis, quas.</p>
                <a href="https://www.linkedin.com/in/nicolette-renner/" className="btn">Read More</a>
            </div>
            </section>
        </div>
    )
}