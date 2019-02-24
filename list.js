import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Todos extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pointer: false
    }

    this.onPointer = this.onPointer.bind(this);
  }

  onPointer() {
    this.setState({
      pointer: !this.state.pointer
    })
  }

  render() {
    const { todo, index, click } = this.props;

    const styles = StyleSheet.create({
      text: {
        textAlign: 'center',
        color: this.state.pointer ? 'blue' : 'black'
      }
    })

    return (
      <TouchableHighlight underlayColor="#F5FCFF" onPress={() => click(index)} onShowUnderlay={this.onPointer} onHideUnderlay={this.onPointer}>
        <View>
          <Text style={styles.text}>{todo}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Todos;