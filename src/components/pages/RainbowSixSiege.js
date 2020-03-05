import React from 'react'
import TournamentTeams from '../home/TournamentTeams'
import { R6Logo, R6BG } from '../../assets'
import Bracket from './Bracket'
import GroupStage from './GroupStage'

const RainbowSixSiege = () => {
    return (
        <div>
            <div style={{backgroundColor: 'black', backgroundImage: `url(${R6BG})`, height: '400px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', marginTop: '-70px', padding: '120px 0px 40px',backgroundAttachment: 'fixed', backgroundPositionY: '-1100px'}}>
                <img src={R6Logo} alt='' style={{height: '100%'}}/>
            </div>
            <TournamentTeams />
            <GroupStage />
            <Bracket />
        </div>
    )
}

export default RainbowSixSiege