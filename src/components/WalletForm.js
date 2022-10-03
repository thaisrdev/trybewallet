import React, { Component } from 'react';
// import getCurrencies from './api';

class WalletForm extends Component {
  render() {
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
            {/* Um campo para selecionar em qual moeda será registrada a despesa.
            As options devem ser preenchidas pelo valor da chave currencies do estado global.
            Os valores da chave currencies no estado global devem ser puxados através de uma requisição à API no endpoint https://economia.awesomeapi.com.br/json/all;
            Remova, das informações trazidas pela API, a opção 'USDT';
            A chave currencies do estado global deve ser um array. */}
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

export default WalletForm;
