import {
  StyleSheet,
} from 'react-native';
import * as colors from './colors';

export default styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  rowChilds: {
    flexDirection: 'row',
  },
  columnChilds: {
    flexDirection: 'column',
  },
  centeredChilds: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretchedChilds: {
    alignItems: 'stretch',
  },
  stretched: {
    alignSelf: 'stretch',
  },
  overlay: {
    backgroundColor: colors.BLACK,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});