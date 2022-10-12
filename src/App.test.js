import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './tests/helpers/renderWith';
// import App from './App';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

describe('Testando a aplicação TrybeWallet', () => {
  it('Testa a página de login', async () => {
    const { history } = renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-button');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    userEvent.type(emailInput, 'abc@hotmail.com');
    userEvent.type(passwordInput, '123456');
    expect(emailInput.value).toBe('abc@hotmail.com');
    expect(passwordInput.value).toBe('123456');
    expect(loginButton).toBeEnabled();
    userEvent.click(loginButton);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/carteira');
    }, { timeout: 5000 });
  });

  it('testa a página da carteira', () => {
    renderWithRouterAndRedux(<Wallet />);
    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');
    expect(emailField).toBeInTheDocument();
    expect(totalField).toBeInTheDocument();
    expect(currencyField).toBeInTheDocument();
  });
});
