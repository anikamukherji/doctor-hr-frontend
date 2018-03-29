import React, { Component } from 'react';
import '../css/App.css';
import HeartRateSearch from './HeartRateSearch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    return (
      <body>
       <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                <a href="#" className="effect-box">
                Anika Mukherji's BME590 Project
                </a>
              </h1>
            </header>
            <HeartRateSearch/>
          </div>
       </MuiThemeProvider>
      </body>
    );
  }
}

export default App;
