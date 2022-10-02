import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loginAction from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.buttonEnabler);
  };

  buttonEnabler = () => {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php
    if (password.length >= MIN_PASSWORD_LENGTH && email.match(mailformat)) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  render() {
    const {
      email,
      disabled,
    } = this.state;
    const {
      loginDispatch,
    } = this.props;
    return (
      <div>

        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
        </label>

        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => loginDispatch(this.state) }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: ({ email }) => dispatch(loginAction(email)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// Salve o email no estado global da aplicação, com a chave email, assim que a pessoa usuária logar;
