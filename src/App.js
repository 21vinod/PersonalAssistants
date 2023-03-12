import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";
import 'bulma/css/bulma.css';

function App(){
    return(
        <div>
            <div className="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Primary hero
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImg}
                            description="Alexa was made by Amazon and it helps to buy things from Amazon" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri99" 
                            image={SiriImg} 
                            description="Siri was made by Apple and it helps to aswer your questions" />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana232" image={CortanaImg} 
                            description="Cortana was made by Microsoft and it helps to personalize your windows PC" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;