import React, { Component } from 'react'

const GitBudCard = props =>{
    return (
    <div className='gitbudcard-container'>
        <div>{props.name}</div>
        <img src={props.avatar}></img>
    </div>
    )
}

export default GitBudCard