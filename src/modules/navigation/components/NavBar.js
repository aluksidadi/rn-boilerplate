import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import commonStyles from '../../../styles/common';
import * as colors from '../../../styles/colors';
import * as font from '../../../styles/font';
import {Header} from '../../../components';

export default NavBar = ({leftButton, title, rightButton}) => (
  <View style={styles.navbar}>
    <Header>
      {
        leftButton &&
        <View style={styles.leftButton}>
          {leftButton}
        </View>
      }
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {
        rightButton &&
        <View style={styles.rightButton}>
          {rightButton}
        </View>
      }
    </Header>
  </View>
);

NavBar.propTypes = {
	leftButton: PropTypes.element,
  rightButton: PropTypes.element,
	title: PropTypes.string,
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 0,
    top: 0,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54,
      },
      windows: {
        height: 54,
      },
    }),
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute',
  },
  title: {
   marginTop: 10,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 5,
      },
      windows: {
        top: 5,
      },
    }),
    left: 0,
    right: 0,
  },
  titleText: {
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: font.SIZE_H1,
    alignSelf: 'center',
  },
  rightButton: {
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 22,
      },
      android: {
        top: 10,
      },
      windows: {
        top: 8,
      },
    }),
    right: 2,
    padding: 8,
  },
  leftButton: {
    height: 37,
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: 20,
      },
      android: {
        top: 8,
      },
      windows: {
        top: 8,
      },
    }),
    left: 2,
    padding: 8,
  },
});