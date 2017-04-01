import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import commonStyles from '../styles/common';
import {Spinner} from '.';

export default SpinnerOverlay = () => (
  <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
    <View style={commonStyles.overlay} />
    <Spinner />
  </View>
);

SpinnerOverlay.propTypes = {
};

const styles = StyleSheet.create({
});