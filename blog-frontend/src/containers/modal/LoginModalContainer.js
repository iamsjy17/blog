import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import { changePasswordInput } from '../../store/modules/base';

class LoginModalContainer extends Component {
  handleLogin = async () => {
    const { BaseActions, password } = this.props;
    try {
      await BaseActions.login(password);
      BaseActions.hideModal('login');
      localStorage.logged = 'true';
    } catch (e) {
      console.log(e);
    }
  };

  handleCancle = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  };

  handleChange = e => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  };

  handelKeyPress = e => {
    if (e.key === 'Enter') this.handleLogin();
  };

  render() {
    const { handleLogin, handleCancle, handleChange, handelKeyPress } = this;
    const { visible, error, password } = this.props;
    return (
      <LoginModal
        onLogin={handleLogin}
        onCancle={handleCancle}
        onChange={handleChange}
        onKeyPress={handelKeyPress}
        visible={visible}
        error={error}
        password={password}
      />
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['modal', 'login']),
    password: state.base.getIn(['loginModal', 'password']),
    error: state.base.getIn(['loginModal', 'error'])
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);
