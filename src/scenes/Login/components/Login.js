import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import commonStyles from '../../../styles/common';

const styles = StyleSheet.create({
  input: {
    width: 400,
  }
});

export default class Login extends Component {
  static propTypes = {
    form: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    isLogging: PropTypes.bool.isRequired,
    changeFormValue: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={[commonStyles.fullScreen, commonStyles.centered]}>
        <View style={styles.stretched}>
          <TextInput
            style={styles.input}
            value={this.props.form.username}
            onChangeText={(username) => this.props.changeFormValue('username', username)}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={true}
            keyboardType={'email-address'}
            placeholder={'Email'}/>
        </View>
        <View>
          <TextInput
            style={styles.input}
            value={this.props.form.password}
            onChangeText={(password) => this.props.changeFormValue('password', password)}
            secureTextEntry={true}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoFocus={false}
            keyboardType={'default'}
            placeholder={'Password'}/>
        </View>
        <View>
          <Button
            style={styles.input}
            onPress={() => this.props.login(this.props.form.username, this.props.form.password)}
            disabled={this.props.isLogging || !this.props.form.username || !this.props.form.password}
            title="Login"
            accessibilityLabel="Login"
          />
        </View>
      </View>
    );
  }
}