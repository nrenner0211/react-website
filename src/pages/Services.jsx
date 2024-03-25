export default function Services() {
    return (
        <div>
            <section className="services" id="services">
                
                <h2 className="heading">My <span>Services</span></h2>

                <div className="service-container">

                    <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                        <h3>Website Audit</h3>
                        <p>Knowledgable of development best practices including performance, accessibility, and SEO</p>
                        <a href="https://www.upwork.com/freelancers/~01e4375b01b80ad24a" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                    <i className='bx bxs-palette' ></i>
                        <h3>Creative Designs</h3>
                        <p>Need help establishing your web presence? I can leverage coding to generate a truly unique background for your website</p>
                        <a href="#contact" className="btn">Contact Me</a>
                    </div>

                    <div className="services-box">
                        <h3>Virtual Assistance</h3>
                        <i className='bx bxs-calendar-check'></i>
                        <p>Virtual assistant with bonus technical skills. Crafting a web presence for startups and new businesses is my niche. Well-versed in all forms of social media marketing</p>
                        <a href="https://www.upwork.com/freelancers/~01e4375b01b80ad24a" className="btn">Read More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}