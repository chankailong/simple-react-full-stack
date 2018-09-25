import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
    this.handleClickDynamodb = this.handleClickDynamodb.bind(this);
    this.handleClickmysql = this.handleClickmysql.bind(this);
  }

  handleClickDynamodb() {
    fetch('/api/dynamodbget')
      .then(function(response) {
        return response.json();
      })
      .then( (myJson) => {
        this.setState({ message: myJson[0].message })
      });
  }

  handleClickmysql() {
    fetch('/api/mysqlget')
      .then(function(response) {
        return response.json();
      })
      .then( (myJson) => {
        this.setState({ message: myJson[0].message })
      });
  }

  render() {
    const { message } = this.state;
    console.log(this.state)
    return (
      <div>
        <button onClick={this.handleClickDynamodb}>Click Me (I am DynamoDB)!</button>
        <button onClick={this.handleClickmysql}>Click Me (I am MySQLDB)!</button>
        <div>{message}</div>
      </div>
    );
  }
}
