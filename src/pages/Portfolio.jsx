import projImg0 from '../assets/summa-screenshot.webp';
import projImg1 from '../assets/dad-app.webp';
import projImg2 from '../assets/gititdonesh.webp';
import projImg3 from '../assets/3dsc.png';

export default function Portfolio() {
    return (
    <div>

        <h2 className="heading">Featured <span>Projects</span></h2>
        
        <section className="portfolio" id="portfolio">
            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={projImg0} alt="" />
                    <div className="portfolio-info">
                        <h4>AI Summarizer</h4>
                        <p>Responsive SaaS website that summarizes articles by URL and saves history to local storage</p>
                        <a href="https://ai-summarizr.netlify.app/"><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={projImg1} alt="" />
                    <div className="portfolio-info">
                        <h4>Dad-App</h4>
                        <p>Collaboration with three other developers. A charming web app for those who like mowing and dad jokes</p>
                        <a href="https://nrenner0211.github.io/dad_app/"><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={projImg3} alt="" />
                    <div className="portfolio-info">
                        <h4>3D Website</h4>
                        <p>Fun 3D galaxy webpage built with Three.js</p>
                        <a href="https://nrenner0211.github.io/intergalactic-3d-resume/"><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={projImg2} alt="" />
                    <div className="portfolio-info">
                        <h4>Git it Done</h4>
                        <p>Fetches open issues from Github API and sorts by language</p>
                        <a href="https://nrenner0211.github.io/git-it-done/"><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>

        </section>
    </div>
    )
}