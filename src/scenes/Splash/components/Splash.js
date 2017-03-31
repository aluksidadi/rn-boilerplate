import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import commonStyles from '../../../styles/common';

export default Splash = () => (
  <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
    <View style={styles.stretched}>
      <Text>Splash....</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
});