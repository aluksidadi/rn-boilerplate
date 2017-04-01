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
    me: PropTypes.object.isRequired,
    openHomeModal: PropTypes.func,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <View style={styles.stretched}>
          <Text style={styles.body}>Welcome {this.props.me.profile.first_name} {this.props.me.profile.last_name}!</Text>
          <Button title={'Open Modal'} onPress={this.props.openHomeModal} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginBottom: 20,
  },
});