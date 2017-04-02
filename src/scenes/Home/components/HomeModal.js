import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  Dimensions,
} from 'react-native';
import commonStyles from '../../../styles/common';
import * as colors from '../../../styles/colors';
import * as font from '../../../styles/font';
import {t} from '../../../i18n';
import dictionary from '../dictionary';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default HomeModal = ({isHomeModalOpen, closeHomeModal} ) => (
  <Modal
    animationType={"slide"}
    transparent={true}
    visible={isHomeModalOpen}
    onRequestClose={closeHomeModal}
    >
    <View style={[commonStyles.fullScreen, commonStyles.overlay]} />
    <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
      <View style={styles.modal}>
        <Text style={styles.heading}>{t(dictionary.homeModalTitle)}</Text>
        <Text style={styles.body}>{t(dictionary.homeModalBody)}</Text>
        
        <View style={styles.actions}>
          <Button title={t(dictionary.closeModal)} onPress={closeHomeModal} />
        </View>
      </View>
    </View>
  </Modal>
);

HomeModal.propTypes = {
  isHomeModalOpen: PropTypes.bool.isRequired,
  closeHomeModal: PropTypes.func,
};


const styles = StyleSheet.create({
  modal: {
    width: windowWidth * 0.7,
    padding: 20,
    backgroundColor: colors.WHITE,
  },
  heading: {
    fontSize: font.SIZE_H1,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontSize: font.SIZE_NORMAL,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});