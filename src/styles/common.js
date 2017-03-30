import {
  StyleSheet,
} from 'react-native';

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
});