import React, {Component, PropTypes} from 'react';

// components
import {
  StyleSheet,
  View,
} from 'react-native';
import {Spinner} from '.';

// styles
import commonStyles from '../styles/common';

export default SpinnerOverlay = ({show}) => (
  <View style={[commonStyles.overlayContainer, !show && commonStyles.hidden]}>
    <View style={commonStyles.overlay} />
    <Spinner />
  </View>
);

SpinnerOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
};

SpinnerOverlay.defaultProps = {
  show: false,
};

const styles = StyleSheet.create({
});