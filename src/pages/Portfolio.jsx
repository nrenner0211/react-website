import projImg0 from '../assets/summa-screenshot.webp';
import projImg1 from '../assets/dad-app.webp';
import projImg2 from '../assets/gititdonesh.webp';

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
                        <p>100% RESPONSIVE SaaS website that summarizes articles by URL and saves history to local storage.</p>
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
                    <img src={projImg2} alt="" />
                    <div className="portfolio-info">
                        <h4>Git it Done</h4>
                        <p>Fetches open issues from Github API</p>
                        <a href="https://nrenner0211.github.io/git-it-done/"><i className='bx bx-link'></i></a>
                    </div>
                </div>
            </div>

        </section>
    </div>
    )
}