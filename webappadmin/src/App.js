import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './pages/Login';
import NavBar from './components/NavBar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }




  render() {
    return (
      <div>
        <div>{this.state.user ? (<NavBar />) : (<Login />)}</div>
      </div>
    );
  }
}

export default App;