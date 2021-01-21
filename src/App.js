import logo from './logo.svg';
import './App.css';

import React from 'react'
import './App.css';
import BasicInfo from './BasicInfo'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person:[
          {
            name: "Frew",
            number: 7045433212,
            dob: "02/30/2000"
          },
          {
            name: "Matt",
            number: 7043456542,
            dob: "05/01/2001"
          },
          {
            name: "Reggie",
            number: 9804507860,
            dob: "01/01/1969"
          }
      ]
    }
  }
  render(){
    let people = this.state.person;
    return(
      <BasicInfo data={people}/>
    )
  }
}

export default App;
