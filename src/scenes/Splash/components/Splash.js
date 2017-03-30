import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import commonStyles from '../../../styles/common';

const styles = StyleSheet.create({
});

export default Splash = () => (
  <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
    <View style={styles.stretched}>
      <Text>Splash....</Text>
    </View>
  </View>
);