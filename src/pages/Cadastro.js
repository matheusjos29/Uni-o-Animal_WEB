import React, { useState } from 'react';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#18363E' }}>
      <div style={{ background: '#23504F', padding: '20px', borderRadius: '10px', width: '400px' }}>
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>Nome Completo:</label>
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: 'white' }}>Número de Telefone:</label>
            <input
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }}
              required
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none', background: '#0D2C2B', color: 'white', cursor: 'pointer' }}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
