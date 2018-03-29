import React, { Component } from 'react';
import '../css/HeartRateSearch.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiThemeWhiteText = getMuiTheme({
  textField: {
    hintColor: 'white',
    labelColor: 'white',
    floatingLabelColor: cyan500,
  },
});



class HeartRateSearch extends Component {

  constructor() {
    super();
    this.state = {
      currUser: null,
      userHR: [null],
      graphVisible: false,
    };
    this.getHR = this.getHR.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getHR(event) {
    var requestURL = "http://vcm-3576.vm.duke.edu:5000/api/heart_rate/{0}".format(event.target.value)
    axios.get(requestURL).then( (response) => { 
      console.log(response.status);
      this.setState({userHR: response.data});
    }); 
  }

  handleChange(event) {
    this.setState({currUser: event.target.value});
  }

  render() {
    return (
      <div className="hrsearch-body">
        <MuiThemeProvider muiTheme={muiThemeWhiteText}>
          <div className="email-field">
            <TextField
              hintText="Who Are You?"
              floatingLabelText="Email"
              type="Email" 
              onChange={this.handleChange} />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="email-search-button">
            <RaisedButton 
              primary={true}
              label="Find Heart Rate"
              labelColor="white" 
              onClick={this.getHR}/>
            <p>{this.state.userHR}</p>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default HeartRateSearch;
