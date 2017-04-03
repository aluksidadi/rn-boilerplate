import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// actions
import {back} from './navigationActions';

// components
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import * as colors from '../../styles/colors';
import * as font from '../../styles/font';

class BackButtonContainer extends Component {
  static propTypes = {
    // actions
    back: PropTypes.func.isRequired,
  };

  render(){
    const {back} = this.props;
    return (
      <TouchableOpacity onPress={back}>
        <Icon name='arrow-left' size={font.SIZE_H1} color={colors.WHITE} />
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(state) {
  const {isDrawerOpen} = state.navigation;
  return {
  };
}

export default connect(
  mapStateToProps,
  {
    // actions
    back,
  }
)(BackButtonContainer);