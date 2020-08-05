import React from 'react'
import GitBudCard from './GitBudCard'

const GitBudList = props => {
    return(
        <div className='gitbud-list'>
            {props.gitbuds.map(gitbud =>(
                console.log(gitbud),
                <GitBudCard
                    key={gitbud.id}
                    name={gitbud.login}
                    avatar={gitbud.avatar_url}
                />
            ))}
        </div>
    )
}

export default GitBudList