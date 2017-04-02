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
    isEditable: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    form: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    changeFormValue: PropTypes.func.isRequired,
    toggleEditMode: PropTypes.func.isRequired,
    isUpdatingMyProfile: PropTypes.bool.isRequired,
    updateMyProfile: PropTypes.func.isRequired,
  };

  render() {
    const {
      isEditMode,
      isEditable,
      isUpdatingMyProfile,
      toggleEditMode,
      updateMyProfile,
      form,
      user,
      changeFormValue
    } = this.props;

    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <SpinnerOverlay show={isUpdatingMyProfile} />

        <View style={styles.field}>
          {
            isEditMode
            ? <TextInput
                style={styles.input}
                value={form.first_name}
                onChangeText={(first_name) => changeFormValue('first_name', first_name)}
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
                value={form.last_name}
                onChangeText={(last_name) => changeFormValue('last_name', last_name)}
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
                  onPress={() => updateMyProfile(form)}
                  disabled={isUpdatingMyProfile || !form.first_name || !form.last_name}
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