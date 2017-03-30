import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import commonStyles from '../../../styles/common';

const styles = StyleSheet.create({
});

export default class Home extends Component {
  static propTypes = {
    changeScene: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centered]}>
        <View style={styles.stretched}>
          <Text>Welcome Home!</Text>
        </View>
      </View>
    );
  }
}