import React from 'react'
import Slide from './misc/Slide'
import HeaderVideo from './home/HeaderVideo'
import ProxComp from './home/ProxComp'
import TournamentTeams from './home/TournamentTeams'

const Home = () => {
    return(
        <div>
            <HeaderVideo />
            <ProxComp />
            <TournamentTeams />
            <div className="twitch">
                <iframe style={{width: '80%', height: '654px'}} src="https://player.twitch.tv/?channel=valkyriecup_" title="This is a unique title" frameBorder="0" allowFullScreen={true} scrolling="no" height="378" width="620"></iframe>
                <div className="directo">
                    <h3 className="section-title vertical-align">DIRECTO</h3>
                </div>
            </div>
            <Slide />
        </div>
    )
}

export default Home