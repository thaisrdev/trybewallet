import { GET_API, GET_EXPENSES, DELETE_BUTTON } from '../../components/actionTypes';
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INICIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_API:
    return {
      ...state,
      currencies: Object.keys(action.payload)
        .filter((element) => element !== 'USDT') };
  case GET_EXPENSES:
    console.log(action.payload);
    return {
      ...state,
      expenses: [...state.expenses,
        {
          id: state.expenses.length,
          value: action.payload.value,
          description: action.payload.description,
          currency: action.payload.currency,
          method: action.payload.method,
          tag: action.payload.tag,
          exchangeRates: action.payload.exchangeRates,
        }],
    };
  case DELETE_BUTTON:
    return {
      ...state,
      expenses: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
