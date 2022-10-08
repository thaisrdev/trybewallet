import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { expenses.map((element) => (

          <tbody key={ element.id }>
            <tr>
              <td>{ element.description }</td>
              <td>{ element.tag }</td>
              <td>{ element.method }</td>
              <td>{ (Number(element.value)).toFixed(2) }</td>
              <td>{ (element.exchangeRates[element.currency].name) }</td>
              <td>{ Number(element.exchangeRates[element.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(element.value)
                * Number(element.exchangeRates[element.currency].ask))
                  .toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                >
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape({
    }).isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(Table);
