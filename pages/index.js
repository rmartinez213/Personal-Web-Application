import Layout from '../Components/Layout'
import Footer from '../Components/Footer'

const Index = _ => (
    <Layout>
        <div class="container my-container">
            <div class="row">
                
                <div class="col-md-4 col-sm-6 align-self-center second-container">
                    <img src="../static/Me.jpg" class="self-picture" />
                </div>

                <div class="col-md-6 col-sm-6 align-self-center third-container">
                    <div class="Homebody">
                    <div class="Homebodyheader"><h1>Hello, World! I am Robert!</h1></div>
                    <div class="Homebodytext">I am a recent graduate from Cal State Los Angeles (class of 2019 🎓) with a B.S in Computer Science.
                    My current focus is on improving my full stack development skills. As of now, I have learned and implemented ReactJs into my 
                    senior design project and have worked with Predix.io and IBM Cloud. I am currently invested in doing side projects on my 
                    personal time, learning frameworks and libraries such as NextJs and Redux. Aside from programming, I enjoy music, dogs 🐶, music concerts, 
                    pizza 🍕, movies.
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

    </Layout>
)

export default Index