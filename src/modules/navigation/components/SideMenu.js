import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text,
	TouchableOpacity,
} from 'react-native';
import commonStyles from '../../../styles/common';
import * as font from '../../../styles/font';
import {SCENES} from '../../../routes';
import {t} from '../../../i18n';
import dictionary from '../dictionary';

export default SideMenu = ({changeScene, logout}) => (
	<View style={styles.container}>
		<View style={styles.menuHeader}>
			<Text style={styles.menuHeaderText}>
				{t(dictionary.navTitle)}
			</Text>
		</View>
		<View style={styles.menuItem}>
			<TouchableOpacity onPress={() => changeScene(SCENES.home.key)}>
				<Text>
					{t(dictionary.home)}
				</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.menuItem}>
			<TouchableOpacity onPress={() => changeScene(SCENES.profile.key)}>
				<Text>
					{t(dictionary.profile)}
				</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.menuItem}>
			<TouchableOpacity onPress={logout}>
				<Text>
					{t(dictionary.logout)}
				</Text>
			</TouchableOpacity>
		</View>
	</View>
);

SideMenu.propTypes = {
	changeScene: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	menuHeader: {
		padding: 20,
	},
  menuHeaderText: {
    textAlign: 'center',
    fontSize: font.SIZE_H1,
  },
	menuItem: {
		padding: 20,
	},
});