import React, { Component } from 'react'
import ValkCupService from '../../services/ValkCupServices'
import CardGroup from '../groups/CardGroup'
import { backgroundVC } from '../../assets'

class GroupStage extends Component {
    state = {
        groups: []
    }

    componentDidMount() {
        ValkCupService.groups('5e4af618b8c2111c8cdd9cf7')
        .then(object  => {
            this.setState({
                groups: object.groups
            })
            // this.setState({
            //     groups: groups
            //         .reduce((acc, groupopo) => [...acc, ...groupopo], [])
            //         .map(({ teamName, logo }) => ({ [teamName]: logo }))
            // })
        })
    }

    render() {
        const { groups } = this.state
        return(
            <div style={{backgroundImage: `url(${backgroundVC})`, backgroundSize: 'contain'}} className="section-groups">
                <div className="groups-container">
                    {
                        groups.map((group, index) => {
                            const groupName = ['A', 'B', 'C', 'D']
                            return (
                                <div className="group" key={index}>
                                    <h4 className="section-title">GRUPO {groupName[index]}</h4>
                                    <CardGroup group={group}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h3 className="section-title vertical-align">GRUPOS</h3>
                </div>
            </div>
        )
    }
}

export default GroupStage