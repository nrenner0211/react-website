import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <Header/>
            <section className="contact">

                <h2 className="heading">Contact <span>Me</span></h2>

                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Full Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn" />
                </form>

            </section>
            <Footer/>
        </div>
    )
}