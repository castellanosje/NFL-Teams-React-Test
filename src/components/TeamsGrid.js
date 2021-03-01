import React from 'react'
import {TeamGridItem} from './TeamGridItem'


export const TeamsGrid = ({teams, loading}) => {

    return (
        
        <div className="grilla">
            <p>{loading && "cargando..."}</p>
            {
                teams.map( team => {
                    return <TeamGridItem {...team} key={team.id}/>
                })
                
            }
        </div>
    )
}
