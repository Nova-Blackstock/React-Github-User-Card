import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NovaCard from './Components/NovaCard'
import GitBudList from './Components/GitBudList'
import SearchForm from './Components/SearchForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      gitbuds: [],
      gitbest: [],
      gitsearch: ""
    }
  }

  setSearchValue = value =>{
    debugger
    this.setState({
      gitsearch: value
    })
  }

  onSubmit = gitname =>{
    console.log('yo')
  }

  componentDidUpdate(){
    axios.get(`https://api.github.com/users/${this.state.gitsearch}`)
      .then(res =>{
        this.setState({
          gitbest: res.data
        })
      })
      
    axios.get(`https://api.github.com/users/${this.state.gitsearch}/followers`)
    .then(res =>{
      this.setState({
        gitbuds: res.data
      })
    })
  }


  componentDidMount(){
    axios.get('https://api.github.com/users/nova-blackstock')
      .then(res =>{
        this.setState({
          gitbest: res.data
        })
        console.log(this.state.gitbest)

      })

    axios.get('https://api.github.com/users/nova-blackstock/followers')
      .then(res =>{
        this.setState({
          gitbuds: res.data
        })
      })
  }

    render(){
    return (
      <div className="App">
      <header className="App-header">
        <SearchForm 
          setSearchValue={this.setSearchValue}
          gitsearch={this.state.gitsearch}
          onSubmit={this.onSubmit}
        />
        <NovaCard
          iamthe={this.state.gitbest}
        />
        <img src='https://cdn-images-1.medium.com/max/1600/1*iK6iu5IkyDtoDZbybfY1VA.png' className="App-logo" alt="logo" />
        <h1>
          Nova's Git Buddies!
        </h1>
    <div className='gitbuds-container'>
      <GitBudList 
        gitbuds={this.state.gitbuds}
      />

    </div>
      </header>
    </div>
  );
 }
}

export default App;


// {this.state.gitbuds.map(gitbud =>{
//   return <div>Make gitbud card</div>
//  })}