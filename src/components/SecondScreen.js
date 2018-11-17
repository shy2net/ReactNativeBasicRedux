import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCounter } from '../actions';

export class SecondScreen extends Component {
    static navigationOptions = {
        title: 'Second Screen',
      };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { this.props.addCounter() }}><Text>Click to raise counter</Text></TouchableOpacity>
        <Text>{ this.props.counter }</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.app.counter
})

const mapDispatchToProps = {
  addCounter: addToCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen)
