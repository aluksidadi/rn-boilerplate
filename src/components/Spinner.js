import React, {Component, PropTypes} from 'react';

// components
import {
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

// styles
import commonStyles from '../styles/common';
import * as colors from '../styles/colors';
import * as font from '../styles/font';

export default Spinner = ({color, size}) => {
  const AnimatedSpinner = Animatable.createAnimatableComponent(Icon);
  return <AnimatedSpinner animation='rotate' iterationCount={'infinite'} name='spinner' color={color} size={size} />
};

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Spinner.defaultProps = {
  color: colors.WHITE,
  size: font.SIZE_H1,
};

const styles = StyleSheet.create({
});