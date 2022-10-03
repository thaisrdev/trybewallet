import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <table>
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
          {/* <tr>
    <td></td>
  </tr> */}
        </table>
      </div>
    );
  }
}

export default Wallet;

// The <table> tag defines an HTML table.

// An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements.

// The <tr> element defines a table row, the <th> element defines a table header, and the <td> element defines a table cell.
