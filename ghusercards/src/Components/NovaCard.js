import React from 'react'
import axios from 'axios'

const NovaCard = props =>{
    return (
    <div className='gitbest-container'>
        <h2>{props.iamthe.name}</h2>
        <img src={props.iamthe.avatar_url}></img>
        <h3>{props.iamthe.bio}</h3>
    </div>
    )
}

export default NovaCard