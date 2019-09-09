import Layout from '../Components/Layout'
import Footer from '../Components/Footer'

const Portfolio = _ => (
    <Layout>
        <div class="project-container">
            <ul class="items-container">
                
                <li class="item-container col-md-6 col-sm-6 bad">
                    <a href="https://github.com/rmartinez213/BadAreaDetector_WebApp">
                        <div class="text-container">
                            <div class="title-box">Senior Design Project</div>
                            <div class="description-box"><h3>Bad Area Detector System</h3></div>
                        </div>
                    </a>
                </li>
                
                
                <li class="item-container col-md-6 col-sm-6 raspberrypi">
                    <a href="https://github.com/rmartinez213/undergraduate/blob/master/personal%20projects/Raspberry%20Pi%20Tablet.pdf">
                        <div class="text-container">
                            <div class="title-box">Personal Project</div>
                            <div class="description-box"><h3>Portable Retro Gaming Tablet</h3></div>
                        </div>
                    </a>
                </li>
                
                <li class="item-container col-md-6 col-sm-6 ftfty">
                    <a href="https://github.com/rmartinez213/undergraduate/tree/master/undergraduate%20projects/cs3337%20Software%20Engineering%20Web%20Page">
                        <div class="text-container">
                            <div class="title-box">Class Project</div>
                            <div class="description-box"><h3>From The Farm To You</h3></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="footer-space">
            
        </div>

        <Footer />

    </Layout>
)

export default Portfolio