export default function Services() {
    return (
        <div>
            <section className="services" id="services">
                
                <h2 className="heading">My <span>Services</span></h2>

                <div className="service-container">

                    <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                        <h3>Web Development</h3>
                        <p>Experienced in the full development life cycle and best practices</p>
                        <a href="#portfolio" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                    <i className='bx bxs-palette' ></i>
                        <h3>AI Solutions</h3>
                        <p>Custom AI solutions for your website</p>
                        <a href="#" className="btn">Read More</a>
                    </div>

                    <div className="services-box">
                        <h3>Technical Virtual Assistance</h3>
                        <i className='bx bxs-check-shield'></i>
                        <p>Well-rounded freelancer focusing on web development and technical virtual assistance contracts. Skills range from creating, updating, and maintaining websites to generating content and email management</p>
                        <a href="https://www.upwork.com/freelancers/~01e4375b01b80ad24a" className="btn">Read More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}