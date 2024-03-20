import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6qgbjjk', 'template_ii76wzl', form.current, {
            publicKey: 'y3LHt_kZzoIFPuMS2',
        })
        .then(
            () => {
                alert('Email sent successfully')
            },
            (error) => {
                console.log('Error sending email:', error.text)
            }
        )
    }

    return (
        <div>
            <section className="contact" id="contact">

                <h2 className="heading">Contact <span>Me</span></h2>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="input-box">
                        <input id="name" type="text" placeholder="Name"/>
                        <input id="email" type="email" placeholder="Email"/>
                        <input id="subject" type="text" placeholder="Subject"/>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn" />
                </form>

            </section>
        </div>
    )
}