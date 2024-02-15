export default function Footer() {
    return (
        <footer className="footer">
            <div className="social">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/nicolette-renner/"><i className='bx bxl-linkedin-square' ></i></a>

                {/* Github */}
                <a href="https://github.com/nrenner0211"><i className='bx bxl-github' ></i></a>

                {/* Upwork */}
                <a href="https://www.upwork.com/freelancers/~01e4375b01b80ad24a"> <i className='bx bxl-upwork'></i> </a>

                {/* Youtube */}
                <a href="https://www.youtube.com/channel/UCLDDGq_d7Sx4LEF0EO4Pqmw"> <i className='bx bxl-youtube' ></i> </a>
            </div>
            <ul className="list">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <p className="copyright">© 2024 Nicolette Renner</p>
        </footer>
    )
}