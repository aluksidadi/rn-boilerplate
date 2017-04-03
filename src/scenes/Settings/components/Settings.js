import React, {Component, PropTypes} from 'react';

// components
import {
  StyleSheet,
  View,
  Picker,
  Switch,
  Button,
  Text,
} from 'react-native';
import {SpinnerOverlay} from '../../../components';

// styles
import commonStyles from '../../../styles/common';

// i18n
import {t} from '../../../i18n';
import dictionary from '../dictionary';

// constants
import {LOCALES} from '../../../constants/constants'; 

export default class Profile extends Component {
  static propTypes = {
    // states
    form: PropTypes.shape({
      locale: PropTypes.string,
      is_push_notification_on: PropTypes.bool,
    }),

    // actions
    changeFormValue: PropTypes.func.isRequired,

    // module states
    isUpdatingMySettings: PropTypes.bool.isRequired,

    // module actions
    updateMySettings: PropTypes.func.isRequired,
  };

  render() {
    const {
      isUpdatingMySettings,
      updateMySettings,
      form,
      changeFormValue
    } = this.props;

    return (
      <View style={[commonStyles.fullScreen, commonStyles.centeredChilds]}>
        <SpinnerOverlay show={isUpdatingMySettings} />

        <View style={styles.field}>
          <Text style={styles.label}>Language</Text>
          <Picker
            style={styles.input}
            selectedValue={form.locale}
            onValueChange={(locale) => changeFormValue('locale', locale)}>
            {
              Object.keys(LOCALES).map((key) => <Picker.Item key={key} label={LOCALES[key].label} value={LOCALES[key].value} />)
            }
          </Picker>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Push Notification</Text>
          <Switch
            style={styles.input}
            onValueChange={(value) => changeFormValue('is_push_notification_on', value)}
            value={form.is_push_notification_on} />
        </View>
        <View style={styles.actions}>
          <Button
            style={styles.button}
            onPress={() => updateMySettings(form)}
            disabled={isUpdatingMySettings}
            title={t(dictionary.save)}
            accessibilityLabel={t(dictionary.save)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    width: 200,
  },
  input: {
    width: 200,
  },
  button: {
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
  },
});