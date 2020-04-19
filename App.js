import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: 'fasz',
      customStyle: {
        color: 'green'
      }
    }
  }

  onClickHandler = () => {
    this.setState({
      text: 'nemis',
      customStyle: {
        color: 'red'
      }
    })
  }

  render() {
    return (

      <View style={styles.container} >
        <View style={styles.half} />
        <View style={styles.half2} />
        {/* <Button onPress={this.onClickHandler} title="asd" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  half: {
    flex: 1,
    backgroundColor: 'red'
  },
  half2: {
    flex: 1,
    backgroundColor: 'green'
  }
});


