import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  somaDespesas = () => {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      const { currency, value, exchangeRates } = curr;
      const { ask } = exchangeRates[currency];
      return acc + Number(value * ask);
    }, 0);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.somaDespesas().toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, null)(Header);
