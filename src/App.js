import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import ChatScreen from './ChatScreen';
import UserHome from './UserHome';
import UserNavbar from './components/UserNavbar';
import TeacherHome from './components/TeacherHome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor() {
    super()
        this.state = {
          currentUsername: 'chi',
          currentScreen: 'ChatScreen'
        }
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
      }
        onUsernameSubmitted(username) {
            fetch('http://localhost:3001/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username }),
            })
              .then(response => {
                this.setState({
                  currentUsername: 'chi',
                  currentScreen: 'ChatScreen'
                })
              })
              .catch(error => console.error('error', error))
          }
  render() {
    return(
    <Router>
      <UserNavbar/>
      <Switch>
        <Route exact path="/">landing</Route>
        <Route path ="/teacher-home"><TeacherHome/></Route>
        <Route path ="/home" ><UserHome/></Route>
        <Route path="/chat"><ChatScreen currentUsername={this.state.currentUsername} />  </Route>
          {/* render={routeProps => <ChatScreen {...routeProps} currentUsername={this.state.currentUsername}/>} />  */}
      </Switch>
    </Router>
    )

/*     if (this.state.currentScreen === 'WhatIsYourUsernameScreen') {
        return <UsernameForm onSubmit={this.onUsernameSubmitted} />
      //return 
     }
     if (this.state.currentScreen === 'ChatScreen') {
          return <ChatScreen currentUsername={this.state.currentUsername} />  
     }*/
      //return 
  }
}

export default App
