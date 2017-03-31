import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Home from './components/Home';
// import {} from './homeActions.js';
import {changeScene} from '../../modules/navigation/navigationActions.js';
import OpenDrawerButtonContainer from '../../modules/navigation/OpenDrawerButtonContainer';
import NavBar from '../../modules/navigation/components/NavBar';

class HomeContainer extends Component {
  static propTypes = {
    changeScene: PropTypes.func.isRequired,
  };

  static renderNavigationBar = (props) => {
    return (
      <NavBar
        title={props.title}
        leftButton={<OpenDrawerButtonContainer />} />
    );
  };

  render() {
    return <Home />
  }
}

function mapStateToProps(state) {
  return {
    ...state.homeScene,
  };
}

export default connect(
  mapStateToProps,
  {
    changeScene,
  }
)(HomeContainer);
