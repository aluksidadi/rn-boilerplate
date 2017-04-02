import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import commonStyles from '../../../styles/common';
import {t} from '../../../i18n';
import dictionary from '../dictionary';

export default class Home extends Component {
  static propTypes = {
    me: PropTypes.object.isRequired,
    openHomeModal: PropTypes.func,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <View style={styles.stretched}>
          <Text style={styles.body}>
            {t(dictionary.welcome, this.props.me.profile.first_name, this.props.me.profile.last_name)}
          </Text>
          <Button title={t(dictionary.openModal)} onPress={this.props.openHomeModal} />
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