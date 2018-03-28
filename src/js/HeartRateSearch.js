import React, { Component } from 'react';
import '../css/HeartRateSearch.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



class HeartRateSearch extends Component {

  constructor() {
    super();
    this.state = {
      "curr_user": "None",
      "graph_visible": false,
    };
  }

  render() {
    return (
      <div className="hrsearch-body">
        <div className="email-field">
          <TextField
            hintText="Who Are You?"
            floatingLabelText="Email"
            type="Email" />
        </div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="email-search-button">
          <RaisedButton 
            primary={true}
            label="Find Heart Rate"
            labelColor="white" />
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default HeartRateSearch;
