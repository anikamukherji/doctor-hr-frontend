import React, { Component } from 'react';
import '../css/App.css';
import HeartRateSearch from './HeartRateSearch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <body>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">
                Anika Mukherji's BME590 Project
              </h1>
            </header>
            <HeartRateSearch/>
          </div>
        </body>
      </MuiThemeProvider>
    );
  }
}

export default App;
