import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import commonStyles from '../../../styles/common';

export default class Home extends Component {
  static propTypes = {
    openHomeModal: PropTypes.func,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <View style={styles.stretched}>
          <Text>Welcome Home!</Text>
          <Button title={'Open Modal'} onPress={this.props.openHomeModal} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});