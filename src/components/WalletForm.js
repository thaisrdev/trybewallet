import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <label htmlFor="value-input">
          {' '}
          Valor da despesa:
          <input
            data-testid="value-input"
            type="text"
          />
        </label>

        <label htmlFor="description-input">
          {' '}
          Descrição:
          <input
            data-testid="description-input"
            type="text"
          />
        </label>

        <label htmlFor="currency-input">
          <select data-testid="currency-input">
            { currencies.map((element) => (
              <option key={ element }>{element}</option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          {' '}
          Método de pagamento:
          <select data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          {' '}
          Categoria:
          <select data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
