import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
// import {SpinnerOverlay} from '../../../components';
import commonStyles from '../../../styles/common';
import {t} from '../../../i18n';
import dictionary from '../dictionary';

export default class Profile extends Component {
  static propTypes = {
    isFetchingProfile: PropTypes.bool.isRequired,
    isSavingProfile: PropTypes.bool.isRequired,
    isEditable: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    form: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    changeFormValue: PropTypes.func.isRequired,
    saveProfile: PropTypes.func.isRequired,
    toggleEditMode: PropTypes.func.isRequired,
  };

  render() {
    const {
      isEditMode,
      isEditable,
      isSavingProfile,
      toggleEditMode,
      saveProfile,
      form,
      user,
      changeFormValue
    } = this.props;

    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <SpinnerOverlay show={isSavingProfile} />

        <View style={styles.field}>
          {
            isEditMode
            ? <TextInput
                style={styles.input}
                value={form.firstName}
                onChangeText={(firstName) => changeFormValue('firstName', firstName)}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoFocus={false}
                placeholder={t(dictionary.firstName)}/>
            : <Text style={styles.info}>First Name: {user.profile.first_name}</Text>
          }
        </View>
        <View style={styles.field}>
          {
            isEditMode
            ? <TextInput
                style={styles.input}
                value={form.lastName}
                onChangeText={(lastName) => changeFormValue('lastName', lastName)}
                autoCapitalize={'none'}
                autoCorrect={false}
                autoFocus={false}
                placeholder={t(dictionary.lastName)}/>
            : <Text style={styles.info}>Last Name: {user.profile.last_name}</Text>
          }
        </View>
        {
          isEditable &&
            isEditMode
            ? <View style={styles.actions}>
                <Button
                  style={styles.button}
                  onPress={() => toggleEditMode(false)}
                  title={t(dictionary.cancel)}
                  accessibilityLabel={t(dictionary.cancel)}
                />
                <Button
                  style={styles.button}
                  onPress={saveProfile}
                  disabled={isSavingProfile || !form.firstName || !form.lastName}
                  title={t(dictionary.saveProfile)}
                  accessibilityLabel={t(dictionary.saveProfile)}
                />
              </View>
            : <View style={styles.actions}>
                <Button
                  style={styles.button}
                  onPress={() => toggleEditMode(true)}
                  title={t(dictionary.editProfile)}
                  accessibilityLabel={t(dictionary.editProfile)}
                />
              </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    width: 400,
    alignItems: 'stretch',
    marginBottom: 10,
  },
  info: {
    textAlign: 'center',
  },
  input: {
  },
  button: {
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
  },
});