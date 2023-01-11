import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button } from '@material-ui/core';
import QuestionsTable from './components/QuestionsTable';
import MonthTable from './components/MonthTable';
import Selector from './components/Selector';
import SideBar from './components/sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: ['hello'],
      questions1: ['hello'],
      query: 'A',
      query1: 'AMA',
      game1: 'x2',
      showFullMonthTable: false,
      rowsToShow: 3,
    };
    this.getTopQuestions(this.state.query, this.state.game1);
    this.getTopQuestions1(this.state.query1, this.state.game1);
  }


  getTopQuestions(query, game1) {
    axios.get(`stackoverflow/${query}/${game1}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ questions: res.data });
      });
  }

  getTopQuestions1(query1, game1) {
    axios.get(`stackoverflow/${query1}/${game1}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ questions1: res.data });
      });
  }

  updateGame = (game) => {
    this.setState({ game1: game });
  };

  handleQuery = (queryValue, game1) => {
    console.log(queryValue);
    this.setState({ query: queryValue });
    this.getTopQuestions(queryValue, game1);
    this.getTopQuestions1(queryValue + 'MA', game1);
  };

  handleExpand = () => {
    this.setState((prevState) => ({ showFullMonthTable: !prevState.showFullMonthTable }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <SideBar selectedGame={this.state.game1} onIdChange={this.updateGame} />
            <div style={{ marginLeft: '20px', alignSelf: 'center' }}>
              <div className='game-container'>
                <p className='query-text'>{this.state.game1} {this.state.query}</p>
                <Button variant="contained" color="primary" onClick={this.handleExpand}>{this.state.showFullMonthTable ? "Collapse" : "Expand"}</Button>
              </div>
            </div>
          </div>
          {/* <div>
            <MonthTable questions1={this.state.questions1} showFull={this.state.showFullMonthTable}/>
          </div> */}
          <div><QuestionsTable questions={this.state.questions} questions1={this.state.questions1} showFull={this.state.showFullMonthTable}/></div>
          <div ><Selector onQueryChange={this.handleQuery} query={this.state.query} game1={this.state.game1} /></div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
