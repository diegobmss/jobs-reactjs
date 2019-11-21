import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { MdThumbUp } from 'react-icons/md';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { StyledSubscribe } from './styles';

function Subscribe() {
  const [inputs, setInputs] = useState({ name: '', email: '' });
  const [addSubscribe, { loading, data }] = useMutation(
    gql`
      mutation {
        subscribe(input: { name: "${inputs.name}", email: "${inputs.email}" }) {
          subscribe
        }
      }
    `
  );

  const handleInputChange = (e: { persist: () => void; target: { name: any; value: any; }; }) => {
    e.persist();
    // eslint-disable-next-line no-shadow
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addSubscribe();
    toast.success('Candidatura efetuada com sucesso!');
  };

  return (
    <StyledSubscribe>
      <form onSubmit={handleSubmit} className="modal-card-foot">
        <input
          required
          placeholder="Nome"
          name="name"
          onChange={handleInputChange}
          value={inputs.name}
        />
        <input
          required
          placeholder="E-mail"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <button type="submit" disabled={!!(data && data.subscribe)}>
          <div>
            {loading ? (
              <FaSpinner size={16} color="#FFF" />
            ) : (
              <MdThumbUp size={16} color="#FFF" />
            )}
          </div>

          <span>
            {data && data.subscribe ? 'ENVIADO' : 'CONFIRMAR CANDIDATURA'}
          </span>
        </button>
      </form>
    </StyledSubscribe>
  );
}

export default Subscribe;
