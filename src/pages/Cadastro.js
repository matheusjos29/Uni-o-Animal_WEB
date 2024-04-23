import React, { useState } from 'react';
import './cadastro.css';

function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome Completo:', nomeCompleto);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Telefone:', telefone);
  };

  return (
    React.createElement('div', { className: 'container' },
      React.createElement('div', { className: 'caixa-cadastro' },
        React.createElement('h1', { className: 'cadastro-nome' }, 'Cadastro'),
        React.createElement('form', { onSubmit: handleSubmit },
          React.createElement('div', { className: 'caixa-de-texto' },
            React.createElement('div', null,
              React.createElement('label', null, 'Nome Completo:'),
              React.createElement('input', {
                type: 'text',
                value: nomeCompleto,
                onChange: (e) => setNomeCompleto(e.target.value),
                style: { width: '100%', padding: '8px', borderRadius: '5px', border: 'none' },
                required: true
              })
            ),
            React.createElement('div', null,
              React.createElement('label', null, 'Email:'),
              React.createElement('input', {
                type: 'email',
                value: email,
                onChange: (e) => setEmail(e.target.value),
                style: { width: '100%', padding: '8px', borderRadius: '5px', border: 'none' },
                required: true
              })
            ),
            React.createElement('div', null,
              React.createElement('label', null, 'Senha:'),
              React.createElement('input', {
                type: 'password',
                value: senha,
                onChange: (e) => setSenha(e.target.value),
                style: { width: '100%', padding: '8px', borderRadius: '5px', border: 'none' },
                required: true
              })
            ),
            React.createElement('div', null,
              React.createElement('label', null, 'Número de Telefone:'),
              React.createElement('input', {
                type: 'text',
                value: telefone,
                onChange: (e) => setTelefone(e.target.value),
                style: { width: '100%', padding: '8px', borderRadius: '5px', border: 'none' },
                required: true
              })
            )
          ),
          React.createElement('button', { type: 'submit', className: 'butao' }, 'Cadastrar')
        )
      )
    )
  );
}

export default Cadastro;
