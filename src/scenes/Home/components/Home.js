import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import commonStyles from '../../../styles/common';

export default class Home extends Component {
  static propTypes = {
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <View style={styles.stretched}>
          <Text>Welcome Home!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});