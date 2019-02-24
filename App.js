/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import Todos from './list.js';

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      info: '',
      todos: []
    }
    this.changeValue = this.changeValue.bind(this);
    this.submitText = this.submitText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeValue(value) {
    this.setState({
      info: value
    })
  }

  submitText() {
    const { todos, info } = this.state;
    let newTodos = [...todos];
    newTodos.push(info);
    this.setState({
      info: '',
      todos: newTodos,
    })
  }

  handleClick(i) {
    const newTodos = [...this.state.todos];
    newTodos.splice(i,1);
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { info, todos } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Todo App!</Text>
        <View>
        <TextInput value={info} 
          onChangeText={(value) => {this.changeValue(value)}} 
          style={styles.inputField} 
          placeholder="Enter Text"/>
        </View>
        <Button onPress={this.submitText} title="Submit"/>
        {todos.map((todo, i) =>
          <Todos todo={todo} key={i} index={i} click={this.handleClick}/>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputField: {
    textAlign: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    width: 100
  },
});
