import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ToolList from './components/ToolList';

import { provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <provider store={store}>
        <div className="App">
          <AppNavbar />
          <ToolList />
        </div>
      </provider>
    );
  }
}
export default App;
