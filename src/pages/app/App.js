import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import './App.css';
import * as UserApi from '../../services/user-api'

class App extends Component {
  state = {
    users: []
  };

  handleAddUser = async newUserData => {
    const newUser = await UserApi.create(newUserData);
    this.setState(state => ({
      users: [...state.users, newUser]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Users
        </header>
        <main>
          <SignupForm
            handleAddUser={this.handleAddUser}
          />
        </main>
      </div>
    );
  }
}

export default App;
