import React from 'react'
import { withRouter } from 'react-router-dom'


class About extends React.Component {

  render() {
    return(
    <div className="about">
        <br/>
        <h2 className="toquetitle">
            Toque
        </h2>
        <p className="aboutmessage">
            Welcome to Toque, your safe place for your recipes and family secrets.
            We don't want this to be another social media where your private concoctions are shared with the world.
            Here at Toque, we are a judgement-free zone. 
            A place for you to safekeep all your recipes. 
            For you to revisit them and make your nonna's penne or your aunt's mousse au chocolat free from the piranhas of the internet.
            Here at Toque, we hope you will join us and keep all of our family traditions from being lost in the void of time.
        </p>
        <p className="aboutmessage">
            A toque is a tall white hat with a full pouched crown, worn by chefs.
        </p>
    </div>
    )
  }
}

export default withRouter(About)